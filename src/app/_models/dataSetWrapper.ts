import { DataSetManager, Operation } from '.';
import { Output, EventEmitter, Directive } from '@angular/core';
import { Guid } from 'guid-typescript';
import { _ } from 'ag-grid-community';
import { RefreshType } from '@app/_consts/RefreshType';
import { OnCFService } from '@app/_services/oncf.service';
import { ActionDefinitionWrapper } from './actionDefinitionWrapper';

@Directive()
export class DataSetWrapper {
    private _rows: any[];
    private _dataSource: any;
    public activeRow: any;
    public errors: [any];
    public fields: [any];
    public actions: [ActionDefinitionWrapper];
    public connectedLookups: any;
    public isLookup = false;
    public hasOnCF = false;
    public onCFFields: any = {};

    @Output()
    activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    afterPropagte: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    lookupAfterPropagte: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    afterSetFieldValue: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    beforeSetFieldValue: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    rowIsLocked: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    rowIsUnLocked: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public ident: string,
        public dataSourceManager: DataSetManager,
        private dataSetManagerSource: DataSetManager,
        protected _oncfService: OnCFService
        ) {
        this._rows = null;
        this.fields = null;
        this.actions = null;
        this.readFields();
        this.readLookups();
        this.readOnCF();
        this.readActions()
    }

    get rows(): any[] {
        return this._rows;
    }

    set rows(value) {
        this._rows = value;
    }

    get hasLookups(): boolean {
        return this.connectedLookups != null;
    }

    get parents() {
        const dataSourceDef = this.getDataSource();
        if (!dataSourceDef || !dataSourceDef.hasParents) {
            return null;
        }

        return dataSourceDef.parents;
    }

    private getDataSource() {
        if (this._dataSource) {
            return this._dataSource;
        }
        this._dataSource = this.dataSourceManager?.FindDataSource(this.ident);
        return this._dataSource;
    }

    public getDataSetManagerSource(): DataSetManager {
        return this.dataSetManagerSource;
    }

    public Refresh() {
        this.dataSourceManager.Refresh([this.ident]);
    }

    public RefreshChildren() {
        this.dataSourceManager.RefreshChildren(this);
    }

    public SetActiveRow(row: any, refreshChildren: boolean = true) {
        if(row !== this.activeRow) {
            this.activeRow = row;
            this.activeRowChanged.emit(this.activeRow);
            if (refreshChildren) {
                this.dataSourceManager.RefreshChildren(this, RefreshType.ActiveRow);
            }
        }
    }

    private readActions() {
        let dataSourceDef = this.getDataSource();
        if (dataSourceDef == null) {
            return;
        }
        this.actions = dataSourceDef?.actions;
    }

    private readOnCF() {
        let dataSourceDef = this.getDataSource();
        if (dataSourceDef == null) {
            return;
        }

        this.hasOnCF = dataSourceDef != null
                       && dataSourceDef.onCFSettings
                       && dataSourceDef.onCFSettings.isEnabled;

        if (this.hasOnCF) {
            delete dataSourceDef.onCFSettings.sqlObject;
            dataSourceDef.onCFSettings.fields.forEach(onCfField => {
                this.onCFFields[onCfField.fieldName] = true;
            });
        }
    }

    private readLookups() {
        let dataSourceDef = this.getDataSource();
        if (dataSourceDef == null) {
            return;
        }
        this.connectedLookups = dataSourceDef?.connectedLookups;
        this.isLookup = dataSourceDef?.isLookup;
    }

    private readFields() {
        let dataSourceDef = this.getDataSource();
        if (dataSourceDef == null) {
            return;
        }
        this.fields = dataSourceDef?.fields;
    }

    private findField(fieldName: string) {
        return this.fields.find(f => f.fieldName == fieldName);
    }

    public setInputDataSource(inputDataSource: any) {
        this.ident = inputDataSource.ident;
        this.rows = inputDataSource.rows;
        this.SetActiveRow(inputDataSource.activeRowIndex !== -1
            ? inputDataSource.rows[inputDataSource.activeRowIndex]
            : null,
            false);
        this.errors = inputDataSource.errors;
    }

    public AfterPropagte() {
        this.activeRowChanged.emit(this.activeRow);
        this.afterPropagte.emit(this.ident);
    }

    public LookupAfterPropagte() {
        this.lookupAfterPropagte.emit(this.ident);
    }

    public ExecuteAction(actionIdent: string,
                         owner: any,
                         executeActionCompletedCallback: Function,
                         executeActionExceptionCallback: Function,
                         sourceDictIdent: string = null
    ) {
        if (this.dataSourceManager == null) {
            console.error('ExecuteAction data source manager is undefinde!');
            return;
        }
        this.dataSourceManager.ExecuteAction(actionIdent, this.ident, owner,
            executeActionCompletedCallback, executeActionExceptionCallback, sourceDictIdent);
    }

    private initRows() {
        if (this._rows == null) {
            this._rows = [];
        }
    }

    public AddRow(row: any, activate: boolean = true) {
        if (row == null) {
            return;
        }
        this.initRows();
        this._rows.push(row);
        this.dataSourceManager.AddRow(this, row);
        if (activate) {
            this.SetActiveRow(row);
        }
    }

    public RemoveRow(row: any) {
        if (row == null) {
            return;
        }

        var changeActiveRow = row == this.activeRow;
        var index = this._rows.indexOf(row);

        this._rows.splice(index, 1);
        this.dataSourceManager.RemoveRow(this, row);
        var newActiveRow = null;
        newActiveRow = index == this._rows.length
              ? this._rows[this._rows.length-1]
              : this._rows[index];

        if (changeActiveRow) {
            this.SetActiveRow(newActiveRow);
        }
    }

    private initRowByEditFields(row: any, editFields: any[]) {
        if (editFields == null) {
            return;
        }
        editFields.forEach(field => {
            let value = null;
            if (field.value != null) {
                value = field.value;
            }
            if (field.setNewGuid) {
                value = Guid.create().toString();
                if(row.hasOwnProperty("__Identity__") && field.fieldName && field.fieldName.toLowerCase() == (this.ident+"G").toLowerCase()) {
                    row["__Identity__"] = value;
                }
            }

            row[field.fieldName] = value;
        });
    }

    public initRowByInitRow(initRow, sourceRow) {
        if (!initRow) {
            return;
        }
        for( var fieldName in initRow ) {
            if (!sourceRow.hasOwnProperty(fieldName)) {
                continue;
            }

            sourceRow[fieldName] = initRow[fieldName];
        }
    }

    private initRowByParents(sourceRow, dataSetManagerSource: DataSetManager) {
        const dataSourceDef = dataSetManagerSource?.FindDataSource(this.ident);
        if (!dataSourceDef || !dataSourceDef.hasParents) {
            return;
        }

        dataSourceDef.parents.forEach(parent => {
            const parentDataSource = dataSetManagerSource.FindDataSource(parent);
            const child = parentDataSource.children.find(c => c.ident === this.ident);
            if (!child || !child.connections) {
                return false;
            }

            const parentDataSet = dataSetManagerSource.getDateSourceWrapper(parent);
            if (parentDataSet == null || parentDataSet.activeRow == null) {
                return false;
            }

            child.connections.forEach(c => {
                let targetSource = c.targetSource;
                if (targetSource && targetSource[0] === '@') {
                    targetSource = targetSource.substring(1, targetSource.length);
                }

                const field = this.findField(targetSource);

                if (!field) {
                    return false;
                }

                const parentFieldValue = parentDataSet.activeRow[c.sourceField];
                this.setFieldValue(targetSource, parentFieldValue, sourceRow);
            });
        });
    }

    public allParentsHaveRows(): boolean {
        if (!this.parents) {
            return true;
        }

        let result = true;
        this.parents.forEach(parent => {
            const parentDataSet = this.dataSourceManager.getDateSourceWrapper(parent);
            if (!parentDataSet || !parentDataSet || !parentDataSet.rows || parentDataSet.rows.length === 0) {
                result = false;
                return false;
            }
        });

        return result;
    }

    public GenerateRow(
            sourceRow: any = null,
            add: boolean = true,
            editFields: any[] = null,
            initFromMaster: boolean = false,
            dataSetManagerSource: DataSetManager = null,
            initRow: any = null): any  {

        const newRow = {};
        if (this.fields == null) {
            console.error('Fields are empty [' + this.ident + ']');
            return null;
        }
        this.fields.forEach(field => {
            if (!field.isParam) {
                this.setFieldValue(field.fieldName, sourceRow != null && sourceRow.hasOwnProperty(field.fieldName) ? sourceRow[field.fieldName] : null, newRow);
            }
        });

        if (initFromMaster) {
            this.initRowByParents(newRow, dataSetManagerSource);
        }

        this.initRowByEditFields(newRow, editFields);
        this.initRowByInitRow(initRow, newRow);

        if (add) {
            this.AddRow(newRow, true);
        }

        return newRow;
    }

    private clearLookupsFieldsForField(fieldName: string, usedFields: string[], rowToChange: any ) {
        const lookupSettings = this.getLookupForField(fieldName);
        if (!lookupSettings) {
            return;
        }

        lookupSettings.valuesTo.forEach(valueTo => {
            if (usedFields.indexOf(valueTo.target) === -1) {
                usedFields.push(valueTo.target);
                this.setFieldValue(valueTo.target, null, rowToChange, false);
            }
        });
    }

    public lockPostRecord(row: any) {
        if (!row) {
            return true;
        }

        if(!row["__locked__"]) {
            row["__locked__"] = 1;
            this.rowIsLocked.emit(row);
        }
        else {
            row["__locked__"] += 1;
        }
        return true;
    }

    public unlockPostRecord(row: any): boolean{
        if (!row) {
            return true;
        }

        if(!row["__locked__"]) {
            row["__locked__"] = 0;
        }
        else {
            row["__locked__"] -= 1;
        }

        if (row["__locked__"] == 0) {
            this.rowIsUnLocked.emit(row);
            return true;
        }

        return false;
    }

    public onCFFinally(row) {
        this.unlockPostRecord(row);
    }

    public setFieldValue(fieldName: string, fieldValue: any, rowToChange: any = null, blockOnCF = true) {
        this.beforeSetFieldValue.emit(fieldName);
        const row = rowToChange ?? this.activeRow;
        if (row == null) {
            throw new Error('Active row is unnassigned');
        }

        if (!row.hasOwnProperty(fieldName)) {
            row[fieldName] = null;
        }

        if (typeof(fieldValue) == 'string' && fieldValue.trim() == '') {
            fieldValue = null;
        }

        if (row[fieldName] === fieldValue) {
            return;
        }

        row[fieldName] = fieldValue;

        if (!Boolean(fieldValue)) {
            const usedFields = [fieldName];
            this.clearLookupsFieldsForField(fieldName, usedFields, row);
        }
        if (!blockOnCF) {
            this._oncfService.valueChange(fieldName, fieldValue, this);
        }

        this.afterSetFieldValue.emit(fieldName);
    }


    public getFieldValue(fieldName: string, rowToChange: any = null) {
        const row = rowToChange ?? this.activeRow;
        if (row == null) {
            return null;
        }

        const result = row[fieldName];
        return result === undefined ? null : result;
    }

    public refreshFieldValueInControl(control) {
        const fieldValue = this.getFieldValue(control.field);
        control.dataSetWrapper = this;
        control.setValue(fieldValue);
    }

    public getLookupForField(field: string) {
        if (!this.connectedLookups) {
            return null;
        }
        return this.connectedLookups[field];
    }

    public getDataSetManager() {
        return this.dataSourceManager;
    }

    public getFieldId() {
        return '__Identity__';
      }
    public getFieldIdValue(row : any = null) {
        const fieldName = this.getFieldId();
        const fieldValue = row == null ? this.activeRow[fieldName] : row[fieldName];
        return fieldValue;
      }

}

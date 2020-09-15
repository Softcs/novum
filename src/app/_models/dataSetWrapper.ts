import { DataSetManager, Operation } from '.';
import { Output, EventEmitter } from '@angular/core';
import { Guid } from 'guid-typescript';

export class DataSetWrapper {
    private _rows: any[];
    public activeRow: any;
    public errors: [any];
    public fields: [any];

    @Output()
    activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        public ident: string,
        public dataSourceManager: DataSetManager,
        dataSetManagerSource: DataSetManager
    ) {
        this._rows = null;
        this.fields = null;
        this.readFields(dataSetManagerSource);
    }

    get rows(): any[] {
        return this._rows;
    }

    set rows(value) {
        this._rows = value;
    }

    public RefreshChildren() {
        this.dataSourceManager.RefreshChildren(this);
    }

    public SetActiveRow(row: any, refreshChildren: boolean = true) {
        if(row !== this.activeRow) {
            this.activeRow = row;
            this.activeRowChanged.emit(this.activeRow);
            if (refreshChildren) {
                this.dataSourceManager.RefreshChildren(this);
            }
        }
    }

    private readFields(dataSetManagerSource: DataSetManager) {
        let dataSourceDef = this.dataSourceManager?.FindDataSource(this.ident);
        if (dataSourceDef == null) {
            dataSourceDef = dataSetManagerSource?.FindDataSource(this.ident);
        }
        this.fields = dataSourceDef?.fields;
    }

    private findField(fieldName: string) {
        return this.fields.find(f => f.fieldName == fieldName);
    }

    public setInputDataSource(inputDataSource: any) {
        this.ident = inputDataSource.ident;
        this.rows = inputDataSource.rows;
        this.activeRow = inputDataSource.activeRowIndex !== -1 ? inputDataSource.rows[inputDataSource.activeRowIndex] : null;
        this.errors = inputDataSource.errors;
    }

    public AfterPropagte() {
        this.activeRowChanged.emit(this.activeRow);
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
            }

            row[field.fieldName] = value;
        });
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

    public GenerateRow(
        sourceRow: any = null, add: boolean = true,
        editFields: any[] = null,
        initFromMaster: boolean = false,
        dataSetManagerSource: DataSetManager = null): any  {
        const newRow = {};
        if (this.fields == null) {
            console.error('Fields are empty [' + this.ident + ']');
            return null;
        }
        this.fields.forEach(field => {
            if (!field.isParam) {
                this.setFieldValue(field.fieldName, sourceRow != null ? sourceRow[field.fieldName] : null, newRow);
            }
        });

        if (initFromMaster) {
            this.initRowByParents(newRow, dataSetManagerSource);
        }

        this.initRowByEditFields(newRow, editFields);

        if (add) {
            this.AddRow(newRow, true);
        }

        return newRow;
    }

    public setFieldValue(fieldName: string, fieldValue: any, rowToChange: any = null) {
        const row = rowToChange ?? this.activeRow;

        if (row == null) {
            throw new Error('Active row is unnassigned');        }

        row[fieldName] = fieldValue;
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
}

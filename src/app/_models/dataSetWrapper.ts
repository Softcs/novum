import { DataSetManager, Operation } from '.';
import { Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSetWrapper {
    private _rows: any[];

    public ident: string;
    public activeRow: any;
    public errors: [any];
    private inputDataSource: any;
    public fields: [any];

    @Output()
    activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor(public dataSourceManager: DataSetManager) {
        this._rows = null;
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

    public setInputDataSource(inputDataSource: any) {
        this.ident = inputDataSource.ident;
        this.rows = inputDataSource.rows;
        this.activeRow = inputDataSource.activeRowIndex !== -1 ? inputDataSource.rows[inputDataSource.activeRowIndex] : null;
        this.errors = inputDataSource.errors;
        const dataSourceDef =  this.dataSourceManager?.dictInfo?.FindDataSource(this.ident);
        this.fields = dataSourceDef?.fields;
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

    public GenerateRow(sourceRow: any = null) {
        const newRow = {};
        this.fields.forEach(field => {
            if (!field.isParam) {
                newRow[field.fieldName] = sourceRow != null ? sourceRow[field.fieldName] : null;
            }
        });
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

        return row[fieldName];
    }

    public refreshFieldValueInControl(control) {
        const fieldValue = this.getFieldValue(control.field);
        control.dataSetWrapper = this;
        control.setValue(fieldValue);
    }
}

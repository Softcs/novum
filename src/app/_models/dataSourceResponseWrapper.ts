import { DictInfoWrapper, DataSourceManager, Operation } from '.';
import { Output, EventEmitter } from '@angular/core';
import { first } from 'rxjs/operators';

export class DataSourceResponseWrapper {
    public ident: string;
    public rows: [any];
    public activeRow:any;
    public errors:[any];
    private inputDataSource: any;
    @Output()
    activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor(public dataSourceManager: DataSourceManager) {

    }
    public RefreshChildren() {
        this.dataSourceManager.RefreshChildren(this);
    }

    public SetActiveRow( row: any) {
        if(row !== this.activeRow) {
            this.activeRow = row;
            this.activeRowChanged.emit(this.activeRow);
            this.dataSourceManager.RefreshChildren(this);
        }
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
    public ExecuteAction(actionIdent: string) {
        if (this.dataSourceManager == null) {
            console.error('ExecuteAction data source manager is undefindex!');
            return;
        }
        this.dataSourceManager.ExecuteAction(actionIdent, this.ident);
    }
}
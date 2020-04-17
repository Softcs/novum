import { DictInfoWrapper, DataSourceManager } from '.';

export class DataSourceResponseWrapper {
    public ident: string;
    public rows: [any];
    public activeRow:any;
    public errors:[any];
    private inputDataSource: any;
    constructor(public dataSourceManager: DataSourceManager) {

    }
    public SetActiveRow( row: any) {
        this.activeRow = row;
        this.dataSourceManager.RefreshChildren(this);
    }
    public setInputDataSource(inputDataSource: any) {
        this.ident = inputDataSource.ident;
        this.rows = inputDataSource.rows;
        this.activeRow = inputDataSource.activeRow;
        this.errors = inputDataSource.errors;
    }
}
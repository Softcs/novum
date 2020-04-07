import { DictInfoWrapper, DataSourceManager } from '.';

export class DataSourceResponseWrapper {
    public ident: string;
    public rows: [any];
    public activeRow:any;
    public errors:[any];
    constructor(private inputDataSource: any, public dataSourceManager: DataSourceManager) {
        this.ident = inputDataSource.ident;
        this.rows = inputDataSource.rows;
        this.activeRow = inputDataSource.activeRow;
        this.errors = inputDataSource.errors;
    }
    public SetActiveRow( row: any) {
        this.activeRow = row;
        console.log("SetActiveRow",this);
        this.dataSourceManager.RefreshChildren(this);
    }
}
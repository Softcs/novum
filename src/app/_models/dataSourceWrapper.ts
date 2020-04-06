import { DictInfoWrapper, DataSourceManager } from '.';

export class DataSourceWrapper {
    public ident: string;
    public rows: [any];
    public activeRow:any;
    public errors:[any];
    constructor(private inputDataSource: any, private dataSourceManager: DataSourceManager) {
        this.ident = inputDataSource.ident;
        this.rows = inputDataSource.rows;
        this.activeRow = inputDataSource.activeRow;
        this.errors = inputDataSource.errors;
    }
    public SetAvtiveRow( row: any) {
        this.activeRow = row;
    }
}
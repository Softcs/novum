export class DictInfoWrapper {
    constructor(private dictInfo: any) {

    }
    public FindDataSource(ident: string): any {
        if(!ident) {
            return null;
        }
        return this.dictInfo.dataSources.filter(item => item.ident.toLowerCase() === ident.toLowerCase())[0];
    }
    public FindActionDefinition(actionIdent: string, dataSourceIdent: string) {
        const dataSource = this.FindDataSource(dataSourceIdent);

        if (dataSource == null || dataSource.actions == null) {
            return null;
        }
        return dataSource.actions.filter(item => item.ident === actionIdent)[0];
    }
    get caption() {
        return this.dictInfo.caption;
    }
    get dataSources() {
        return this.dictInfo.dataSources;
    }
    get ident() {
        return this.dictInfo.ident;
    }

}
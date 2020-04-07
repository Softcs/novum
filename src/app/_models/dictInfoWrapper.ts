export class DictInfoWrapper {
    constructor(private dictInfo: any) {

    }
    public FindDataSource(ident: string): any {
        return this.dictInfo.dataSources.filter(item => item.ident === ident)[0];
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
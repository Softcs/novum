import { DictInfoWrapper, DataSourceWrapper } from '.';
import { DataSourceContainerComponent } from '@app/components/data-source-container';
import { QueryList } from '@angular/core';

export class DataSourceManager {
    private _dictInfo: DictInfoWrapper;
    private _dataSourceComponents: QueryList<DataSourceContainerComponent>;
    private _dataSourcesResponse:[any];
    constructor() {

    }
    public PropagateDataSources() {

        if (!this.dataSourceComponents) {
            return;
        }

        this.dataSourceComponents.forEach(dataSourceContainer => {
            const dataSource = this.getDataSource(dataSourceContainer.ident);
            const dataSourceWrapper = new DataSourceWrapper(dataSource, this);
            dataSourceContainer.setDataSource(dataSourceWrapper);
        });

    }
    public getDataSource(ident: string): any {
        if (!this.dataSourcesResponse) {
            console.error(`Nie znaleziono źrodla danych: [${ident}]`);
            return;
        }
        const dataSource = this.dataSourcesResponse.filter(item => item.ident === ident)[0];
        return dataSource;
    }

    set dictInfo(dictInfo: DictInfoWrapper) {
        this._dictInfo = dictInfo;
    }
    set dataSourcesResponse(dataSourcesResponse: [any]) {
        this._dataSourcesResponse = dataSourcesResponse;
    }
    set dataSourceComponents(dataSourceComponents: QueryList<DataSourceContainerComponent>) {
        this._dataSourceComponents = dataSourceComponents;
    }
    get dataSourceComponents() {
        return this._dataSourceComponents;
    }

    get dataSourcesResponse() {
        return this._dataSourcesResponse;
    }
}
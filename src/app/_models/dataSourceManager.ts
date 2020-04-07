import { DictInfoWrapper, DataSourceResponseWrapper, Operation } from '.';
import { DataSourceContainerComponent } from '@app/components/data-source-container';
import { QueryList } from '@angular/core';
import { GatewayService } from '@app/_services';
import { first } from 'rxjs/operators';

export class DataSourceManager {
    private _dictInfo: DictInfoWrapper;
    private _dataSourceComponents: QueryList<DataSourceContainerComponent>;
    private _dataSourcesResponse: any[];
    public dataSourcesWrapper: DataSourceResponseWrapper[];
    constructor(private gatewayService: GatewayService) {
        this.dataSourcesWrapper = [];
    }
    private prapareDataSource4Request(dataSourceDefinition: any, dataSourcesRequest: any[]) {
        if (dataSourceDefinition == null || dataSourceDefinition.children == null || dataSourceDefinition.children.length == 0) {
            return;
        }
        dataSourceDefinition.children.forEach(dataSource => {
            const dataSourceDefinitionChild = this.getDataSource(dataSource.ident);
            const dsWrapper: DataSourceResponseWrapper = this.getDateSourceWrapper(dataSource.ident);
            let obj = {
                ident: dataSource.ident,
                activeRow: dsWrapper.activeRow,
                refresh: true
            };
            dataSourcesRequest.push(obj);
            this.prapareDataSource4Request(dataSourceDefinitionChild, dataSourcesRequest);
        });
    }
    public RefreshChildren(dataSourceResponseWrapper: DataSourceResponseWrapper) {
        console.log("RefreshChildren")
        const dataSourceDefinition = this.dictInfo.FindDataSource(dataSourceResponseWrapper.ident);
        if (dataSourceDefinition.children == null || dataSourceDefinition.children.length == 0) {
            return;
        }
        let dataSourcesRequest: any[] = [];

        let obj = {
            ident: dataSourceResponseWrapper.ident,
            activeRow: dataSourceResponseWrapper.activeRow,
            refresh: false
        };
        dataSourcesRequest.push(obj);

        this.prapareDataSource4Request(dataSourceDefinition, dataSourcesRequest);

        const opr: Operation = this.gatewayService.operationRefreshDataSources(this.dictInfo.ident,
            dataSourcesRequest);
        console.log("opr", opr)

        this.gatewayService.executeOperation(opr)
            .pipe(first())
            .subscribe(
                data => {
                    if(data.length == 1) {
                        const dataSourcesResponse = data[0].dataSourcesResponse;
                        dataSourcesResponse.forEach(dsRespons => {
                            this.setRefreshDataSource(dsRespons);
                        });
                        this.PropagateDataSources();
                    }
                },
                error => {
                    console.error("error", error);
                });
    }
    public PropagateDataSources() {

        if (!this.dataSourceComponents) {
            return;
        }
        this.dataSourcesWrapper.length = 0;
        this.dataSourceComponents.forEach(dataSourceContainer => {
            const dataSource = this.getDataSource(dataSourceContainer.ident);
            if (dataSource != null) {
                const dataSourceResponseWrapper = new DataSourceResponseWrapper(dataSource, this);
                this.dataSourcesWrapper.push(dataSourceResponseWrapper);
                dataSourceContainer.setDataSource(dataSourceResponseWrapper);
            } else {
                console.error('DataSource: ' + dataSourceContainer.ident + ' not found!');
            }
        });

    }
    public getDateSourceWrapper(ident: string): DataSourceResponseWrapper {
        const dataSource = this.dataSourcesWrapper.filter(item => item.ident === ident)[0];
        return dataSource;
    }
    private setRefreshDataSource(newDataSource: any) {
        let oldDS = this.getDataSource(newDataSource.ident);
        const index = this.dataSourcesResponse.indexOf(oldDS);
        if(index !== -1) {
            this.dataSourcesResponse[index] = newDataSource;
        }
    }
    private getDataSource(ident: string): any {
        if (!this.dataSourcesResponse) {
            console.error(`Nie znaleziono źrodla danych: [${ident}]`);
            return;
        }
        const dataSource = this.dataSourcesResponse.filter(item => item["ident"] === ident)[0];
        return dataSource;
    }

    set dictInfo(dictInfo: DictInfoWrapper) {
        this._dictInfo = dictInfo;
    }
    get dictInfo() {
        return this._dictInfo;
    }
    set dataSourcesResponse(dataSourcesResponse: any[]) {
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

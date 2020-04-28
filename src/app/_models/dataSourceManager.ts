import { DictInfoWrapper, DataSourceResponseWrapper, Operation } from '.';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { QueryList, Output, EventEmitter } from '@angular/core';
import { GatewayService } from '@app/_services';
import { first } from 'rxjs/operators';

export class DataSourceManager {
    private _dictInfo: DictInfoWrapper;
    private _dataSourceComponents: QueryList<SitDataSourceContainerComponent>;
    private _dataSourcesResponse: any[];
    public dataSourcesWrapper: DataSourceResponseWrapper[];
    @Output()
    refreshAfter: EventEmitter<DataSourceManager> = new EventEmitter<DataSourceManager>();

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
    private prapareDataSource4RequestParent(dataSourceDefinition: any, dataSourcesRequest: any[]) {
        if (dataSourceDefinition == null || dataSourceDefinition.parents == null || dataSourceDefinition.parents.length == 0) {
            return;
        }

        dataSourceDefinition.parents.forEach(dataSource => {
            const dataSourceDefinitionParent = this.getDataSource(dataSource.ident);
            const dsWrapper: DataSourceResponseWrapper = this.getDateSourceWrapper(dataSource);
            if (dsWrapper == null) {
                return;
            }
            let obj = {
                ident: dsWrapper.ident,
                activeRow: dsWrapper.activeRow,
                refresh: false
            };
            dataSourcesRequest.push(obj);
            this.prapareDataSource4RequestParent(dataSourceDefinitionParent, dataSourcesRequest);
        });
    }
    public RefreshChildren(dataSourceResponseWrapper: DataSourceResponseWrapper) {
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
        this.prapareDataSource4RequestParent(dataSourceDefinition, dataSourcesRequest);
        console.log("dataSourcesRequest", dataSourcesRequest)

        const opr: Operation = this.gatewayService.operationRefreshDataSources(this.dictInfo.ident,
            dataSourcesRequest);

        this.gatewayService.executeOperation(opr)
            .pipe(first())
            .subscribe(
                data => {
                    if(data.length == 1) {
                        const dataSourcesResponse = data[0].dataSourcesResponse;
                        this.setRefreshDataSources(dataSourcesResponse);
                        let dataSetToReload = dataSourcesResponse.map(d => d.ident);
                        console.log("dataSetToReload", dataSourcesResponse)
                        this.PropagateDataSources(dataSetToReload);
                    }
                },
                error => {
                    console.error("error", error);
                });
    }
    public setRefreshDataSources(dataSourcesResponse) {
        if (dataSourcesResponse == null) {
            return;
        }
        dataSourcesResponse.forEach(dsRespons => {
            this.setRefreshDataSource(dsRespons);
        });
    }
    public PropagateDataSources(dataSetToReload: string[] = null) {

        if (!this.dataSourceComponents) {
            return;
        }

        this.dataSourceComponents.forEach(dataSourceContainer => {
            if (dataSetToReload != null && dataSetToReload.length > 0
                && dataSetToReload.indexOf(dataSourceContainer.ident) === -1) {
                return;
            }
            const dataSource = this.getDataSource(dataSourceContainer.ident);
            const dataSourceResponseWrapper = this.getDateSourceWrapper(dataSourceContainer.ident);
            if (dataSourceResponseWrapper != null) {
                dataSourceContainer.setDataSource(dataSourceResponseWrapper);
            } else {
                console.error('DataSource: ' + dataSourceContainer.ident + ' not found!');
            }
        });
        this.DataSourceAfterPropagte();
        this.refreshAfter.emit(this);
    }
    public DataSourceAfterPropagte() {
        this.dataSourcesWrapper.forEach(dataSourceWrapper => {
            dataSourceWrapper.AfterPropagte();
        });
    }
    public getDateSourceWrapper(ident: string): DataSourceResponseWrapper {
        if (ident == null) {
            return;
        }
        const dataSource = this.dataSourcesWrapper.filter(item => item.ident.toLowerCase() === ident.toLowerCase())[0];
        console.log("aaaa", dataSource,this.dataSourcesWrapper, ident.toLowerCase())
        return dataSource;
    }
    private setRefreshDataSource(newDataSource: any) {
        let oldDS = this.getDataSource(newDataSource.ident);
        const index = this.dataSourcesResponse.indexOf(oldDS);
        if(index !== -1) {
            this.dataSourcesResponse[index] = newDataSource;
        }
        let dataSourceResponseWrapper = this.getDateSourceWrapper(newDataSource.ident);
        if (dataSourceResponseWrapper == null) {
            dataSourceResponseWrapper = new DataSourceResponseWrapper(this);
            console.log("create dataSourceResponseWrapper", dataSourceResponseWrapper)
            this.dataSourcesWrapper.push(dataSourceResponseWrapper);
        }
        dataSourceResponseWrapper.setInputDataSource(newDataSource);
    }
    private getDataSource(ident: string): any {
        if (!this.dataSourcesResponse) {
            console.error(`Nie znaleziono źrodla danych: [${ident}]`);
            return;
        }
        if (ident == null) {
            return;
        }
        const dataSource = this.dataSourcesResponse.filter(item => item["ident"].toLowerCase() === ident?.toLowerCase())[0];
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
    set dataSourceComponents(dataSourceComponents: QueryList<SitDataSourceContainerComponent>) {
        this._dataSourceComponents = dataSourceComponents;
    }
    get dataSourceComponents() {
        return this._dataSourceComponents;
    }

    get dataSourcesResponse() {
        return this._dataSourcesResponse;
    }
}

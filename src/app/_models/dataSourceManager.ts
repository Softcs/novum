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


    constructor(public gatewayService: GatewayService) {
        this.dataSourcesWrapper = [];
    }
    private prapareDataSource4Request(dataSourceDefinition: any, dataSourcesRequest: any[]) {
        if (dataSourceDefinition == null || dataSourceDefinition.children == null || dataSourceDefinition.children.length === 0) {
            return;
        }
        dataSourceDefinition.children.forEach(dataSource => {
            const dataSourceDefinitionChild = this.dictInfo.FindDataSource(dataSource.ident);
            const dsWrapper: DataSourceResponseWrapper = this.getDateSourceWrapper(dataSource.ident);
            const obj = this.getObjectForDataSourceRequest(dsWrapper, true);
            dataSourcesRequest.push(obj);
            this.prapareDataSource4Request(dataSourceDefinitionChild, dataSourcesRequest);
        });

    }
    private prapareDataSource4RequestParent(dataSourceDefinition: any, dataSourcesRequest: any[]) {
        if (dataSourceDefinition == null || dataSourceDefinition.parents == null || dataSourceDefinition.parents.length == 0) {
            return;
        }

        dataSourceDefinition.parents.forEach(dataSource => {
            const dataSourceDefinitionParent = this.getDataSource(dataSource);
            const dsWrapper: DataSourceResponseWrapper = this.getDateSourceWrapper(dataSource);
            if (dsWrapper == null) {
                return;
            }
            if(dataSourcesRequest.find(obj => obj.ident === dsWrapper.ident) != null) {
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

    private getObjectForDataSourceRequest(dataSourceResponseWrapper: DataSourceResponseWrapper, canRefresh: boolean )  {
        const  obj = {
            ident: dataSourceResponseWrapper.ident,
            activeRow: dataSourceResponseWrapper.activeRow,
            refresh: canRefresh
        };
        return obj;
    }

    public Refresh(dataSourceIdents: string[]) {
        if (dataSourceIdents == null || dataSourceIdents.length === 0 ) {
            return;
        }

        const dataSourcesRequest: any[] = [];
        dataSourceIdents.forEach(ident => {
            const wrapper = this.getDateSourceWrapper(ident);
            const dataSourceDefinition = this.dictInfo.FindDataSource(ident);
            if(wrapper == null) {
                return;
            }
            const obj = this.getObjectForDataSourceRequest(wrapper, true);
            dataSourcesRequest.push(obj);
            this.prapareDataSource4Request(dataSourceDefinition, dataSourcesRequest);
        });

        dataSourcesRequest.forEach(dsToRefresh => {
            if (!dsToRefresh.refresh) {
                return;
            }
            const dsDefItem = this.dictInfo.FindDataSource(dsToRefresh.ident);
            this.prapareDataSource4RequestParent(dsDefItem, dataSourcesRequest);
        });

        this.RefreshInternall(dataSourcesRequest);
    }

    public RefreshChildren(dataSourceResponseWrapper: DataSourceResponseWrapper) {
        const dataSourceDefinition = this.dictInfo.FindDataSource(dataSourceResponseWrapper.ident);
        if (dataSourceDefinition.children == null || dataSourceDefinition.children.length === 0) {
            return;
        }
        const dataSourcesRequest: any[] = [];
        const obj = this.getObjectForDataSourceRequest(dataSourceResponseWrapper, false);
        dataSourcesRequest.push(obj);

        this.prapareDataSource4Request(dataSourceDefinition, dataSourcesRequest);
        dataSourcesRequest.forEach(dsToRefresh => {
            if (!dsToRefresh.refresh) {
                return;
            }
            const dsDefItem = this.dictInfo.FindDataSource(dsToRefresh.ident);
            this.prapareDataSource4RequestParent(dsDefItem, dataSourcesRequest);
         });
        this.RefreshInternall(dataSourcesRequest);
    }

    private RefreshInternall(dataSourcesRequest: any[]) {
        const opr: Operation = this.gatewayService.operationRefreshDataSources(this.dictInfo.ident,
            dataSourcesRequest);

        this.gatewayService.executeOperation(opr)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.length === 1) {
                        const dataSourcesResponse = data[0].dataSourcesResponse;
                        this.setRefreshDataSources(dataSourcesResponse);
                        const dataSetToReload = dataSourcesResponse?.map(d => d.ident);
                        this.PropagateDataSources(dataSetToReload);
                    }
                },
                error => {
                    console.error("error", error);
                });
    }

    public ExecuteRefreshAfter(actionIdent: string, dataSourceIdent: string) {
        const actionDefinition = this.dictInfo.FindActionDefinition(actionIdent, dataSourceIdent);
        if (actionDefinition != null) {
            let ds2RefreshIdents = null;
            if (actionDefinition.dataSources2Refresh != null) {
                ds2RefreshIdents = actionDefinition.dataSources2Refresh.map(item => item.ident.toLowerCase());
            }

            if (actionDefinition.refreshAfter) {
                ds2RefreshIdents = ds2RefreshIdents ?? [];
                if (ds2RefreshIdents.indexOf(dataSourceIdent.toLowerCase()) === -1) {
                    ds2RefreshIdents.push(dataSourceIdent);
                }
            }

            if (ds2RefreshIdents != null && ds2RefreshIdents.length > 0) {
                this.Refresh(ds2RefreshIdents);
            }
        }
    }

    public ExecuteAction(actionIdent: string, dataSourceIdent: string,
                         owner: any,
                         executeActionCompletedCallback: Function,
                         executeActionExceptionCallback: Function
        ) {
        const dictIdent = this.dictInfo?.ident;
        const dataSourcesRequest: any[] = [];
        const dsWrapper: DataSourceResponseWrapper = this.getDateSourceWrapper(dataSourceIdent);
        const obj = this.getObjectForDataSourceRequest(dsWrapper, true);
        dataSourcesRequest.push(obj);

        const opr: Operation = this.gatewayService.operationExecuteAction(
            dictIdent,
            dataSourcesRequest,
            actionIdent,
            dataSourceIdent);

        this.gatewayService.executeOperation(opr)
            .pipe(first())
            .subscribe(
                data => {
                    if (data.length === 1) {
                        const response = data[0];
                        const wasErrors = this.PropagateErrors(dataSourceIdent, response?.Errors);
                        if (!wasErrors) {
                            if(executeActionCompletedCallback != null) {
                                executeActionCompletedCallback(owner);
                            }
                        }

                        if (response == null || !wasErrors) {
                            this.ExecuteRefreshAfter(actionIdent, dataSourceIdent);
                        }

                        if (wasErrors) {
                            if (executeActionExceptionCallback != null) {
                                executeActionExceptionCallback(owner);
                            }
                        }

                    }
                },
                error => {
                    console.error("error", error);
                    if (executeActionExceptionCallback != null) {
                        executeActionExceptionCallback(owner);
                    }
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
    public PropagateErrors(dataSourceIdent: string, errors: [any]): boolean {

        if (!this.dataSourceComponents) {
            return;
        }
        this.dataSourceComponents.forEach(dataSourceContainer => {
            if (dataSourceIdent.toLowerCase() === dataSourceContainer.ident.toLowerCase()) {
                const dataSourceResponseWrapper = this.getDateSourceWrapper(dataSourceContainer.ident);
                if (dataSourceResponseWrapper != null) {
                    dataSourceContainer.setErrors(errors);
                }
            }
        });

        return errors != null && errors.length > 0;
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
        const dataSources = this.dataSourcesWrapper.filter(item => item.ident.toLowerCase() === ident.toLowerCase());
        return dataSources != null && dataSources.length > 0 ? dataSources[0] : null;
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
        console.log("dictInfo", dictInfo)
    }
    get dictInfo() {
        return this._dictInfo;
    }

    set dataSourcesResponse(dataSourcesResponse: any[]) {
        this._dataSourcesResponse = dataSourcesResponse;
    }

    get dataSourcesResponse() {
        return this._dataSourcesResponse;
    }

    set dataSourceComponents(dataSourceComponents: QueryList<SitDataSourceContainerComponent>) {
        this._dataSourceComponents = dataSourceComponents;
    }

    get dataSourceComponents() {
        return this._dataSourceComponents;
    }
}

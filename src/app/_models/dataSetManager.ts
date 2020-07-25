import { DictInfoWrapper, DataSetWrapper, Operation } from '.';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { QueryList, Output, EventEmitter } from '@angular/core';
import { GatewayService } from '@app/_services';
import { first } from 'rxjs/operators';
import { DataSetDefinitionWrapper } from './dataSetDefinitionWrapper';
import { SitProcExpanderComponent } from '@app/components/controls/sit-proc-expander/sit-proc-expander.component';

export class DataSetManager {
    private _dictInfo: DictInfoWrapper;
    private _dataSetContainers: QueryList<SitDataSetContainerComponent>;
    private _dataSetResponses: any[];

    public dataSetsWrapper: DataSetWrapper[];
    public dataSetDefinitionWrappers: DataSetDefinitionWrapper[];
    public procExpander: SitProcExpanderComponent;
    @Output()
    refreshAfter: EventEmitter<DataSetManager> = new EventEmitter<DataSetManager>();

    constructor(private gatewayService: GatewayService) {
        this.dataSetsWrapper = [];
    }
    private prapareDataSource4Request(dataSourceDefinition: any, dataSourcesRequest: any[]) {
        if (dataSourceDefinition == null || dataSourceDefinition.children == null || dataSourceDefinition.children.length === 0) {
            return;
        }
        dataSourceDefinition.children.forEach(dataSource => {
            const dataSourceDefinitionChild = this.dictInfo.FindDataSource(dataSource.ident);
            const dsWrapper: DataSetWrapper = this.getDateSourceWrapper(dataSource.ident);
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
            const dsWrapper: DataSetWrapper = this.getDateSourceWrapper(dataSource);
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

    private getObjectForDataSourceRequest(dataSetResponseWrapper: DataSetWrapper, canRefresh: boolean )  {
        const  obj = {
            ident: dataSetResponseWrapper.ident,
            activeRow: dataSetResponseWrapper.activeRow,
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

    public RefreshChildren(dataSetResponseWrapper: DataSetWrapper) {
        if (this.dictInfo == null) {
            return;
        }
        const dataSourceDefinition = this.dictInfo.FindDataSource(dataSetResponseWrapper.ident);
        if (dataSourceDefinition.children == null || dataSourceDefinition.children.length === 0) {
            return;
        }
        const dataSourcesRequest: any[] = [];
        const obj = this.getObjectForDataSourceRequest(dataSetResponseWrapper, false);
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
                        const dataSetsResponse = data[0].dataSourcesResponse;
                        this.setRefreshDataSources(dataSetsResponse);
                        const dataSetToReload = dataSetsResponse?.map(d => d.ident);
                        this.PropagateDataSources(dataSetToReload);
                    }
                },
                error => {
                    console.error("error", error);
                });
    }

    public ExecuteRefreshAfter(actionIdent: string, dataSourceIdent: string) {
        const actionDefinition = this.dictInfo?.FindActionDefinition(actionIdent, dataSourceIdent);
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
                         executeActionExceptionCallback: Function,
                         sourceDictIdent: string = null,
                         activeDataSet: DataSetWrapper = null
        ) {
        const dictIdent = sourceDictIdent ?? this.dictInfo?.ident;
        const dataSourcesRequest: any[] = [];
        const dsWrapper: DataSetWrapper = activeDataSet == null ? this.getDateSourceWrapper(dataSourceIdent) : activeDataSet;
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

    public setRefreshDataSources(dataSetsResponse) {
        if (dataSetsResponse == null) {
            return;
        }
        dataSetsResponse.forEach(dsRespons => {
            this.setRefreshDataSource(dsRespons);
        });
    }
    public PropagateErrors(dataSourceIdent: string, errors: [any]): boolean {

        if (!this.dataSetContainers) {
            return;
        }
        this.dataSetContainers.forEach(dataSourceContainer => {
            if (dataSourceIdent.toLowerCase() === dataSourceContainer.ident.toLowerCase()) {
                const dataSetResponseWrapper = this.getDateSourceWrapper(dataSourceContainer.ident);
                if (dataSetResponseWrapper != null) {
                    dataSourceContainer.setErrors(errors);
                }
            }
        });

        return errors != null && errors.length > 0;
    }

    public PropagateDataSources(dataSetToReload: string[] = null) {

        if (!this.dataSetContainers) {
            return;
        }

        this.dataSetContainers.forEach(dataSourceContainer => {
            if (dataSetToReload != null && dataSetToReload.length > 0
                && dataSetToReload.indexOf(dataSourceContainer.ident) === -1) {
                return;
            }
            const dataSource = this.getDataSource(dataSourceContainer.ident);
            const dataSetResponseWrapper = this.getDateSourceWrapper(dataSourceContainer.ident);
            if (dataSetResponseWrapper != null) {
                dataSourceContainer.setDataSource(dataSetResponseWrapper);
            } else {
                console.error('DataSource: ' + dataSourceContainer.ident + ' not found!');
            }
        });
        this.DataSourceAfterPropagte();
        this.refreshAfter.emit(this);
    }

    public DataSourceAfterPropagte() {
        this.dataSetsWrapper.forEach(dataSourceWrapper => {
            dataSourceWrapper.AfterPropagte();
        });
    }

    public getDateSourceWrapper(ident: string): DataSetWrapper {
        if (ident == null || this.dataSetsWrapper.length === 0) {
            return null;
        }
        const dataSources = this.dataSetsWrapper.filter(item => item.ident.toLowerCase() === ident.toLowerCase());
        return dataSources != null && dataSources.length > 0 ? dataSources[0] : null;
    }

    private setRefreshDataSource(newDataSource: any) {
        const oldDS = this.getDataSource(newDataSource.ident);
        const index = this.dataSetsResponse.indexOf(oldDS);
        if(index !== -1) {
            this.dataSetsResponse[index] = newDataSource;
        }

        const dataSetResponseWrapper = this.CreateDataSetWrapper(newDataSource.ident, null);
        dataSetResponseWrapper.setInputDataSource(newDataSource);
    }

    public CreateDataSetWrapper(ident: string, dataSetManagerSource: DataSetManager): DataSetWrapper {
        let dataSetResponseWrapper = this.getDateSourceWrapper(ident);
        if (dataSetResponseWrapper == null) {
            dataSetResponseWrapper = new DataSetWrapper(ident, this, dataSetManagerSource);
            this.dataSetsWrapper.push(dataSetResponseWrapper);
        }
        return dataSetResponseWrapper;
    }

    private getDataSource(ident: string): any {
        if (!this.dataSetsResponse) {
            console.error(`Nie znaleziono źrodla danych: [${ident}]`);
            return;
        }
        if (ident == null) {
            return;
        }
        const dataSource = this.dataSetsResponse.filter(item => item["ident"].toLowerCase() === ident?.toLowerCase())[0];
        return dataSource;
    }

    public prepareControls() {
        this.dataSetContainers.forEach(dataSetContainer => {
            const dsDefWrapper = this.dataSetDefinitionWrappers.find(ds => ds.ident === dataSetContainer.ident);
            dataSetContainer.prepareControls(dsDefWrapper);
        });
    }

    set dictInfo(dictInfo: DictInfoWrapper) {
        this._dictInfo = dictInfo;
        this.dataSetDefinitionWrappers = [];
        if (this._dictInfo != null) {
            if (this._dictInfo.dataSources != null) {
                this._dictInfo.dataSources.forEach(dataSet => {
                    const dataSetDefinitionWrapper = new DataSetDefinitionWrapper(dataSet);
                    this.dataSetDefinitionWrappers.push(dataSetDefinitionWrapper);
                }) ;
            }
        }
    }
    get dictInfo() {
        return this._dictInfo;
    }

    set dataSetsResponse(dataSetsResponse: any[]) {
        this._dataSetResponses = dataSetsResponse;
    }

    get dataSetsResponse() {
        return this._dataSetResponses;
    }

    set dataSetContainers(dataSetContainers: QueryList<SitDataSetContainerComponent>) {
        this._dataSetContainers = dataSetContainers;
        if (this._dataSetContainers != null) {
            this._dataSetContainers.forEach(dataSetCont => {
                dataSetCont.setDataSetManager(this)
            });
        }
    }

    get dataSetContainers() {
        return this._dataSetContainers;
    }

    public FindDataSource(ident: string) {
        return this.dictInfo?.FindDataSource(ident);
    }
}

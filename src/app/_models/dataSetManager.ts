import { DictInfoWrapper, DataSetWrapper, Operation } from '.';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { QueryList, Output, EventEmitter, Directive } from '@angular/core';
import { GatewayService } from '@app/_services';
import { first } from 'rxjs/operators';
import { DataSetDefinitionWrapper } from './dataSetDefinitionWrapper';
import { SitProcExpanderComponent } from '@app/components/controls/sit-proc-expander/sit-proc-expander.component';
import { RefreshType } from '@app/_consts/RefreshType';
import { OnCFService } from '@app/_services/oncf.service';

@Directive()
export class DataSetManager {
    private _dictInfo: DictInfoWrapper;
    private _dataSetContainers: QueryList<SitDataSetContainerComponent>;
    private _dataSetResponses: any[] = [];

    public dataSetsWrapper: DataSetWrapper[];
    public dataSetDefinitionWrappers: DataSetDefinitionWrapper[];
    public procExpander: SitProcExpanderComponent;
    public parentDataSetManager: DataSetManager;
    public gridColumnsDefinition = {};
    public popupParent;

    @Output()
    refreshAfter: EventEmitter<DataSetManager> = new EventEmitter<DataSetManager>();

    constructor(private gatewayService: GatewayService, protected _oncfService: OnCFService) {
        this.dataSetsWrapper = [];
    }
    private prapareDataSource4Request(dataSourceDefinition: any, dataSourcesRequest: any[]) {
        if (dataSourceDefinition == null || dataSourceDefinition.children == null || dataSourceDefinition.children.length === 0) {
            return;
        }
        dataSourceDefinition.children.forEach(dataSource => {
            const dataSourceDefinitionChild = this.dictInfo.FindDataSource(dataSource.ident);
            const dsWrapper: DataSetWrapper = this.getDateSourceWrapper(dataSource.ident);
            if (dsWrapper.isLookup) {
                return;
            }
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

    private getObjectForRequest(ident: string, activeRow: any, refresh: boolean) {
        const  obj = {
            ident: ident,
            activeRow: activeRow,
            refresh: refresh
        };
        return obj;
    }

    public getObjectForDataSourceRequest(dataSetResponseWrapper: DataSetWrapper, canRefresh: boolean )  {
        const  obj = this.getObjectForRequest(
            dataSetResponseWrapper.ident,
            dataSetResponseWrapper.activeRow,
            canRefresh
        );
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

    public RefreshChildren(dataSetResponseWrapper: DataSetWrapper, refreshType: RefreshType = RefreshType.Default) {
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
            if (dsDefItem.isLookup) {
                dsToRefresh.refresh = false;
                return;
            }
            this.prapareDataSource4RequestParent(dsDefItem, dataSourcesRequest);
        });
        
        if (dataSourcesRequest.filter(d => d.refresh).length == 0) {
            return;
        }

        this.RefreshInternall(dataSourcesRequest);
    }

    private RefreshInternall(dataSourcesRequest: any[]) {
        if (dataSourcesRequest) {
            dataSourcesRequest = dataSourcesRequest.filter((v,i) => dataSourcesRequest.findIndex(item => item.ident == v.ident) === i);
        }

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

    public ExecuteOnCF(opr: Operation,        
        executeActionCompletedCallback: Function,
        executeActionExceptionCallback: Function,
        executeBeforeCallback: Function,
        executeFinallyCallback: Function) {
        
        if (executeBeforeCallback) {                    
            executeBeforeCallback();            
        }

        this.gatewayService.executeOperation(opr)        
        .pipe(first())
        .subscribe(
            data => {                
                if (data.length === 1) {
                    const response = data[0];
                    const wasErrors = this.PropagateErrors(opr.dataSourceIdent, response?.Errors);                       
                    
                    if (!wasErrors) {
                        if(executeActionCompletedCallback != null) {
                            var initRow = response.jsonData;
                            if (initRow && initRow.Result != null && initRow.Result instanceof Array && initRow.Result.length > 0) {
                                initRow = initRow.Result[0]; 
                            }
                            executeActionCompletedCallback(initRow);
                            const dataSetContainers = this.findDataSetContainers(opr.dataSourceIdent);
                            dataSetContainers.forEach(cont => {                            
                                cont.refreshFieldValueInControl();
                            });

                        }
                    }                        
                    else {                        
                        if (executeActionExceptionCallback != null) {
                            executeActionExceptionCallback();
                        }
                    }
                }                
            },
            error => {
                console.error("error", error);
                if (executeActionExceptionCallback != null) {
                      executeActionExceptionCallback();
                }
            },
        )
        .add(() => {                        
            if (executeFinallyCallback != null) {
                executeFinallyCallback();
            }
        })
    }

    public ExecuteInitInfo(dataSourceIdent: string, 
                    actionIdent: string, 
                    generatedRow: any, 
                    executeActionCompletedCallback: Function,
                    executeActionExceptionCallback: Function,
                    owner: any,
                    sourceDictIdent: string = null) {
        const dictIdent = sourceDictIdent ?? this.dictInfo?.ident;
        const dataSourcesRequest: any[] = [];
        const dsWrapper: DataSetWrapper = this.getDateSourceWrapper(dataSourceIdent);
        if (dsWrapper.parents) {
            dsWrapper.parents.forEach(parent => {
                const parentDataSource = this.FindDataSource(parent);
                if (parentDataSource) {
                    const obj = this.getObjectForDataSourceRequest(parentDataSource, false);
                    if (obj.activeRow) {
                        dataSourcesRequest.push(obj);
                    }
                }
            });       
        }

        if (generatedRow) {
            const obj = this.getObjectForRequest("generatedRow", generatedRow, false);
            dataSourcesRequest.push(obj);
        }

        const opr: Operation = this.gatewayService.operationExecuteInitInfo(
            dictIdent,
            actionIdent,
            dataSourcesRequest,
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
                                var initRow = response.jsonData;
                                if (initRow && initRow.Result != null && initRow.Result instanceof Array && initRow.Result.length > 0) {
                                    initRow = initRow.Result[0]; 
                                }
                                executeActionCompletedCallback(owner,  initRow);
                            }
                        }                        
                        else {                        
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

    public ExecuteAction(actionIdent: string, dataSourceIdent: string,
                         owner: any,
                         executeActionCompletedCallback: Function,
                         executeActionExceptionCallback: Function,
                         sourceDictIdent: string = null,
                         activeDataSet: DataSetWrapper = null) {
        const dictIdent = sourceDictIdent ?? this.dictInfo?.ident;
        const dataSourcesRequest: any[] = [];
        const dsSourceWrapper = this.getDateSourceWrapper(dataSourceIdent);
        const dsWrapper: DataSetWrapper = activeDataSet == null ? dsSourceWrapper : activeDataSet;
        const obj = this.getObjectForDataSourceRequest(dsWrapper, true);
        dataSourcesRequest.push(obj);
        this.prapareDataSource4RequestParent(dsSourceWrapper, dataSourcesRequest);

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
                        this.RefreshOneRows(response.dataSourcesResponse, dataSourcesRequest, actionIdent, dataSourceIdent);
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

    public RefreshOneRows(dataSourcesResponse, dataSourcesRequest, actionIdent, dataSourceIdent) {
        if (!dataSourcesResponse) {
            return;
        }
        
        const actionDefinition = this.dictInfo?.FindActionDefinition(actionIdent, dataSourceIdent);
        if (!actionDefinition || actionDefinition.refreshAfter) {
            return;
        }

        dataSourcesResponse.forEach(dataSet => {
            const dataSetContainers = this.findDataSetContainers(dataSet.ident);
            if (!dataSetContainers) {
                console.error('DataSource: ' + dataSet.ident + ' not found!');
            }

            const dataSetResponseWrapper = new DataSetWrapper(dataSet.ident, null, null, this._oncfService);
            dataSetResponseWrapper.setInputDataSource(dataSet);

            dataSetContainers.forEach(cont => {
                cont.refreshRows(dataSetResponseWrapper, dataSourcesRequest);
                cont.refreshFieldValueInControl();
            });

        });
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

            const dataSetResponseWrapper = this.getDateSourceWrapper(dataSourceContainer.ident);
            if (dataSetResponseWrapper != null) {
                dataSourceContainer.setDataSource(dataSetResponseWrapper);
            } else {
                console.error('DataSource: ' + dataSourceContainer.ident + ' not found!');
            }
        });
        this.DataSourceAfterPropagte(dataSetToReload);
        this.LookupDataSourceAfterPropagate(dataSetToReload);
        this.refreshAfter.emit(this);
    }

    public LookupDataSourceAfterPropagate(dataSetToReload: string[]) {
        if (!dataSetToReload) {
            return;
        }

        dataSetToReload.forEach(dataSetIdent => {
            const wrapper = this.getDateSourceWrapper(dataSetIdent);
            if (wrapper && wrapper.isLookup)  {
                wrapper.LookupAfterPropagte();
            }
        });
    }
    public DataSourceAfterPropagte(dataSetToReload: string[]) {
        this.dataSetsWrapper.forEach(dataSourceWrapper => {
            if (dataSetToReload != null && dataSetToReload.indexOf(dataSourceWrapper.ident) === -1) {
                return false;
            }
            dataSourceWrapper.AfterPropagte();
        });
    }

    public getDateSourceWrapper(ident: string): DataSetWrapper {
        if (ident == null || this.dataSetsWrapper.length === 0) {
            return null;
        }

        let dataSetWrappers = this.dataSetsWrapper.filter(item => item.ident.toLowerCase() === ident.toLowerCase());
        if (dataSetWrappers.length === 0 && this.parentDataSetManager) {
            dataSetWrappers = this.parentDataSetManager.dataSetsWrapper.filter(item => item.ident.toLowerCase() === ident.toLowerCase());
        }

        return dataSetWrappers != null && dataSetWrappers.length > 0 ? dataSetWrappers[0] : null;
    }

    private setRefreshDataSource(newDataSource: any) {
        if (!this.dataSetsResponse) {
            return;
        }

        const oldDS = this.getDataSource(newDataSource.ident);
        const index = this.dataSetsResponse.indexOf(oldDS);
        if (index !== -1) {
            this.dataSetsResponse[index] = newDataSource;
        } else {
            this.dataSetsResponse.push(newDataSource);
        }

        const dataSetResponseWrapper = this.CreateDataSetWrapper(newDataSource.ident, this.parentDataSetManager);
        dataSetResponseWrapper.setInputDataSource(newDataSource);
    }

    public CreateDataSetWrapper(ident: string, dataSetManagerSource: DataSetManager): DataSetWrapper {
        let dataSetResponseWrapper = this.getDateSourceWrapper(ident);
        if (dataSetResponseWrapper == null) {
            dataSetResponseWrapper = new DataSetWrapper(ident, this, dataSetManagerSource, this._oncfService);
            this.dataSetsWrapper.push(dataSetResponseWrapper);
        }
        return dataSetResponseWrapper;
    }

    private getDataSource(ident: string): any {
        if (ident == null) {
            return;
        }
        let dataSource = this.dataSetsResponse?.filter(item => item["ident"].toLowerCase() === ident?.toLowerCase())[0];
        if (!dataSource && this.parentDataSetManager) {
            dataSource = this.parentDataSetManager.dataSetsResponse.filter(item => item["ident"].toLowerCase() === ident?.toLowerCase())[0];
        }
        if (!dataSource) {
            console.error(`Nie znaleziono źrodla danych: [${ident}]`);
        }

        return dataSource;
    }

    public prepareControls() {
        this.dataSetContainers.forEach(dataSetContainer => {
            const dsDefWrapper = this.dataSetDefinitionWrappers.find(ds => ds.ident === dataSetContainer.ident);
            dataSetContainer.prepareControls(dsDefWrapper);
        });
    }

    public afterContentInit() {
        this.dataSetContainers.forEach(dataSetContainer => {            
            dataSetContainer.afterContentInit();
        });
    }

    public AddRow(dataSetWrapper: DataSetWrapper, newRow: any) {
        const dataSetContainers = this.dataSetContainers.filter(ds => ds.ident == dataSetWrapper.ident);
        dataSetContainers.forEach(dataSetContainer => {
            dataSetContainer.AddRow(newRow);
        });
    }

    public RemoveRow(dataSetWrapper: DataSetWrapper, newRow: any) {
        const dataSetContainers = this.dataSetContainers.filter(ds => ds.ident == dataSetWrapper.ident);
        dataSetContainers.forEach(dataSetContainer => {
            dataSetContainer.RemoveRow(newRow);
        });
    }

    set dictInfo(dictInfo: DictInfoWrapper) {
        this._dictInfo = dictInfo;
        this.dataSetDefinitionWrappers = [];
        if (this._dictInfo != null && this._dictInfo.hasRights) {
            if (this._dictInfo.dataSources != null) {
                this._dictInfo.dataSources.forEach(dataSet => {
                    const dataSetDefinitionWrapper = new DataSetDefinitionWrapper(dataSet);
                    this.dataSetDefinitionWrappers.push(dataSetDefinitionWrapper);
                }) ;
            }
        }
    }

    findDataSetContainers(ident: string) {
        return this.dataSetContainers.filter(dataSet => dataSet.ident === ident);
    }

    get dictIdent(): string {
        return this.dictInfo?.ident;
    }

    // tslint:disable-next-line: adjacent-overload-signatures
    get dictInfo() {
        return this._dictInfo
                ? this._dictInfo
                : (
                    this.parentDataSetManager
                        ? this.parentDataSetManager.dictInfo
                        : null
                );
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
                dataSetCont.setDataSetManager(this);
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

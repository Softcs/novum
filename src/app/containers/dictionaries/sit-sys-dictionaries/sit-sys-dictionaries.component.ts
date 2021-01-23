import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
@Component({
  selector: 'sit-sys-dictionaries',
  templateUrl: './sit-sys-dictionaries.component.html',
  styleUrls: ['./sit-sys-dictionaries.component.scss'],
  host: {class: 'router-flex'}
})
export class SitSysDictionariesComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;

  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;

  gridApiDatasources;
  gridColumnApiDatasources;
  columnDefsDatasources;

  gridApiActions;
  gridColumnApiActions;
  columnDefsActions;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDictionariesId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysDictionariesG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'DictionaryIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DictionaryName', filter: 'agTextColumnFilter'},

    ];

    this.columnDefsDatasources = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDatasourcesId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysDatasourcesG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'DatasourceIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DatasourceName', filter: 'agTextColumnFilter'},

    ];

    this.columnDefsActions = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysActionsId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysActionsG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'ActionIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'ActionName', filter: 'agTextColumnFilter'},

    ];
   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitSysDictionariesId', 'sitSysDictionariesG'], false)
  }

  onGridReadyDatasources(params) {
    this.gridService.setDefGridOptionsOnReady(params);
    this.gridApiDatasources = params.api;
    this.gridColumnApiDatasources = params.columnApi;
    this.gridColumnApiDatasources.setColumnsVisible(['sitSysDatasourcesId', 'sitSysDatasourcesG'], false)
  }

  onGridReadyActions(params) {
    this.gridService.setDefGridOptionsOnReady(params);
    this.gridApiActions = params.api;
    this.gridColumnApiActions = params.columnApi;
    this.gridColumnApiActions.setColumnsVisible(['sitSysActionsId', 'sitSysActionsG'], false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitSysDictionaries');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedDatasources(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitSysDatasources');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedActions(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitSysActions');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
  }

}

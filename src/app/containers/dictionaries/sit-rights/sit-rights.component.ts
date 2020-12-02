import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';


@Component({
  selector: 'app-sit-rights',
  templateUrl: './sit-rights.component.html',
  styleUrls: ['./sit-rights.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRightsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;

  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;
  rowClassRules;

  gridApi;
  gridColumnApi;
  columnDefs;

  gridApiDictionaries;
  gridColumnApiDictionaries;
  columnDefsDictionaries;

  gridApiDatasources;
  gridColumnApiDatasources;
  columnDefsDatasources;

  gridApiActions;
  gridColumnApiActions;
  columnDefsActions;

  gridApiRightsGroupUsers;
  gridColumnApiRightsGroupUsers;
  columnDefsRightsGroupUsers;


  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.rowSelection = 'single';
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.defaultColDef = {
      sortable: true,
      filter: true,
      floatingFilter: false,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
    };

    this.columnDefs = [
      { headerName: 'Id', field: 'sitRightsGroupsId', type: "numericColumn", sortable: true, resizable: true, filter: 'agNumericColumnFilter',width: 80 },
      { headerName: 'GUID', field: 'sitRightsGroupsG', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'RightsGroupIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa grupy', field: 'RightsGroupName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Poufne umowy', field: 'ConfidentialAgreements', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },
    ]

    this.columnDefsDictionaries = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDictionariesId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysDictionariesG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'DictionaryIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DictionaryName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 130 },

    ];

    this.columnDefsDatasources = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDatasourcesId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysDatasourcesG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'DatasourceIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DatasourceName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];

    this.columnDefsActions = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysActionsId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysActionsG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'ActionIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'ActionName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];

    this.columnDefsRightsGroupUsers = [
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter'},
      { headerName: 'Imię', field: 'Name', filter: 'agTextColumnFilter'},
      { headerName: 'Nazwisko', field: 'SurName', filter: 'agTextColumnFilter'},
    ];


   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitRightsGroupsId','sitRightsGroupsG'],false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitRightsGroups');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyDictionaries(params) {
    this.gridApiDictionaries = params.api;
    this.gridColumnApiDictionaries = params.columnApi;
    this.gridColumnApiDictionaries.setColumnsVisible(['sitSysDictionariesId', 'sitSysDictionariesG'], false)
  }

  onRowClickedDictionaries(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitSysDictionaries');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyDatasources(params) {
    this.gridApiDatasources = params.api;
    this.gridColumnApiDatasources = params.columnApi;
    this.gridColumnApiDatasources.setColumnsVisible(['sitSysDatasourcesId', 'sitSysDatasourcesG'], false)
  }

  onRowClickedDatasources(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitSysDatasources');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyActions(params) {
    this.gridApiActions = params.api;
    this.gridColumnApiActions = params.columnApi;
    this.gridColumnApiActions.setColumnsVisible(['sitSysActionsId', 'sitSysActionsG'], false)
  }

  onRowClickedActions(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitSysActions');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyRightsGroupUsers(params) {
    this.gridApiRightsGroupUsers = params.api;
    this.gridColumnApiRightsGroupUsers = params.columnApi;
  }

  onRowClickedRightsGroupUsers(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitRightsGroupUsers');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
  }

}

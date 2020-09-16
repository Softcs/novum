import { Component, OnInit, ViewChild, ContentChild, Input, ComponentFactoryResolver } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
//import { AllModules } from '@ag-grid-enterprise/all-modules';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'sit-menu',
  templateUrl: './sit-menu.component.html',
  styleUrls: ['./sit-menu.component.scss'],
  host: {class: 'router-flex'}
})
export class SitMenuComponent implements OnInit {
  @ViewChild(SitDataSetContainerComponent, { static: true }) dataSourceContainer: SitDataSetContainerComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;


  //modules: any[] = AllModules;
  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;
  pinnedBottomRowData;

  gridApiMenuItems;
  gridColumnApiMenuItems;
  columnDefsMenuItems;
  pinnedBottomRowDataMenuItems;

  gridApiAppUsers;
  gridColumnApiAppUsers;
  columnDefsAppUsers;
  pinnedBottomRowDataAppUsers;

  constructor() {
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
    };

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Symbol', field: 'Symbol', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Nazwa', field: 'Caption', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
    ];
    this.columnDefsMenuItems = [
      { headerName: 'Id', field: 'sitMenuItemsId', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, width: 60, type: 'numericColumn' },
      { headerName: 'Id grupy', field: 'ParentId', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, width: 80, type: 'numericColumn'},
      { headerName: 'Kolejność', field: 'OrdId', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, width: 80, type: 'numericColumn' },
      { headerName: 'Nazwa', field: 'Caption', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Rodzaj', field: 'Kind', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, width: 80 },
      { headerName: 'Link', field: 'Link', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Ikona', field: 'Icon', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
    ];
    this.columnDefsAppUsers = [
      { headerName: 'Login', field: 'UserLogin', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Imię', field: 'Name', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Nazwisko', field: 'SurName', sortable: true, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Aktywny', field: 'IsActive', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer' },
    ];

   }

  ngOnInit(): void {

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onGridReadyMenuItems(params) {
    this.gridApiMenuItems = params.api;
    this.gridColumnApiMenuItems = params.columnApi;
  }

  onGridReadyAppUsers(params) {
    this.gridApiAppUsers = params.api;
    this.gridColumnApiAppUsers = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitMenu');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedMenuItems(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitMenuItems');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedAppUsers(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitAppUsers');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];

    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiMenuItems.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiAppUsers.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
  }

}

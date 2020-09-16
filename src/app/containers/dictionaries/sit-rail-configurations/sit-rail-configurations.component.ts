import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DataSetWrapper } from '@app/_models';
//import { AllModules } from '@ag-grid-enterprise/all-modules';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
    selector: 'sit-rail-configurations',
    templateUrl: 'sit-rail-configurations.component.html',
    styleUrls: ['sit-rail-configurations.component.scss'],
    host: {class: 'router-flex'}
})
export class SitRailConfigurationsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChild('sitRailConfigurations') table: any;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  sitRailConfigurationsSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  //modules: any[] = AllModules;
  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;
  pinnedBottomRowData;

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
    this.columnDefs = [
      { headerName: 'CompanyIdent', field: 'CompanyIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'OperationIdent', field: 'OperationIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'IsActive', field: 'IsActive', sortable: true, flex: 1, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered"  },
    ];

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitRailConfigurations');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];

    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
  }


}

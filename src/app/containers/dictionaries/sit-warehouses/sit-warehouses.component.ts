import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';

@Component({
  selector: 'app-sit-warehouses',
  templateUrl: './sit-warehouses.component.html',
  styleUrls: ['./sit-warehouses.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWarehousesComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  defaultColDef;
  rowSelection;
  popupParent;

  gridApi;
  gridColumnApi;
  columnDefs;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
      enableRowGroup: true,
      enableValue: true,
      enablePivot: true,
      autoHeight: true,
    };

    this.columnDefs = [
      { headerName: 'sitWarehousesId', field: 'sitWarehousesId', type: 'numericColumn', sortable: true, filter: 'agNumericColumnFilter'},
      { headerName: 'sitWarehousesG', field: 'sitWarehousesG', filter: 'agTextColumnFilter' },
      { headerName: 'Identyfikator', field: 'WarehouseIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'WarehouseName', filter: 'agTextColumnFilter', width: 200 },
    ]

   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitWarehousesId', 'sitWarehousesG'], false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitWarehouses');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    // var allColumnIds = [];
    // this.gridColumnApi.getAllColumns().forEach(function(column) {
    //   allColumnIds.push(column.colId);
    // });
    // this.gridColumnApi.autoSizeColumns(allColumnIds, false);
  }
}

import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
//import { AllModules } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-sit-stocks',
  templateUrl: './sit-stocks.component.html',
  styleUrls: ['./sit-stocks.component.scss'],
  host: {class: 'router-flex'}
})
export class SitStocksComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  defaultColDef;
  rowSelection;
  popupParent;

  gridApi;
  gridColumnApi;
  columnDefs;

  gridApiWMSStocks;
  gridColumnApiWMSStocks;
  columnDefsWMSStocks;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: true,
      // floatingFilter: true,
      resizable: true,
      enableRowGroup: true,
      enableValue: true,
      enablePivot: true,
      autoHeight: true,
    };

    this.columnDefs = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter',floatingFilter: true },
          { headerName: 'Nazwa', field: 'ProductName', filter: 'agTextColumnFilter' }
        ]
      },
      { headerName: 'Stany',
        children: [
          { headerName: 'ERP', field: 'Quantity', type: 'numericColumn', filter: 'agTextColumnFilter' },
          { headerName: 'MWS', field: 'QuantityExt', type: 'numericColumn', filter: 'agTextColumnFilter' },
          { headerName: 'Różnica.', field: 'QuantityDiff', type: 'numericColumn', filter: 'agTextColumnFilter' },
        ]
      },
      { headerName: 'Magazyn',
        children: [
          { headerName: "Ident.", field: 'WarehouseIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
          { headerName: "Nazwa", field: 'WarehouseName', sortable: true, resizable: true, filter: 'agTextColumnFilter' },

        ],
      }
    ];

    this.columnDefsWMSStocks = [
      { headerName: 'Lokalizacja', field: 'LocationIdent', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
      { headerName: 'Stan - MWS', field: 'Quantity', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
      { headerName: "Typ lokalizacji", field: 'LocationTypeDesc', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
    ];

  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onGridReadyWMSStocks(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitStocks');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedWMSStocks(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitStocks');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, false);
  }
}

import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { environment } from '@environments/environment';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

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
  link;
  ean;
  locationIdent;
  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;

  gridApiWMSStocksDet;
  gridColumnApiWMSStocksDet;
  columnDefsWMSStocksDet;

  gridApiWMSStocks;
  gridColumnApiWMSStocks;
  columnDefsWMSStocks;

  gridApiLogisticUnits;
  gridColumnApiLogisticUnits;
  columnDefsLogisticUnits;

  gridApiWMSStocksWithLogisticUnits;
  gridColumnApiWMSStocksWithLogisticUnits;
  columnDefsWMSStocksWithLogisticUnits;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

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
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 110 },
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
      },
      { headerName: 'Waga', field: 'Weight', type: 'numericColumn', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer', floatingFilter: false }


    ];

    this.columnDefsWMSStocksDet = [
      { headerName: 'Lokalizacja', field: 'LocationIdent', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
      { headerName: 'Stan - MWS', field: 'Quantity', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
      { headerName: "Typ lokalizacji", field: 'LocationTypeDesc', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
    ];

    this.columnDefsWMSStocks = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 110 },
          { headerName: 'Nazwa', field: 'ProductName', filter: 'agTextColumnFilter', width: 300 }
        ]
      },
      { headerName: 'Magazyn',
        children: [
          { headerName: "Ident.", field: 'WarehouseIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
          { headerName: "Nazwa", field: 'WarehouseName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 200 },

        ],
      },
      { headerName: 'Lokalizacja',
        children: [
          { headerName: "Ident.", field: 'LocationIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: "Typ", field: 'LocationTypeDesc', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },

        ],
      },
      { headerName: 'Stan',
        children: [
          { headerName: 'MWS', field: 'Quantity', type: 'numericColumn', filter: 'agNumericColumnFilter', width: 100 },
        ]
      },
    ];

    this.columnDefsLogisticUnits = [
      { headerName: 'Id', field: 'sitLogisticUnitsId', sortable: true, resizable: true, type: "numericColumn", filter: 'agNumericColumnFilter' },
      { headerName: 'GUID', field: 'sitLogisticUnitsG', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
      { headerName: 'EAN', field: 'LogisticUnitEAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 110 },
      { headerName: "Lokalizacja", field: 'LocationIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'LogisticUnitDesc', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 400 },

    ];

    this.columnDefsWMSStocksWithLogisticUnits = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 110 },
          { headerName: 'Nazwa', field: 'ProductName', filter: 'agTextColumnFilter', width: 250 }
        ]
      },
      { headerName: 'Magazyn',
        children: [
          { headerName: "Ident.", field: 'WarehouseIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 80 },
          { headerName: "Nazwa", field: 'WarehouseName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 200 },

        ],
      },
      { headerName: 'Lokalizacja',
        children: [
          { headerName: "Ident.", field: 'LocationIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: "Typ", field: 'LocationTypeDesc', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },

        ],
      },
      { headerName: 'Stan', field: 'Quantity', type: 'numericColumn', filter: 'agNumericColumnFilter', width: 100 },

    ]


  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onGridReadyWMSStocksDet(params) {
    this.gridApiWMSStocksDet = params.api;
    this.gridColumnApiWMSStocksDet = params.columnApi;
  }
  onGridReadyWMSStocks(params) {
    this.gridApiWMSStocks = params.api;
    this.gridColumnApiWMSStocks = params.columnApi;
  }
  onGridReadyLogisticUnits(params) {
    this.gridApiLogisticUnits = params.api;
    this.gridColumnApiLogisticUnits = params.columnApi;
    this.gridColumnApiLogisticUnits.setColumnsVisible(['sitLogisticUnitsId','sitLogisticUnitsG'],false)
  }
  onGridReadyWMSStocksWithLogisticUnits(params) {
    this.gridApiWMSStocksWithLogisticUnits = params.api;
    this.gridColumnApiWMSStocksWithLogisticUnits = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitStocks');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedWMSStocksDet(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitWMSStocksDet');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedWMSStocks(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitWMSStocks');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedLogisticUnits(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitLogisticUnits');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedWMSStocksWithLogisticUnits(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitWMSStocksWithLogisticUnits');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, false);
  }

  activeRowStocksChanged(activeRow) {
    this.link = activeRow == null || activeRow.sitImagesG == null
      ? environment.apiUrl +'/service/attachments/get/' + this.currentUser.token + '/noimage/noimage.jpg' : // kiedy brak rekordu
        environment.apiUrl +'/service/attachments/get/' + this.currentUser.token + '/' + activeRow.sitImagesG + '/' + activeRow.FileName;

    this.ean = activeRow !== null ? activeRow.EAN : '';

  }

  activeRowWMSStocksDetChanged(activeRow) {
    this.locationIdent = activeRow !== null ? activeRow.LocationIdent : '';

  }
}

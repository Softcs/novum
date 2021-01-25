import { Component, OnInit, ViewChild, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { environment } from '@environments/environment';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { AttachmentsService } from '@app/_services/attachments.service';
import { formatNumber } from '@angular/common';
import { formatDate } from '@angular/common';
import { GridService } from '@app/_services/grid.service';

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
  logisticUnitEAN;
  popupParent;
  frameworkComponents;
  contentColor;
  columnDefs;
  columnDefsWMSStocksDet;
  columnDefsWMSStocks;
  columnDefsLogisticUnits;
  columnDefsWMSStocksWithLogisticUnits;

  constructor(
    private gatewayService: GatewayService,
    private attachmentsService: AttachmentsService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.contentColor = document.documentElement.style.getPropertyValue('$content-background-color');
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 120 },
          { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
          { headerName: 'Waga', field: 'Weight', type: 'numericColumn', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false, width: 80,
            cellRenderer: function(params) {
            return formatNumber(params.data["Weight"], locale,'1.3-3')
            }
          },
        ]
      },
      { headerName: 'Stany',
        children: [
          { headerName: 'ERP', field: 'Quantity', type: 'numericColumn', filter: 'agTextColumnFilter', width: 100 },
          { headerName: 'MWS', field: 'QuantityExt', type: 'numericColumn', filter: 'agTextColumnFilter', width: 100 },
          { headerName: 'Różnica.', field: 'QuantityDiff', type: 'numericColumn', filter: 'agTextColumnFilter', width: 100 },
        ]
      },
      { headerName: 'Magazyn',
        children: [
          { headerName: "Ident.", field: 'WarehouseIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
          { headerName: "Nazwa", field: 'WarehouseName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },

        ],
      },
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
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 120 },
          { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
          { headerName: 'Waga', field: 'Weight', filter: 'agNumberColumnFilter', width: 80,
            type: 'numericColumn',
            cellRenderer: function(params) {
            return formatNumber(params.data["Weight"], locale,'1.3-3')
            }
          }
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
          { headerName: 'MWS', field: 'Quantity', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100 },
        ]
      },
    ];

    this.columnDefsLogisticUnits = [
      { headerName: 'Id', field: 'sitLogisticUnitsId', sortable: true, resizable: true, type: "numericColumn", filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitLogisticUnitsG', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
      { headerName: 'EAN', field: 'LogisticUnitEAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 110 },
      { headerName: "Lokalizacja", field: 'LocationIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'LogisticUnitDesc', tooltipField: 'LogisticUnitDesc', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 400 },

    ];

    this.columnDefsWMSStocksWithLogisticUnits = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 110 },
          { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 250 }
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
      { headerName: 'Stan', field: 'Quantity', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100 },

    ]


  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
    if (params.columnApi.getColumn('sitLogisticUnitsG')) {
      params.columnApi.setColumnsVisible(['sitLogisticUnitsId','sitLogisticUnitsG'],false)
    }

  }

  activeRowStocksChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.attachmentsService.getUrl(this.currentUser, "noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.attachmentsService.getUrl(this.currentUser, activeRow.sitImagesG, activeRow.FileName) ;

    this.ean = activeRow !== null ? activeRow.EAN : '';
  }

  activeRowWMSStocksDetChanged(activeRow) {
    this.locationIdent = activeRow !== null ? activeRow.LocationIdent : 'ś';
  }

  activeRowLogisticUnitsChanged(activeRow) {
    this.logisticUnitEAN = activeRow !== null ? activeRow.LogisticUnitEAN : 'ś';
  }
}

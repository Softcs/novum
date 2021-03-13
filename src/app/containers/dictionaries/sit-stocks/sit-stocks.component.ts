import { Component, Inject, LOCALE_ID  } from '@angular/core';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { AttachmentsService } from '@app/_services/attachments.service';
import { GridService } from '@app/_services/grid.service';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-stocks',
  templateUrl: './sit-stocks.component.html',
  styleUrls: ['./sit-stocks.component.scss'],
  host: {class: 'router-flex'}
})
export class SitStocksComponent extends SitDictBaseComponent {
 
  currentUser: User;
  link;
  ean;
  locationIdent;
  logisticUnitEAN;
  contentColor;
 
  constructor(
    protected gatewayService: GatewayService,
    private attachmentsService: AttachmentsService,
    protected gridService: GridService,
    @Inject(LOCALE_ID) protected locale: string
  ) {
    super(gatewayService,gridService,locale);
    this.contentColor = document.documentElement.style.getPropertyValue('$content-background-color');
    };

    public prepareColumnsDefinitnion() {   
      this.gridColumnsDefinition["sitStocks"] = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 120 },
          { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
          { headerName: 'Waga', field: 'Weight', type: 'numericColumn', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false, width: 80,
          renderType: "number", renderFormat: '1.3-3'},
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
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer', floatingFilter: false },
      { headerName: 'Status sprz.', field: 'SaleStatus', tooltipField: 'SaleStatusDescription', width: 80, suppressMenu: true},


    ];

    this.gridColumnsDefinition["sitWMSStocksDet"] = [
      { headerName: 'Lokalizacja', field: 'LocationIdent', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
      { headerName: 'Stan - MWS', field: 'Quantity', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
      { headerName: "Typ lokalizacji", field: 'LocationTypeDesc', sortable: true, filter: 'agTextColumnFilter', floatingFilter: false },
    ];

    this.gridColumnsDefinition["sitWMSStocks"] = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 120 },
          { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
          { headerName: 'Waga', field: 'Weight', filter: 'agNumberColumnFilter', width: 80,
            type: 'numericColumn',
            renderType: "number", renderFormat: '1.3-3'},
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

    this.gridColumnsDefinition["sitLogisticUnits"] = [
      { headerName: 'Id', field: 'sitLogisticUnitsId', sortable: true, resizable: true, type: "numericColumn", filter: 'agNumberColumnFilter',  defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitLogisticUnitsG', sortable: true, resizable: true, filter: 'agTextColumnFilter',  defaultVisiblity: false },
      { headerName: 'EAN', field: 'LogisticUnitEAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 110 },
      { headerName: "Lokalizacja", field: 'LocationIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'LogisticUnitDesc', tooltipField: 'LogisticUnitDesc', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 400 },

    ];

    this.gridColumnsDefinition["sitWMSStocksWithLogisticUnits"] = [
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

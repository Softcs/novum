import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-stocks',
  templateUrl: './sit-stocks.component.html',
  styleUrls: ['./sit-stocks.component.scss'],
  host: {class: 'router-flex'}
})
export class SitStocksComponent extends SitDictBaseComponent {

  link: string;
  ean: string;

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
          { headerName: 'Mag', field: 'Quantity', type: 'numericColumn', filter: 'agTextColumnFilter', sortable: true, width: 100 },
          { headerName: 'Min', field: 'MinimumLevel', type: 'numericColumn', filter: 'agTextColumnFilter', sortable: true, width: 100, columnGroupShow: 'open'},          
        ]
      },
      { headerName: 'Magazyn',
        children: [
          { headerName: "Ident.", field: 'WarehouseIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
          { headerName: "Nazwa", field: 'WarehouseName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },

        ],
      },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter',  suppressMenu: true, width: 80, renderType: 'checkbox', floatingFilter: false, 
        cellClass: "grid-cell-centered"},
      { headerName: 'Status sprz.', field: 'SaleStatus', tooltipField: 'SaleStatusDescription', width: 80, suppressMenu: true},
    ];

  }

  activeRowStocksChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getImageUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getImageUrl(activeRow.sitImagesG, activeRow.FileName) ;

    this.ean = activeRow !== null ? activeRow.EAN : '';
  }

}

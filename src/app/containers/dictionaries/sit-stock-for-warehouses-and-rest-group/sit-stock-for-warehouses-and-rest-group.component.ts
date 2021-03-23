import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-stock-for-warehouses-and-rest-group',
  templateUrl: './sit-stock-for-warehouses-and-rest-group.component.html',
  styleUrls: ['./sit-stock-for-warehouses-and-rest-group.component.scss'],
  host: {class: 'router-flex'}
})
export class SitStockForWarehousesAndRestGroupComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitStocks"] = [
      { headerName: 'sitProductsG', field: 'sitProductsG',  width: 150, defaultVisibility: false },
      { headerName: 'sitProductsId', field: 'sitProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false},
      { headerName: 'EAN', field: 'EAN', width: 130},
      { headerName: 'Identyfikator', field: 'ProductIdent', width: 130},
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', width: 200},
      { headerName: 'Status sprz.', field: 'SaleStatus', width: 100, suppressMenu: true},
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', suppressMenu: true, width: 80, renderType: "checkbox"},
      { headerName: 'Cena netto', field: 'NetPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'Cena brutto', field: 'GrossPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'Cena ewid.', field: 'StandardPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'Odpis %', field: 'DeductPercent', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Stan', field: 'WSUM', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'WMS', field: 'A100', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Defekty', field: 'A101', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Magazyn 1', field: 'W1', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Magazyn 2', field: 'W2', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Magazyn 3', field: 'W3', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Magazyn 4', field: 'W4', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Pozostałe', field: 'POZO', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
    ],

    this.gridColumnsDefinition["sitSale"] = [
      { headerName: 'EAN', field: 'EAN', width: 130},
      { headerName: 'Identyfikator', field: 'ProductIdent', width: 130},
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', width: 200},
      { headerName: 'St.sprz.', field: 'SaleStatus', tooltipField: 'SaleStatusDescription', width: 80, suppressMenu: true},
      { headerName: 'Magazyn', field: 'WarehouseIdent', width: 100},
      { headerName: 'Typ dok.', field: 'DocumentIdent', width: 80, suppressMenu: true},
      { headerName: 'Id.KD.', field: 'DistributionChannelIdent', width: 100},
      { headerName: 'Kanał dystrybucji', field: 'DistributionChannelDesc', tooltipField: 'DistributionChannelDesc', width: 200},
      { headerName: 'Id.kli.', field: 'CustIdent', width: 100, suppressMenu: true},
      { headerName: 'Klient', field: 'CustName', tooltipField: 'CustName', width: 200},
      { headerName: 'Ilość', type: 'numericColumn', field: 'Quantity', width: 100, renderType: 'number',renderFormat: '1.0-0', suppressMenu: true },
      { headerName: 'Wart. ewid.', type: 'numericColumn', field: 'StandardAmount', width: 100, renderType: 'number', suppressMenu: true },
      { headerName: 'Wart. netto', type: 'numericColumn', field: 'NetAmount', width: 100, renderType: 'number', suppressMenu: true },
      { headerName: 'Różnica', type: 'numericColumn', field: 'DiffAmount', width: 100, renderType: 'number', suppressMenu: true },
    ]

  }
}

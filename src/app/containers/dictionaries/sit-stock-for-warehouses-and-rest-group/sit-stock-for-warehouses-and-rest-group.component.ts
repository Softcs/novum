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
      { headerName: 'sitProductsG', field: 'sitProductsG',  width: 150, defaultVisiblity: false },
      { headerName: 'sitProductsId', field: 'sitProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisiblity: false},
      { headerName: 'EAN', field: 'EAN', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130},
      { headerName: 'Identyfikator', field: 'ProductIdent', width: 130},
      { headerName: 'Nazwa', field: 'ProductName', width: 130},
      { headerName: 'Status sprz.', field: 'SaleStatus', width: 100, suppressMenu: true},
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', suppressMenu: true, width: 100, renderType: "checkbox"},
      { headerName: 'Cena netto', field: 'NetPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'Cena brutto', field: 'GrossPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'Cena ewid.', field: 'StandardPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'Proc.', field: 'DeductPercent', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'WMS dobre', field: 'A100', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'WMS defekty', field: 'A101', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Mag1', field: 'W1', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Mag2', field: 'W2', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Mag3', field: 'W3', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Mag4', field: 'W4', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Pozostałe', field: 'POZO', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
      renderType: "number", renderFormat: '1.0-0'},
    ]
  }
}

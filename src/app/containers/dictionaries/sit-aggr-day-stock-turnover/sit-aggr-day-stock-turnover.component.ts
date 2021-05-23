import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-aggr-day-stock-turnover',
  templateUrl: './sit-aggr-day-stock-turnover.component.html',
  styleUrls: ['./sit-aggr-day-stock-turnover.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAggrDayStockTurnoverComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitAggrDayStockTurnover"] = [
      { headerName: 'Data', field: 'Date', width: 90},
      { headerName: 'Magazyn', field: 'WarehouseIdent', width: 90},
      { headerName: 'Dokument', field: 'DocumentIdent', width: 90},
      { headerName: 'Produkt', field: 'ProductIdent', tooltipField: 'ProductIdent', width: 150},
      { headerName: 'Opis produktu', field: 'ProductName', tooltipField: 'ProductName', width: 200},
      { headerName: 'Kontrahent', field: 'CustIdent', tooltipField: 'CustIdent', width: 100},
      { headerName: 'Nazwa kontrahenta', field: 'CustName', tooltipField: 'CustName', width: 200},
      { headerName: 'Ilość', field: 'Quantity', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Netto', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2'},
      { headerName: 'Rozliczenie', field: 'StandardAmount', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2'}
    ]
  }
}

import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-stocks-on-date',
  templateUrl: './sit-stocks-on-date.component.html',
  styleUrls: ['./sit-stocks-on-date.component.scss'],
  host: {class: 'router-flex'}
})
export class SitStocksOnDateComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitStocksOnDate"] = [
      { headerName: 'Data', field: 'Date', width: 90},
      { headerName: 'Magazyn', field: 'WarehouseIdent', width: 90},
      { headerName: 'Produkt', field: 'ProductIdent', tooltipField: 'ProductIdent', width: 150},
      { headerName: 'Opis produktu', field: 'ProductName', tooltipField: 'ProductName', width: 200},
      { headerName: 'Ilość', field: 'Quantity', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.0-0'},
      { headerName: 'Rozliczenie', field: 'StandardAmount', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2'}
    ]
  }
}
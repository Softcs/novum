import { Component, OnInit } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-customer-billing-hours',
  templateUrl: './sit-customer-billing-hours.component.html',
  styleUrls: ['./sit-customer-billing-hours.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomerBillingHoursComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitCustomerBillingHours"] = [
      { headerName: 'Id', field: 'ssitCustomerBillingHoursId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomerBillingHoursG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Data', field: 'RealizationDate', filter: 'agTextColumnFilter', width: 90, sort: 'asc' },
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa kontrahenta', field: 'CustName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Opis', field: 'Description', filter: 'agTextColumnFilter', width: 400 },
      { headerName: 'Ilość', field: 'Quantity', filter: 'agTextColumnFilter', width: 100, type: 'numericColumn', renderType: 'number', agr: 'sum' },
      { headerName: 'Cena', field: 'Price', filter: 'agTextColumnFilter', width: 100, type: 'numericColumn', renderType: 'number' },
      { headerName: 'Netto', field: 'Net', filter: 'agTextColumnFilter', width: 100, type: 'numericColumn', renderType: 'number', agr: 'sum' }
    ];

  }
}

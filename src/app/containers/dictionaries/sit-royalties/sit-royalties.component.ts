import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-royalties',
  templateUrl: './sit-royalties.component.html',
  styleUrls: ['./sit-royalties.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRoyaltiesComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitRoyalties"] = [
      { headerName: 'GUID', field: 'sitRoyaltiesG', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Beneficjent',
        children: [
          { headerName: 'Ident.', field: 'CustIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
          { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 200 },
        ]
      },
      { headerName: 'Okres',
        children: [
          { headerName: 'Od', field: 'DateFrom', sortable: true, resizable: true, width: 90, renderType: 'date', renderFormat: 'yyyy-MM-dd' },
          { headerName: 'Do', field: 'DateTo', sortable: true, resizable: true, width: 90, renderType: 'date', renderFormat: 'yyyy-MM-dd' },
        ]
      },
      { headerName: 'Produkt',
        children: [
          { headerName: 'Ident.', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 150 },
          { headerName: 'EAN', field: 'EAN', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 120 },
          { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 200 },
        ]
      },
      { headerName: 'Nakład', field: 'PrintRun', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Stan', field: 'Stock', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Sprzedaż', field: 'Sale', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 80, suppressMenu: true},
      { headerName: 'Gratisy', field: 'Free', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Defekty', field: 'Damaged', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Cena', field: 'UnitPrice', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', width: 60, suppressMenu: true},
      { headerName: 'Stawka', field: 'RoyRate', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', width: 80, suppressMenu: true},
      { headerName: 'Rodzaj', field: 'BillingTypeIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100, suppressMenu: true },
      { headerName: 'Wart. PLN', field: 'Amount', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true, agr: 'sum'},
      { headerName: 'Wal.', field: 'CurrencyIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 60, suppressMenu: true },
      { headerName: 'Kurs wal.', field: 'ExRate', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.4-4', width: 80, suppressMenu: true},
      { headerName: 'Wart. wal.', field: 'AmountCurr', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true, agr: 'sum'},
      { headerName: 'Zaliczka', field: 'Advance', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true},
      { headerName: 'Należność', field: 'RoyDue', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true},
      { headerName: 'Do zapłaty', field: 'Payable', type: 'numericColumn', sortable: true, resizable: true, filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true},

    ]
  }
}

import { Component, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-payments',
  templateUrl: './sit-payments.component.html',
  styleUrls: ['./sit-payments.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'router-flex sit-payments-component'}
})
export class SitPaymentsComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitPayments"] = [
      { headerName: 'Id', field: 'sitOfficeDocHeadersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitOfficeDocHeadersG', width: 100, defaultVisibility: false },
      { headerName: 'Płatność',
        children: [
          { headerName: 'Po term', field: 'OverdueDays', type: 'numericColumn', width: 70, suppressMenu: true, defaultVisibility: true, },
          { headerName: 'Data', field: 'PaymentDate', width: 100, renderType: 'date', suppressMenu: true, defaultVisibility: true, },
        ]
      },
      { headerName: 'Kontrahent',
        children: [      
          { headerName: 'Identyfikator', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100, suppressMenu: true, defaultVisibility: true, },
          { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 250, defaultVisibility: true, },
        ]
      },
      { headerName: 'Dokument',
        children: [      
          { headerName: 'Numer', field: 'DocumentNumber', filter: 'agTextColumnFilter', width: 150, defaultVisibility: true },
          { headerName: 'Brutto', field: 'GrossCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, 
            defaultVisibility: false},
          { headerName: 'VAT', field: 'VATCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, 
            defaultVisibility: false},
        ]
      },
      { headerName: 'Do zapłaty',
        children: [      
          { headerName: 'Brutto', field: 'GrossToPayment', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, 
            suppressMenu: true, defaultVisibility: true, cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font12','greenBackground','numberFormatInt'], },
          { headerName: 'VAT', field: 'VATToPayment', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, 
            suppressMenu: true, defaultVisibility: true, cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font12','greenBackground','numberFormatInt'], },
        ]
      },
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true, defaultVisibility: true },
      { headerName: 'Split',
        children: [ 
          { headerName: 'payment', field: 'IsSplitPayment', filter: 'agSetColumnFilter', maxWidth: 80, renderType: 'checkbox', suppressMenu: true,
            cellClass: "grid-cell-centered", defaultVisibility: true },   
        ]
      },
      { headerName: 'Opis dokumentu', field: 'OfficeDocDescription', filter: 'agTextColumnFilter', width: 300, defaultVisibility: true },
      { headerName: 'Status', field: 'StatusValueName', filter: 'agTextColumnFilter', renderType: 'status', width: 67,  suppressMenu: true, defaultVisibility: false, },      
    ];
  
    this.gridColumnsDefinition["sitBankTransferHeaders"] = [
      { headerName: 'Id', field: 'sitBankTransferHeadersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitBankTransferHeadersG', width: 100, defaultVisibility: false },
      { headerName: 'Data paczki', field: 'BankTransferDate', width: 120, renderType: 'date', suppressMenu: true },
      { headerName: 'Data płatności', field: 'BankTransferPaymentDate', width: 120, renderType: 'date', suppressMenu: true },
      { headerName: 'Numer paczki', field: 'BankTransferNumber', filter: 'agTextColumnFilter', width: 150, defaultVisibility: true },
      { headerName: 'Konto bankowe', field: 'BankAccount', filter: 'agTextColumnFilter', width: 240, defaultVisibility: true },
      { headerName: 'Wal.', field: 'CurrencyIdent', tooltipField: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 50,  suppressMenu: true, },
      { headerName: 'Opis paczki', field: 'Description', filter: 'agTextColumnFilter', width: 300, defaultVisibility: true },
      { headerName: 'Status', field: 'StatusValueName', filter: 'agTextColumnFilter', renderType: 'status', width: 67,  suppressMenu: true, defaultVisibility: true, },      
    ];

    this.gridColumnsDefinition["sitBankTransferPositions"] = [
      { headerName: 'Id', field: 'sitBankTransferPositionsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitBankTransferPositionsG', width: 100, defaultVisibility: false },
      { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 50 },
      { headerName: 'Kontrahent', field: 'CustomerInfo', filter: 'agTextColumnFilter', width: 150, defaultVisibility: true },
      { headerName: 'ID kontrahenta', field: 'CustomerID', filter: 'agTextColumnFilter', width: 150, defaultVisibility: true },
      { headerName: 'Konto bankowe', field: 'CustomerBankAccount', filter: 'agTextColumnFilter', width: 210, defaultVisibility: true },
      { headerName: 'Opis pozycji', field: 'PositionDescription', filter: 'agTextColumnFilter', width: 300, defaultVisibility: true },
      { headerName: 'Nr faktury', field: 'InvoiceNumber', filter: 'agTextColumnFilter', width: 150, defaultVisibility: true },
      { headerName: 'Brutto faktury', field: 'GrossCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 120, 
        suppressMenu: true, defaultVisibility: true},
      { headerName: 'VAT faktury', field: 'VATCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 120, suppressMenu: true, 
        defaultVisibility: true},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 120, 
        suppressMenu: true, defaultVisibility: true},
      { headerName: 'VAT', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 120, suppressMenu: true, 
        defaultVisibility: true},
      { headerName: 'Data płatności', field: 'PaymentDate', width: 120, renderType: 'date', suppressMenu: true },
      { headerName: 'Split payment', field: 'IsSplitPayment', filter: 'agSetColumnFilter', maxWidth: 90, renderType: 'checkbox', suppressMenu: true,
        cellClass: "grid-cell-centered", defaultVisibility: true },   
      { headerName: 'Auto', field: 'IsAuto', filter: 'agSetColumnFilter', maxWidth: 90, renderType: 'checkbox', suppressMenu: true,
        cellClass: "grid-cell-centered", defaultVisibility: false },   

    ];

  }
}

import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-documents',
  templateUrl: './sit-documents.component.html',
  styleUrls: ['./sit-documents.component.scss'],
  host: {class: 'router-flex'}
})
export class SitDocumentsComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
      this.gridColumnsDefinition["sitDocumentsHeaders"] = [
        { headerName: 'Id', field: 'sitDocumentsHeadersId',width: 90, defaultVisibility: false },
        { headerName: 'GUID', field: 'sitDocumentsHeadersG',width: 150, defaultVisibility: false },
        { headerName: 'NagId SL', field: 'ExtAppIdent01', width: 100, defaultVisibility: false },
        { headerName: 'XL ID', field: 'ExtAppIdent02',width: 60, defaultVisibility: false },
        { headerName: 'Status', field: 'DocumentStatus',width: 60, defaultVisibility: false },
        { headerName: 'Typ dok.', field: 'DocumentIdent', filter: 'agSetColumnFilter', floatingFilter: false, width: 80},
        { headerName: 'Mag', field: 'WarehouseIdent', filter: 'agSetColumnFilter', floatingFilter: false, width: 70},
        { headerName: 'Numer', field: 'DocumentNumber' },
        { headerName: 'Data', field: 'DocumentDate', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, sort: 'desc'  },
        { headerName: 'Kontrahent', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', floatingFilter: false},
        { headerName: 'Opis', field: 'DocumentDescription', tooltipField: 'DocumentDescription', filter: 'agTextColumnFilter', floatingFilter: false, width: 120 },
        { headerName: 'Netto', field: 'Net', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
        { headerName: 'Vat', field: 'VAT', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
        { headerName: 'Brutto', field: 'Gross', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },   
        { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agSetColumnFilter', floatingFilter: false, width: 80, defaultVisibility: false },
        { headerName: 'Netto wl', field: 'NetCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },
        { headerName: 'Vat wl', field: 'VATCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },
        { headerName: 'Brutto wl', field: 'GrossCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },   
        { headerName: 'Status WMS', field: 'Status_WMS', filter: 'agSetColumnFilter', floatingFilter: false, width: 120, defaultVisibility: false},
        { headerName: 'Status SendMail', field: 'Status_SendMail', filter: 'agSetColumnFilter', floatingFilter: false, width: 120, defaultVisibility: false},
      ];

      this.gridColumnsDefinition["sitDocumentsPositions"] = [
        { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 50 },
        { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, floatingFilter: true },
        { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, floatingFilter: true, defaultVisibility: false },
        { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
        { headerName: 'JM', field: 'UnitIdent', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 50 },
        { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60, renderType: 'number' },
        { headerName: 'Cena', field: 'Price', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },
        { headerName: 'Rabat %', field: 'DiscountProcent', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', renderFormat: '1.0-0', defaultVisibility: false },
        { headerName: 'Rabat kw.', field: 'DiscountAmount', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },
        { headerName: 'Cena po rab.', field: 'PriceAfterDiscount', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
        { headerName: 'SV', field: 'VATRatesIdent', filter: 'agSetColumnFilter', floatingFilter: false, width: 60},
        { headerName: 'Netto', field: 'Net', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },
        { headerName: 'Vat', field: 'VAT', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },
        { headerName: 'Brutto', field: 'Gross', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },
        { headerName: 'Netto wl', field: 'NetCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },
        { headerName: 'Vat wl', field: 'VATCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },
        { headerName: 'Brutto wl', field: 'GrossCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', defaultVisibility: false },        
      ];

      this.gridColumnsDefinition["sitDocumentsVATFooters"] = [
        { headerName: 'SV', field: 'VATRatesIdent', suppressMenu: true, flex: 1 },
        { headerName: 'Netto', field: 'Net', type: 'numericColumn', suppressMenu: true, renderType: 'number', agr: 'sum', flex: 2 },
        { headerName: 'Vat', field: 'VAT', type: 'numericColumn', suppressMenu: true, renderType: 'number', agr: 'sum', flex: 2 },
        { headerName: 'Brutto', field: 'Gross', type: 'numericColumn', suppressMenu: true, renderType: 'number', agr: 'sum', flex: 2 },
      ]

  } 
}

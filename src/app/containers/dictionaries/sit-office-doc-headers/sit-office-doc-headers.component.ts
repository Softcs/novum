import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-office-doc-headers',
  templateUrl: './sit-office-doc-headers.component.html',
  styleUrls: ['./sit-office-doc-headers.component.scss'],
  host: {class: 'router-flex'}
})
export class SitOfficeDocHeadersComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitOfficeDocHeaders"] = [
      { headerName: 'Id', field: 'sitOfficeDocHeadersId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitOfficeDocHeadersG',width: 150, defaultVisibility: false },
      { headerName: 'Numer', field: 'OfficeDocNumber', width: 100, sort: 'desc' },
      { headerName: 'Data rej.', field: 'RegDate', filter: 'agDateColumnFilter',width: 90, floatingFilter: false  },
      { headerName: 'Typ dok.', field: 'OfficeDocIdent', tooltipField: 'OfficeDocName', filter: 'agSetColumnFilter', floatingFilter: false, width: 80},
      { headerName: 'Kontrahent', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', floatingFilter: false},
      { headerName: 'Opis', field: 'OfficeDocDescription', tooltipField: 'OfficeDocDescription', filter: 'agTextColumnFilter', floatingFilter: false, width: 120 },
      { headerName: 'Netto', field: 'Net', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },
      { headerName: 'Vat', field: 'VAT', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },
      { headerName: 'Brutto', field: 'Gross', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },   
      { headerName: 'Wal.', field: 'CurrencyIdent', tooltipField: 'CurrencyDescription', filter: 'agSetColumnFilter', floatingFilter: false, width: 60,suppressMenu: true,},
      { headerName: 'Netto wl', field: 'NetCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', },
      { headerName: 'Vat wl', field: 'VATCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', },
      { headerName: 'Brutto wl', field: 'GrossCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', },   
    ];

    this.gridColumnsDefinition["sitAttachments"] = [
      { headerName: 'ParentId', field: 'ParentId', defaultVisibility: false},
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG', defaultVisibility: false},
      { headerName: 'sitAttachmentsId', field: 'sitAttachmentsId', defaultVisibility: false},
      { headerName: 'Data dodania', field: 'InsertDate', width: 120, renderType: 'date', renderFormat: "yyyy-MM-dd HH:mm" },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 }
    ];    
  };
}

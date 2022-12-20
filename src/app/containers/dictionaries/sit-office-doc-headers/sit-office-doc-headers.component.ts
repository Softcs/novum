import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-office-doc-headers',
  templateUrl: './sit-office-doc-headers.component.html',
  styleUrls: ['./sit-office-doc-headers.component.scss'],
  host: {class: 'router-flex sit-office-doc-headers-component'}
})
export class SitOfficeDocHeadersComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitOfficeDocHeaders"] = [
      { headerName: 'Id', field: 'sitOfficeDocHeadersId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitOfficeDocHeadersG',width: 150, defaultVisibility: false },
      { headerName: '', field: 'StatusValueIdent',  tooltipField: 'StatusValueName', width: 40, suppressMenu: true,
        cellStyle: function(params) {
          if (params.value === 'ED') { return { color: 'gray', 'font-weight': 700 }; }
          else if (params.value === 'DZ') { return { color: 'green', 'font-weight': 700 }; }
          else if (params.value === 'FK') { return { color: 'blue', 'font-weight': 700 }; }
          else { return null; }
        }
      },
      { headerName: 'Numer', field: 'OfficeDocNumber', width: 100, sort: 'desc' },
      { headerName: 'Data rej.', field: 'RegDate', filter: 'agDateColumnFilter',width: 90, floatingFilter: false  },
      { headerName: 'Typ', field: 'OfficeDocIdent', tooltipField: 'OfficeDocName', filter: 'agSetColumnFilter', floatingFilter: false, suppressMenu: true, width: 50},
      { headerName: 'Kontrahent', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', floatingFilter: false},
      { headerName: 'Nr dok.', field: 'DocumentNumber', tooltipField: 'DocumentNumber', filter: 'agTextColumnFilter', floatingFilter: false, suppressMenu: true, width: 120 },
      { headerName: 'Netto PLN', field: 'Net', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', agr: 'sum' },
      { headerName: 'Vat PLN', field: 'VAT', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },
      { headerName: 'Brutto PLN', field: 'Gross', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', agr: 'sum' },   
      { headerName: 'Wal.', field: 'CurrencyIdent', tooltipField: 'CurrencyDescription', filter: 'agSetColumnFilter', floatingFilter: false, width: 60,suppressMenu: true,},
      { headerName: 'Netto w wal.', field: 'NetCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', },
      { headerName: 'Vat w wal.', field: 'VATCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', },
      { headerName: 'Brutto w wal.', field: 'GrossCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', },   
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

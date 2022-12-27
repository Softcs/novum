import { Component,LOCALE_ID,Inject } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-office-doc-headers',
  templateUrl: './sit-office-doc-headers.component.html',
  styleUrls: ['./sit-office-doc-headers.component.scss'],
  host: {class: 'router-flex sit-office-doc-headers-component'}
})
export class SitOfficeDocHeadersComponent extends SitDictBaseComponent {

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
  };

  public prepareColumnsDefinitnion() {
    var locale = this.locale;
    this.gridColumnsDefinition["sitOfficeDocHeaders"] = [
      { headerName: 'Id', field: 'sitOfficeDocHeadersId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitOfficeDocHeadersG',width: 150, defaultVisibility: false },
      { headerName: '', field: 'StatusValueIdent',  tooltipField: 'StatusValueName', width: 40, suppressMenu: true,
        cellStyle: function(params) {
          if (params.value === 'ED') { return { 'background-color': 'rgb(236, 236, 236)','font-weight': 700 }; }
          else if (params.value === 'DZ') { return { 'background-color': 'lime', color: 'white', 'font-weight': 700 }; }
          else if (params.value === 'FK') { return { 'background-color': 'green',color: 'white', 'font-weight': 700 }; }
          else { return null; }
        }
      },
      { headerName: 'Numer', field: 'OfficeDocNumber', width: 100, sort: 'desc' },
      { headerName: 'Data rej.', field: 'RegDate', filter: 'agDateColumnFilter',width: 90, floatingFilter: false  },
      { headerName: 'Typ', field: 'OfficeDocIdent', tooltipField: 'OfficeDocName', filter: 'agSetColumnFilter', floatingFilter: false, suppressMenu: true, width: 50},
      { headerName: 'Kontrahent', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', floatingFilter: false},
      { headerName: 'Nr dok.', field: 'DocumentNumber', tooltipField: 'DocumentNumber', filter: 'agTextColumnFilter', floatingFilter: false, suppressMenu: true, width: 120 },
      { headerName: 'Wal.', field: 'CurrencyIdent', tooltipField: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 50,  suppressMenu: true,
        cellStyle: function(params) { return (params.data["CurrencyIdent"] === 'PLN' ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },
      { headerName: 'Netto', field: 'NetCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', renderType:'number', width: 100,
        cellStyle: function(params) { return (params.data["IsCurrency"] === 0 ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },
      { headerName: 'Vat', field: 'VATCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', renderType:'number', width: 80,  
        cellStyle: function(params) { return (params.data["IsCurrency"] === 0 ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },
      { headerName: 'Brutto', field: 'GrossCurrency', filter: 'agTextColumnFilter', type: 'numericColumn', renderType:'number', width: 100, 
        cellStyle: function(params) { return (params.data["IsCurrency"] === 0 ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },   
      { headerName: 'GUID załącznika', field: 'sitAttachmentsG',width: 150, defaultVisibility: false },
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

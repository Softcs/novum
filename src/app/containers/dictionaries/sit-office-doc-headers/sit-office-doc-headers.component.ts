import { Component,LOCALE_ID,Inject } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';
import { DataSetWrapper } from '@app/_models';

@Component({
  selector: 'app-sit-office-doc-headers',
  templateUrl: './sit-office-doc-headers.component.html',
  styleUrls: ['./sit-office-doc-headers.component.scss'],
  host: {class: 'router-flex sit-office-doc-headers-component'}
})
export class SitOfficeDocHeadersComponent extends SitDictBaseComponent {
  dataSourceResponseWrapper: DataSetWrapper;
  gridApi: any;
  columnApi: any;
 
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
      { headerName: '', field: 'StatusValueIdent',  tooltipField: 'StatusValueName', width: 45, suppressMenu: true,
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
      { headerName: 'Netto', field: 'NetCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100,
        cellStyle: function(params) { return (params.data["IsCurrency"] === 0 ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },
      { headerName: 'Vat', field: 'VATCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 80,  
        cellStyle: function(params) { return (params.data["IsCurrency"] === 0 ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },
      { headerName: 'Brutto', field: 'GrossCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, 
        cellStyle: function(params) { return (params.data["IsCurrency"] === 0 ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },
      { headerName: 'P', headerTooltip:'Opłacone przez pracownika',field: 'P', filter: 'agSetColumnFilter', headerClass: "grid-cell-centered", cellClass: "grid-cell-centered", suppressMenu: true, width: 40, renderType: "checkbox"},
      { headerName: 'Pracownik', field: 'EmployeeName', tooltipField: 'EmployeeName', filter: 'agTextColumnFilter', floatingFilter: false, width: 120, defaultVisibility: false},
      { headerName: 'Netto PLN', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, defaultVisibility: false},
      { headerName: 'VAT PLN', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, defaultVisibility: false},
      { headerName: 'Brutto PLN', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, defaultVisibility: false},
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

    this.gridColumnsDefinition["sitAcceptances"] = [
      { headerName: 'ID', field: 'sitAcceptancesG', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAcceptancesId', width: 100, defaultVisibility: false },
      { headerName: 'Data wstawienia', field: 'InsertDate', filter: 'agDateColumnFilter',width: 140, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd H:mm:ss", sort: 'asc'},     
      { headerName: 'Poziom akceptacji', field: 'AcceptanceStepName', width: 200 },
      { headerName: 'Akceptujący', field: 'UserName', width: 200 },
      { headerName: 'Status akceptacji', field: 'AcceptedDesc', width: 150,
        cellStyle: function(params) {
          if (params.value === 'Do akceptacji') { return { color: 'orange', 'font-weight': 600 }; }
          else if (params.value === 'Zaakceptowane') { return { color: 'green', 'font-weight': 600 }; }
          else if (params.value === 'Odrzucone') { return { color: 'red', 'font-weight': 600 }; }
          else { return null; }
        }
      },
      { headerName: 'Data akceptacji', field: 'AcceptanceDate', filter: 'agDateColumnFilter',width: 140, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd H:mm:ss"},     
      { headerName: 'Komentarz', field: 'Comment', width: 300 },
    ];

    this.gridColumnsDefinition["sitOfficeDocDimensions"] = [
      { headerName: 'ID', field: 'sitOfficeDocDimensionsId', defaultVisibility: false},
      { headerName: 'GUID', field: 'sitOfficeDocDimensionsG', defaultVisibility: false},
      { headerName: 'Lp.', field: 'PosId', filter: 'agNumberColumnFilter', type: 'rightAligned' , width: "50", suppressMenu: true,
        cellStyle: {'padding-top': '6px'}
      },
      { headerName: 'Netto w wal.', field: 'NetCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "100", suppressMenu: true, agr: "sum",
        cellStyle: {'padding-top': '6px','background-color': 'rgb(219, 247, 255)'}
      },
      { headerName: 'Netto PLN', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "100", suppressMenu: true, agr: "sum",
        cellStyle: {'padding-top': '6px'}
      },
      { headerName: 'Dział', field: 'CompanyDepartmentIdent', tooltipField: 'CompanyDepartmentDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 130,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["CompanyDepartmentIdent"] ? params.data["CompanyDepartmentIdent"] : '';
          desc = params.data["CompanyDepartmentDesc"] ? params.data["CompanyDepartmentDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        //cellClass: ['sit-grid-row-2lines'],
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },
      { headerName: 'Projekt', field: 'ProjectIdent', tooltipField: 'ProjectName', filter: 'agTextColumnFilter', floatingFilter: false, width: 130,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["ProjectIdent"] ? params.data["ProjectIdent"] : '';
          desc = params.data["ProjectName"] ? params.data["ProjectName"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },
      { headerName: 'Kanał dystr.', field: 'DistributionChannelIdent', tooltipField: 'DistributionChannelDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 130,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["DistributionChannelIdent"] ? params.data["DistributionChannelIdent"] : '';
          desc = params.data["DistributionChannelDesc"] ? params.data["DistributionChannelDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },
      { headerName: 'Typ produktu', field: 'ProductsTypeIdent', tooltipField: 'ProductsTypeDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 130,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["ProductsTypeIdent"] ? params.data["ProductsTypeIdent"] : '';
          desc = params.data["ProductsTypeDesc"] ? params.data["ProductsTypeDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },
      { headerName: 'Opis', field: 'PosDesc', tooltipField: 'PosDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 150,
        cellStyle: {'white-space': 'normal','line-height': '1.3em', 'padding-top': '.3em'}
      },
      { headerName: 'SV', field: 'VATRatesIdent', filter: 'agNumberColumnFilter', width: "50", suppressMenu: true, 
        cellStyle: {'padding-top': '6px'}
      },
      { headerName: 'VAT PLN', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "100", suppressMenu: true, agr: "sum",
        cellStyle: {'padding-top': '6px'}
      },
      { headerName: 'Brutto PLN', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "100", suppressMenu: true, agr: "sum",
        cellStyle: {'padding-top': '6px'}
      },
      { headerName: 'VAT w wal.', field: 'VATCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "100", suppressMenu: true, agr: "sum",
        cellStyle: {'padding-top': '6px','background-color': 'rgb(219, 247, 255)'}
      },
      { headerName: 'Brutto w wal.', field: 'GrossCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "100", suppressMenu: true, agr: "sum",
        cellStyle: {'padding-top': '6px','background-color': 'rgb(219, 247, 255)'}
      },
    ];  

    this.gridColumnsDefinition["sitOfficeDocVATFooters"] = [
      { headerName: 'ID', field: 'sitOfficeDocVATFootersId', defaultVisibility: false},
      { headerName: 'GUID', field: 'sitOfficeDocVATFootersG', defaultVisibility: false},
      { headerName: 'SV', headerTooltip: 'Symbol stawki VAT', field: 'VATRatesIdent', filter: 'agTextColumnFilter', floatingFilter: false, width: 100},
      { headerName: 'Netto', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "80"},
      { headerName: 'VAT', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "80"},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: "80"},

    ];  
    
  };

  statusColor(){
    if (!this.dictContainer?.activeRow('sitOfficeDocHeaders')) { return }
    else if (this.dictContainer?.activeRow('sitOfficeDocHeaders').StatusValueIdent == 'ED') { return 'DarkGrey' }
    else if (this.dictContainer?.activeRow('sitOfficeDocHeaders').StatusValueIdent == 'DZ') { return 'Lime' }
    else if (this.dictContainer?.activeRow('sitOfficeDocHeaders').StatusValueIdent == 'FK') { return 'Green' };
  }
  hideCurrency(){
    if (!this.dictContainer?.activeRow('sitOfficeDocHeaders')) { return }
    else return(this.dictContainer?.activeRow('sitOfficeDocHeaders').IsCurrency == 1 ? false : true);
  }

  onGridReady(params){
    this.gridApi=params.api;
    this.columnApi=params.columnApi;
  }

  refreshAfter(dataSourceManager) {
    this.dataSourceResponseWrapper = dataSourceManager?.getDateSourceWrapper("sitOfficeDocHeaders");

    if (!this.dataSourceResponseWrapper.activeRow['IsCurrency']){ 
      this.columnApi.setColumnsVisible(['NetCurrency','VATCurrency','GrossCurrency'],false);
      return 
    } else if (this.dataSourceResponseWrapper.activeRow['IsCurrency'] == 1) {
      this.columnApi.setColumnsVisible(['NetCurrency','VATCurrency','GrossCurrency'],true);
      return;
    }


  }

}

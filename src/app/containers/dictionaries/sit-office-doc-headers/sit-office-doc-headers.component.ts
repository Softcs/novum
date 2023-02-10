import { Component, LOCALE_ID, Inject, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';
import { DataSetWrapper } from '@app/_models';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-sit-office-doc-headers',
  templateUrl: './sit-office-doc-headers.component.html',
  styleUrls: ['./sit-office-doc-headers.component.scss'],
  host: {class: 'router-flex sit-office-doc-headers-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitOfficeDocHeadersComponent extends SitDictBaseComponent {
  dataSourceResponseWrapper: DataSetWrapper;
  gridApi: any;
  columnApi: any;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  qrvalue = '';

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
      { headerName: 'ID dowodu księgowego', field: 'sitAccountingHeadersId',width: 150, defaultVisibility: false },

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
      { headerName: 'Lp.', field: 'PosId', filter: 'agNumberColumnFilter', type: 'rightAligned' , width: 50, suppressMenu: true,
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Netto w wal.', field: 'NetCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, agr: "sum",
        cellStyle: {'background-color': 'rgb(219, 247, 255)'},
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Netto PLN', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, agr: "sum",
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Typ transakcji', field: 'TransactionTypeIdent', tooltipField: 'TransactionTypeDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 130,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["TransactionTypeIdent"] ? params.data["TransactionTypeIdent"] : '';
          desc = params.data["TransactionTypeDesc"] ? params.data["TransactionTypeDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },
      { headerName: 'Dział', field: 'CompanyDepartmentIdent', tooltipField: 'CompanyDepartmentDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 130,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["CompanyDepartmentIdent"] ? params.data["CompanyDepartmentIdent"] : '';
          desc = params.data["CompanyDepartmentDesc"] ? params.data["CompanyDepartmentDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
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
      { headerName: 'Rodzaj kosztu', field: 'CostTypeIdent', tooltipField: 'CostTypeDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 130,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["CostTypeIdent"] ? params.data["CostTypeIdent"] : '';
          desc = params.data["CostTypeDesc"] ? params.data["CostTypeDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },
      { headerName: 'SV', headerTooltip: 'Stawka VAT (O - odliczane, N - nieodliczane, S - struktura)', field: 'VATRatesIdent', width: 50, suppressMenu: true, 
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["VATRatesIdent"] ? params.data["VATRatesIdent"] : '';
          desc = params.data["VATdeductionIdent"] ? params.data["VATdeductionIdent"] : '';
          return ident + '<br>' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em', 'text-align': 'right'}
      },
      { headerName: 'Klasyfikacja/Rodzaj', field: 'VATClassificationIdent', tooltipField: 'VATClassificationIdent', width: 130, suppressMenu: true, 
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["VATClassificationIdent"] ? params.data["VATClassificationIdent"] : '';
          desc = params.data["VATCostTypeIdent"] ? params.data["VATCostTypeIdent"] : '';
          return '<span style="color: dimgray;"><b>K:</b></span> '+ident 
            + '<br><span style="color: dimgray;"><b>R:</b></span> ' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },
      { headerName: 'Proc. szczególna', headerTooltip: 'Procedura szczególna VAT i podatkowa', field: 'VATSpecialTypesIdent', tooltipField: 'VATSpecialTypesIdent', width: 130, suppressMenu: true, 
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["VATSpecialTypesIdent"] ? params.data["VATSpecialTypesIdent"] : '';
          desc = params.data["TaxSpecialTypesIdent"] ? params.data["TaxSpecialTypesIdent"] : '';
          return '<span style="color: dimgray;"><b></b></span> ' + ident + 
          '<br><span style="color: dimgray;"><b></b></span> ' + desc
        },
        cellStyle: {'line-height': '1.2em', 'padding-top': '.3em'}
      },            
      { headerName: 'VAT PLN', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, agr: "sum",
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Brutto PLN', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, agr: "sum",
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'VAT w wal.', field: 'VATCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, agr: "sum",
        cellStyle: {'background-color': 'rgb(219, 247, 255)'},
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Brutto w wal.', field: 'GrossCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, suppressMenu: true, agr: "sum",
        cellStyle: {'background-color': 'rgb(219, 247, 255)'},
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Opis', field: 'PosDesc', tooltipField: 'PosDesc', filter: 'agTextColumnFilter', floatingFilter: false, width: 150,
        cellStyle: {'white-space': 'normal','line-height': '1.3em', 'padding-top': '.3em'}
      },
      
    ];  

    this.gridColumnsDefinition["sitOfficeDocVATFooters"] = [
      { headerName: 'ID', field: 'sitOfficeDocVATFootersId', defaultVisibility: false},
      { headerName: 'GUID', field: 'sitOfficeDocVATFootersG', defaultVisibility: false},
      { headerName: 'SV', headerTooltip: 'Symbol stawki VAT', field: 'VATRatesIdent', filter: 'agTextColumnFilter', floatingFilter: false, width: 50, suppressMenu: true},
      { headerName: 'GV', headerTooltip: 'O - odliczane, N - nieodliczane, S - struktura', field: 'VATdeductionIdent', filter: 'agTextColumnFilter', floatingFilter: false, width: 40, suppressMenu: true},
      { headerName: 'Klasyfikacja', field: 'VATClassificationIdent', tooltipField: 'VATClassificationIdent', width: 110  },
      { headerName: 'Rodzaj', field: 'VATCostTypeIdent', tooltipField: 'VATCostTypeIdent', width: 100 },
      { headerName: 'Netto', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 80, agr: "sum"},
      { headerName: 'VAT', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 80, agr: "sum"},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 80, agr: "sum"},
      { headerName: 'Netto w wal', field: 'NetCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 80, agr: "sum", defaultVisibility: false},
      { headerName: 'VAT w wal', field: 'VATCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 80, agr: "sum", defaultVisibility: false},
      { headerName: 'Brutto w wal', field: 'GrossCurrency', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 80, agr: "sum", defaultVisibility: false},

    ];  

    this.gridColumnsDefinition["sitAccounting"] = [
      { headerName: 'ID', field: 'sitAccountingId', defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAccountingG', defaultVisibility: false},
      { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true },
      { headerName: 'Konto', field: 'Account', tooltipField: 'AccountDesc', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'WN wal.', field: 'CAmountCurrency', type: 'numericColumn',renderType:'number', filter: 'agNumberColumnFilter', width: 100, agr: 'sum', suppressMenu: true,},
      { headerName: 'MA wal.', field: 'DAmountCurrency', type: 'numericColumn',renderType:'number', filter: 'agNumberColumnFilter', width: 100, agr: 'sum', suppressMenu: true,},
      { headerName: 'Wal.', field: 'CurrencyIdent', tooltipField: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 50,  suppressMenu: true,
        cellStyle: function(params) { return (params.data["CurrencyIdent"] === 'PLN' ? {} : {'background-color': 'rgb(219, 247, 255)'}) }
      },

      { headerName: 'WN', field: 'CAmount', type: 'numericColumn',renderType:'number', filter: 'agNumberColumnFilter', width: 100, agr: 'sum', suppressMenu: true,},
      { headerName: 'MA', field: 'DAmount', type: 'numericColumn',renderType:'number', filter: 'agNumberColumnFilter', width: 100, agr: 'sum', suppressMenu: true},
      { headerName: 'Nr.dok.', field: 'DocumentNumber', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Opis', field: 'PosDesc', filter: 'agTextColumnFilter', width: 250 },
    ];  

    this.gridColumnsDefinition['sitAccountingDim'] = [
      { headerName: 'ID', field: 'sitAccountingDimId', filter: 'agNumberColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAccountingDimG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true,
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Kwota', field: 'Amount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, agr: 'sum', autoHeight: true,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ')
        },
        cellClass: 'grid-cell-center-right'
      },
      { headerName: 'Dział', field: 'CompanyDepartmentIdent', filter: 'agTextColumnFilter',tooltipField: 'CompanyDepartmentDesc', autoHeight: true,
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["CompanyDepartmentIdent"] ? params.data["CompanyDepartmentIdent"] : ''
          desc = params.data["CompanyDepartmentDesc"] ? params.data["CompanyDepartmentDesc"] : ''
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}
      },
      { headerName: 'Projekt', field: 'ProjectIdent', filter: 'agTextColumnFilter', tooltipField: 'ProjectName',
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["ProjectIdent"] ? params.data["ProjectIdent"] : '';
          desc = params.data["ProjectName"] ? params.data["ProjectName"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}
  
      },
      { headerName: 'Kanał dystrybucji', field: 'DistributionChannelIdent', filter: 'agTextColumnFilter', tooltipField: 'DistributionChannelDesc',
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["DistributionChannelIdent"] ? params.data["DistributionChannelIdent"] : '';
          desc = params.data["DistributionChannelDesc"] ? params.data["DistributionChannelDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}
  
      },
      { headerName: 'Typ produktu', field: 'ProductsTypeIdent', filter: 'agTextColumnFilter', tooltipField: 'ProductsTypeDesc',
        cellRenderer: function(params) {
          var ident;
          var desc;
          ident = params.data["ProductsTypeIdent"] ? params.data["ProductsTypeIdent"] : '';
          desc = params.data["ProductsTypeDesc"] ? params.data["ProductsTypeDesc"] : '';
          return '<b>' + ident + '</b><br>' + desc
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}
  
      },
    ]
  };

  statusColor(){
    if (!this.dictContainer?.activeRow('sitOfficeDocHeaders')) { return }
    else if (this.dictContainer?.activeRow('sitOfficeDocHeaders').StatusValueIdent == 'ED') { return 'DarkGrey' }
    else if (this.dictContainer?.activeRow('sitOfficeDocHeaders').StatusValueIdent == 'DZ') { return 'Lime' }
    else if (this.dictContainer?.activeRow('sitOfficeDocHeaders').StatusValueIdent == 'FK') { return 'Green' };
  }

  hideCurrency(){
    if (!this.dictContainer?.activeRow('sitOfficeDocHeaders')) { return }
    else {
      console.log(this.dictContainer?.activeRow('sitOfficeDocHeaders').IsCurrency)
      return(this.dictContainer?.activeRow('sitOfficeDocHeaders').IsCurrency == 1 ? false : true);
    }
  }

  hideQRCode(){
    if (!this.dictContainer?.activeRow('sitOfficeDocHeaders')) { return }
    else return( this.dictContainer?.activeRow('sitOfficeDocHeaders').QRvalue ? false : true );
  }

  hideSwift(){
    if (!this.dictContainer?.activeRow('sitOfficeDocHeaders')) { return }
    else return( this.dictContainer?.activeRow('sitOfficeDocHeaders').Swift ? false : true );
  }

  onGridReady(params){
    this.gridApi=params.api;
    this.columnApi=params.columnApi;
  }

  refreshAfter(dataSourceManager) {
    this.dataSourceResponseWrapper = dataSourceManager?.getDateSourceWrapper("sitOfficeDocHeaders");

    this.qrvalue = this.dataSourceResponseWrapper.activeRow['QRvalue'];

    if (!this.dataSourceResponseWrapper.activeRow['IsCurrency']){ 
      this.columnApi.setColumnsVisible(['NetCurrency','VATCurrency','GrossCurrency'],false);
    } else if (this.dataSourceResponseWrapper.activeRow['IsCurrency'] == 1) {
      this.columnApi.setColumnsVisible(['NetCurrency','VATCurrency','GrossCurrency'],true);
    }

    if (!this.dataSourceResponseWrapper.activeRow['UseCompanyDepartments'] || this.dataSourceResponseWrapper.activeRow['UseCompanyDepartments'] == 0){ 
      this.columnApi.setColumnsVisible(['CompanyDepartmentIdent'],false);
    } else {
      this.columnApi.setColumnsVisible(['CompanyDepartmentIdent'],true);
    }

    if (!this.dataSourceResponseWrapper.activeRow['UseProjects'] || this.dataSourceResponseWrapper.activeRow['UseProjects'] == 0){ 
      this.columnApi.setColumnsVisible(['ProjectIdent'],false);
    } else {
      this.columnApi.setColumnsVisible(['ProjectIdent'],true);
    }

    if (!this.dataSourceResponseWrapper.activeRow['UseDistributionChannels'] || this.dataSourceResponseWrapper.activeRow['UseDistributionChannels'] == 0){ 
      this.columnApi.setColumnsVisible(['DistributionChannelIdent'],false);
    } else {
      this.columnApi.setColumnsVisible(['DistributionChannelIdent'],true);
    }

    if (!this.dataSourceResponseWrapper.activeRow['UseProductsTypes'] || this.dataSourceResponseWrapper.activeRow['UseProductsTypes'] == 0){ 
      this.columnApi.setColumnsVisible(['ProductsTypeIdent'],false);
    } else {
      this.columnApi.setColumnsVisible(['ProductsTypeIdent'],true);
    }
    
    if (!this.dataSourceResponseWrapper.activeRow['UseCostTypes'] || this.dataSourceResponseWrapper.activeRow['UseCostTypes'] == 0){ 
      this.columnApi.setColumnsVisible(['CostTypeIdent'],false);
    } else {
      this.columnApi.setColumnsVisible(['CostTypeIdent'],true);
    }
        
    return;
  }

}

import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-sys-common-data-tables',
  templateUrl: './sit-sys-common-data-tables.component.html',
  styleUrls: ['./sit-sys-common-data-tables.component.scss'],
  host: {class: 'router-flex'}
})
export class SitSysCommonDataTablesComponent extends SitDictBaseComponent {
  public autoGroupColumnDef;

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale)

      this.autoGroupColumnDef = { 
        cellRendererParams: {
          suppressCount: true
        }
      }
    };
    
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitCountries"] = [
      { headerName: 'Id', field: 'sitCountriesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCountriesG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },        
      { headerName: 'Identyfikator', field: 'CountrySymbol', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Opis', field: 'CountryName', filter: 'agTextColumnFilter', width: 300 }
    ];

    this.gridColumnsDefinition["sitCurrencies"] = [
      { headerName: 'Id', field: 'sitCurrenciesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCurrenciesG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },  
      { headerName: 'Identyfikator', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Opis', field: 'CurrencyDescription', filter: 'agTextColumnFilter', width: 300 },
    ];

    this.gridColumnsDefinition["sitDocumentsLinksTypes"] = [
      { headerName: 'Id', field: 'sitDocumentsLinksTypesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitDocumentsLinksTypesG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} }  },  
      { headerName: 'Identyfikator', field: 'LinkTypeIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Opis', field: 'LinkTypeName', filter: 'agTextColumnFilter', width: 350 },
    ];

    this.gridColumnsDefinition["sitHRWorkingHours"] = [
      { headerName: 'Id', field: 'sitHRWorkingHoursId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitHRWorkingHoursG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },  
      { headerName: 'Rok', field: 'Year', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, sort: 'asc', suppressMenu: true },
      { headerName: 'Miesiąc', field: 'Month', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, sort: 'asc', suppressMenu: true },
      { headerName: 'Godz. prac.', field: 'WorkingHours', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true},
      { headerName: 'Dni prac.', field: 'WorkingDays', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true},
      { headerName: 'Dni wolne', field: 'NonWorkingDays', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true},
      { headerName: 'Przec. wynagr.', field: 'AverageSalary', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130,renderType: 'number', renderFormat: '1.2-2',},
    ];

    this.gridColumnsDefinition["sitImportsTemplates"] = [
      { headerName: 'Id', field: 'sitImportsTemplatesId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitImportsTemplatesG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },     
      { headerName: 'Identyfikator szablonu', field: 'ImportTemplateIdent', filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'Opis', field: 'ImportTemplateName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Plik wzorca importu', field: 'TemplateFileName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Procedura importująca', field: 'ImportProcName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Usuń wiersze', field: 'DelExistingRows', filter: 'agSetColumnFilter', suppressMenu: true, width: 100,renderType: "checkbox", cellClass: "grid-cell-centered" },      
      { headerName: 'Definicja kolumn', field: 'ColumnDefinition', filter: 'agTextColumnFilter', width: 250 },    
    ];
  
    this.gridColumnsDefinition["sitJobTimes"] = [
      { headerName: 'Id', field: 'sitJobTimesId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitJobTimesG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },  
      { headerName: 'Identyfikator', field: 'JobTimeIdent', filter: 'agNumberColumnFilter', width: 100, sort: 'asc', suppressMenu: true },
      { headerName: 'Opis', field: 'JobTimeDesc', filter: 'agNumberColumnFilter', width: 200, suppressMenu: true },
      { headerName: 'Mnożnik', field: 'Multiplier', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, renderType: 'number', renderFormat: '1.4-4',},
    ];
    
    this.gridColumnsDefinition["sitLanguages"] = [
      { headerName: 'Id', field: 'sitLanguagesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitLanguagesG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },  
      { headerName: 'Identyfikator', field: 'LanguageIdent', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Opis', field: 'LanguageName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'ISO639 1', field: 'ISO639_1', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'ISO639 2T', field: 'ISO639_2T', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'ISO639 2B', field: 'ISO639_2B', filter: 'agTextColumnFilter', width: 100 },
    ];

    this.gridColumnsDefinition["sitStatuses"] = [
      { headerName: 'Id', field: 'sitStatusesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitStatusesG', width: 300, defaultVisibility: true, 
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },  
      { headerName: 'Identyfikator', field: 'StatusIdent',toolTip: 'Nazwa statusu', width: 250 },
      { headerName: 'Nazwa', field: 'StatusName',toolTip: 'Nazwa statusu', width: 250 },
      { headerName: 'Tabela', field: 'TableName', width: 150 },
      { headerName: 'Nazwa kolumny', field: 'ColumnName', width: 200 }
    ];

    this.gridColumnsDefinition["sitUtilCheckCommonDataTable"] = [       
      { headerName: 'Table name', field: 'TableName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'sit_test_job', field: 'sit_test_job_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit_test_publicat', field: 'sit_test_publicat_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit_test_chobot', field: 'sit_test_chobot_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit', field: 'sit_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit_company_template', field: 'sit_company_template_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit_job', field: 'sit_job_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit_job_abroad', field: 'sit_job_abroad_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit_publicat', field: 'sit_publicat_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
      { headerName: 'sit_chobot', field: 'sit_chobot_diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered" },
     ];

     this.gridColumnsDefinition["sitUtilCheckCommonDataTablePivot"] = [       
       { headerName: 'Table name', field: 'TableName', filter: 'agTextColumnFilter', width: 200,
         rowGroup: true, enableRowGroup: true, enablePivot: true },
       { headerName: 'DB name', field: 'dbName', filter: 'agTextColumnFilter', width: 100, sort: 'desc', 
         pivot: true, enablePivot: true },
       { headerName: 'diff', field: 'diff', width: 150, renderType: 'checkbox', cellClass: "grid-cell-centered",
         aggFunc: 'min', enableValue: true },
      ]

  }
}


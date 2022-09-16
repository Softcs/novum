import { Component} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-customers',
  templateUrl: './sit-customers.component.html',
  styleUrls: ['./sit-customers.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomersComponent extends SitDictBaseComponent {
   public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitCustomers"] = [
      { headerName: 'ID', field: 'sitCustomersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomersG', width: 100, defaultVisibility: false },
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', flex: 1,
        cellRenderer: function(params) {
          return '<table style="width:100%"><tr><td style="width:50%">ID: ' + params.data["CustIdent"] +'</td>'
              +(params.data["VATId"] === '' ? '' : '<td style="text-align:right">NIP: ' + params.data["VATId"] +'</td>')
              +'</tr>'
            + '<tr><td colspan="2"><b>' + params.data["CustName"] +'</b></td></tr></table>'
        }
      },
    ];

    this.gridColumnsDefinition["sitHRDepartments4Cust"] =  [
      { headerName: 'Identyfikator', field: 'HRDepartmentIdent', width: 150 },
      { headerName: 'Nazwa', field: 'HRDepartmentName', width: 200 },
      { headerName: 'Proc.przel.UOP', headerTooltip: 'Procedura przeliczająca UOP', field: 'HRBatches4InvoicingIdent', width: 200 },
    ];

    this.gridColumnsDefinition["sitHRParams4Invoicing"] = [
      { headerName: 'Od dnia', field: 'DateFrom', autoHeight: true, width: 100, sort: 'desc',suppressMenu: true, renderType: "date"}, // domyslny format yyyy-MM-dd - mozna przeciazyc przez np. renderFormat: "yyyy-MM-dd"
      { headerName: 'Składnik', field: 'PayrollComponentName', width: 110, sort: 'asc',suppressMenu: true, },
      { headerName: 'Rodzaj', field: 'MarkupKindName', tooltipField: 'MarkupKindName', width: 100,suppressMenu: true },
      { headerName: 'Opis prac', field: 'WorkDesc', tooltipField: 'WorkDesc', filter: 'agTextColumnFilter', suppressMenu: true, width: 100,},
      { headerName: 'Próg', field: 'Threshold', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, sort: 'asc',suppressMenu: true},
      { headerName: 'Wartość', field: 'Value', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true,
        renderType: "number", renderFormat: '1.2-2'}, // domyslny format 1.2-2 - mozna przeciazyc przez np. renderFormat: 1.2-2"
      { headerName: 'Zawsze licz ZUS', headerTooltip:'Zawsze licz ZUS',field: 'AlwaysCalcZUS', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 110, renderType: "checkbox"},
      { headerName: 'Zawsze licz PPK', headerTooltip:'Zawsze licz PPK', field: 'AlwaysCalcPPK', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 110, renderType: "checkbox"},
      { headerName: 'Bez ZUS', field: 'ZUS', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 80, renderType: "checkbox"},
      { headerName: 'Rekr. klienta', field: 'CustRecr', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 100, renderType: "checkbox"},
      { headerName: 'Nie dodawaj premii do netto', headerTooltip:'Nie dodawaj premii do netto', field: 'NoBonusInCustNet', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 100, renderType: "checkbox"},
      { headerName: 'Nie dodawaj PPK do netto', headerTooltip:'Nie dodawaj PPK do netto', field: 'NoPPKInCustNet', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 100, renderType: "checkbox"},
    ];

    this.gridColumnsDefinition["sitCostCenter4Cust"] = [
      { headerName: 'Identyfikator', field: 'CustomerCostCenterIdent', width: 150 },
      { headerName: 'Nazwa', field: 'CustomerCostCenterName', width: 250 }
    ];

    this.gridColumnsDefinition["sitHRAdditions4Invoicing"] = [
      { headerName: 'ID', field: 'sitHRAdditions4InvoicingId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitHRAdditions4InvoicingG', width: 100, defaultVisibility: false },
      { headerName: 'Od dnia', field: 'DateFrom', autoHeight: true, width: 100, sort: 'desc',suppressMenu: true, renderType: "date"}, // domyslny format yyyy-MM-dd - mozna przeciazyc przez np. renderFormat: "yyyy-MM-dd"
      { headerName: 'Identyfikator', field: 'AdditionIdent', width: 200, sort: 'asc', },
      { headerName: 'Wartość', field: 'Value', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80, suppressMenu: true,
        renderType: "number", renderFormat: '1.2-2'}, // domyslny format 1.2-2 - mozna przeciazyc przez np. renderFormat: 1.2-2"
      { headerName: 'Opis', field: 'AdditionDesc', width: 200 },

    ];

    this.gridColumnsDefinition["sitCustomersAttachments4EmpSettDef"] = [
      { headerName: 'ID', field: 'sitCustomersAttachments4EmpSettDefId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomersAttachments4EmpSettDefG', width: 100, defaultVisibility: false },
      { headerName: 'Rodzaj', field: 'KindName', width: 100 },
      { headerName: 'Plik wzorca XLS', field: 'TemplateName', width: 200, },
      { headerName: 'Nazwa arkusza', field: 'SheetName', width: 150, },
      { headerName: 'Komórka startowa', field: 'CellAddress', width: 100 },
      { headerName: 'Nazwa funkcji SQL', field: 'FunctionName', width: 200 },

    ];

    this.gridColumnsDefinition["sitCustomerEDocs"] = [
      { headerName: 'ID', field: 'sitCustomerEDocsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomerEDocsG', width: 100, defaultVisibility: false },
      { headerName: 'Dokument', field: 'DocumentIdent', width: 100 },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Format danych', field: 'FileFormat', width: 130, },
      { headerName: 'Dołącz PDF', field: 'SendPDFReport', width: 100, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Parametry wysyłki', field: 'ConnectionInfo', width: 400 },
    ];

    this.gridColumnsDefinition["sitCustomerB2BProductsConfig"] = [
      { headerName: 'ID', field: 'sitCustomerB2BProductsConfigId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomerB2BProductsConfigG', width: 100, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, suppressMenu: true},
      { headerName: 'Funkcja generująca katalog', field: 'ProductCatalogFormatFunction', width: 200, },
      { headerName: 'Funkcja generująca stany', field: 'InventoryReportFormatFunction', width: 200, },      
    ];

    this.gridColumnsDefinition["sitCustomerB2BProducts"] = [
      { headerName: 'ID', field: 'sitCustomerB2BProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomerB2BProductsG', width: 100, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status prod', field: 'ProductStatusValueName_Main', filter: 'agSetColumnFilter', width: 140, floatingFilter: false, 
        cellStyle: function(params) {
          if (params.value === 'W przygotowaniu') { return { color: 'violet', 'font-weight': 600 }; }
          else if (params.value === 'Zapowiedź') { return { color: 'orange', 'font-weight': 600 }; }
          else if (params.value === 'Nowość') { return { color: 'rgb(153, 0, 0)', 'font-weight': 600 }; }
          else if (params.value === 'Aktywna') { return { color: 'rgb(20, 152, 46)', 'font-weight': 600 }; }
          else if (params.value === 'Wyprzedaż') { return { color: 'rgb(11, 23, 255)', 'font-weight': 600 }; }
          else if (params.value === 'Wycofana') { return { color: 'black', 'font-weight': 600 }; }          
          else { return null; }
        }
      },
      { headerName: 'Prod. akt.', field: 'IsActive_Product', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered" },
      { headerName: 'B2B', field: 'IsB2B', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered", defaultVisibility: true },
      { headerName: 'Status sprz.', field: 'SaleStatus', tooltipField: 'SaleStatusDescription', width: 80, suppressMenu: true},
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 80, suppressMenu: true},

    ];

    this.gridColumnsDefinition["sitHRParams4InvoicingContr"] = [
      { headerName: 'Od dnia', field: 'DateFrom', width: 100, sort: 'desc',suppressMenu: true, renderType: "date"}, // domyslny format yyyy-MM-dd - mozna przeciazyc przez np. renderFormat: "yyyy-MM-dd"
      { headerName: 'Rekr.kli.', headerTooltip:'Rekrutacja klienta', field: 'CustRecr', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 70, renderType: "checkbox"},
      { headerName: 'Rez url.', headerTooltip:'Licz rezerwę urlopową', field: 'CalcVacRes', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 70, renderType: "checkbox"},
      { headerName: 'PFRON', headerTooltip:'Licz PFRON', field: 'CalcPFRON', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 70, renderType: "checkbox"},
      { headerName: 'Ryz. chor.', headerTooltip:'Licz ryzyko chorobowe', field: 'CalcSickRisk', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 70, renderType: "checkbox"},
      { headerName: 'Wsp.ryz.', field: 'SickRiskFactor',headerTooltip:'Współczynnik do wyliczenia ryzyka urlopowego', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Osobno', headerTooltip:'Licz osobno ZUS i narzut', field: 'CalcSeparate', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 70, renderType: "checkbox"},
      { headerName: 'Zasadnicze', field: 'BaseRate',headerTooltip:'Zasadnicze', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Nocne', field: 'NightRate',headerTooltip:'Nocne', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Nadgodziny', field: 'OvertimeRate',headerTooltip:'Nadgodziny', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Premie', field: 'BonusRate', headerTooltip:'Premie',filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Premie1', field: 'Bonus1Rate', headerTooltip:'Premie1',filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Urlop', field: 'VacRate',headerTooltip:'Urlop', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Urlop dod.', field: 'VacAddRate',headerTooltip:'Urlop dodatkowy', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Rez.urlop.', field: 'VacResRate',headerTooltip:'Rezerwa urlopowa', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Chorobowe', field: 'SickRate', headerTooltip:'Chorobowe',filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Nagr./bony', field: 'VouchersRate',headerTooltip:'Nagrody i bony', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Ryczałt', field: 'LumpSumRate',headerTooltip:'Ryczałt', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Zakw.', field: 'Addition01Rate',headerTooltip:'Dofinansowanie do zakwaterowania', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Ubezp.', field: 'Addition05Rate',headerTooltip:'Dofinansowanie do ubezpiecznia', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Dyżur', field: 'StandbyRate',headerTooltip:'Dyżur', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Med.', field: 'Addition06Rate', headerTooltip:'Dofinansowanie do pakietów medycznych',filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Posiłki', field: 'Addition02Rate',headerTooltip:'Dofinansowanie do posiłków', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Inne', field: 'AdditionsRate',headerTooltip:'Inne dodatki', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'ZUS dod.', field: 'ZUSAddRate',headerTooltip:'Dodatkowy ZUS', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'PFRON', field: 'PFRONRate', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'PPK', field: 'PPKRate', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
      { headerName: 'Posi.bez VAT', headerTooltip:'Posiłki bez VAT', field: 'MealsNoVAT', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 70, renderType: "checkbox"},
      { headerName: '% VAT`', field: 'MealsVATRate', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60,suppressMenu: true},
    ];    
  }
}

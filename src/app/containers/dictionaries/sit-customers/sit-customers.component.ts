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
      { headerName: 'Rez url.', headerTooltip:'Licz rezerwę urlopową', field: 'CalcVacRes', filter: 'agSetColumnFilter', cellClass: "grid-cell-centered", suppressMenu: true, width: 70, renderType: "checkbox"},
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

    this.gridColumnsDefinition["sitHRParams4InvoicingContr"] = [
      { headerName: 'Od dnia', field: 'DateFrom', width: 100, sort: 'desc',suppressMenu: true, renderType: "date"}, // domyslny format yyyy-MM-dd - mozna przeciazyc przez np. renderFormat: "yyyy-MM-dd"
      { headerName: 'Zasadnicze', field: 'BaseRate', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true},
    ];    
  }
}

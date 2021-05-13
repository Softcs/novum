import { Component } from '@angular/core';
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
      { headerName: 'Identyfikator', field: 'CustIdent', width: 200 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', width: 300 },
      { headerName: 'NIP', field: 'VATId', width: 100 },
      { headerName: 'Miasto', field: 'City', width: 100 },
      { headerName: 'Kraj', field: 'CountrySymbol', width: 80 },
      { headerName: 'Status WMS', field: 'Status_WMS', width: 100 }
    ];

    this.gridColumnsDefinition["sitHRDepartments4Cust"] =  [
      { headerName: 'Identyfikator', field: 'HRDepartmentIdent', width: 150 },
      { headerName: 'Nazwa', field: 'HRDepartmentName', width: 200 },
    ];

    this.gridColumnsDefinition["sitHRParams4Invoicing"] = [
      { headerName: 'Od dnia', field: 'DateFrom', autoHeight: true, width: 100, sort: 'desc',suppressMenu: true, renderType: "date"}, // domyslny format yyyy-MM-dd - mozna przeciazyc przez np. renderFormat: "yyyy-MM-dd"
      { headerName: 'Składnik', field: 'PayrollComponentName', width: 110, sort: 'asc',suppressMenu: true, },
      { headerName: 'Rodzaj', field: 'MarkupKindName', width: 100,suppressMenu: true },
      { headerName: 'Próg', field: 'Threshold', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, sort: 'asc',suppressMenu: true},
      { headerName: 'Wartość', field: 'Value', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true,
        renderType: "number", renderFormat: '1.2-2'}, // domyslny format 1.2-2 - mozna przeciazyc przez np. renderFormat: 1.2-2"
      { headerName: 'Zawsze licz ZUS', field: 'AlwaysCalcZUS', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 110, renderType: "checkbox"},
      { headerName: 'Bez ZUS', field: 'ZUS', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: "checkbox"},
      { headerName: 'Rekr. klienta', field: 'CustRecr', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100,
        renderType: "checkbox"},
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

    ]
  }
}

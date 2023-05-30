import { Component, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-itel-cash-flow',
  templateUrl: './sit-itel-cash-flow.component.html',
  styleUrls: ['./sit-itel-cash-flow.component.scss'],
  host: {class: 'router-flex sit-itel-cash-flow-component'},
  encapsulation : ViewEncapsulation.None,
 
})
export class SitItelCashFlowComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){

    this.gridColumnsDefinition["sitItelCashFlow"] = [
      { headerName: 'Rok', field: 'Year', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false},
      { headerName: 'Miesiąc', field: 'Month', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false},
      { headerName: 'Tydzień roku', field: 'WeekNumberOfYear', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false},
      { headerName: 'Tydzień', field: 'Id', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, suppressMenu: true},
      { headerName: 'Od dnia.', field: 'DayFrom',width: 90, floatingFilter: false  },
      { headerName: 'Do dnia.', field: 'DayTo',width: 90,  floatingFilter: false  },
      { headerName: 'Saldo pocz.', field: 'BalanceStart', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 110, agr: "sum", resizable: true},
      { headerName: 'Przychody',
        children: [
          { headerName: 'Netto', field: 'SalesNet', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
          { headerName: 'VAT', field: 'SalesVAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
          { headerName: 'Brutto', field: 'SalesGross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
        ]
      },
      { headerName: 'Koszty',
        children: [
          { headerName: 'Netto', field: 'CostNet', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
          { headerName: 'VAT', field: 'CostVAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
          { headerName: 'Brutto', field: 'CostGross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
        ]
      },
      { headerName: 'Saldo końc.', field: 'BalanceEnd', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 110, agr: "sum", resizable: true},

    ];

    this.gridColumnsDefinition["sitItelCashFlowSales"] = [
      { headerName: 'Klient', field: 'CustName',tooltipField: 'CustName', width: 300,},
      { headerName: 'RD', field: 'DocumentIdent', tooltipField: 'DocumentName', headerTooltip: 'Rodzaj dowodu', width: 60,},
      { headerName: 'Numer', field: 'DocumentNumber', width: 120,},
        { headerName: 'Data sprz.', field: 'SalesDate',width: 90, suppressMenu: true, floatingFilter: false, resizable: true},
        { headerName: 'Data płat.', field: 'PaymentDate',width: 90, suppressMenu: true, floatingFilter: false, resizable: true},
      { headerName: 'Netto', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
      { headerName: 'VAT', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
    ];

    this.gridColumnsDefinition["sitItelCashFlowCosts"] = [
      { headerName: 'Klient', field: 'CustName',tooltipField: 'CustName', width: 300,},
      { headerName: 'RD', field: 'OfficeDocIdent', tooltipField: 'OfficeDocName', headerTooltip: 'Rodzaj dowodu', width: 60,},
      { headerName: 'Numer', field: 'DocumentNumber', width: 120,},
      { headerName: 'Data sprz.', field: 'SalesDate',width: 90, suppressMenu: true, floatingFilter: false, resizable: true},
      { headerName: 'Data płat.', field: 'PaymentDate',width: 90, suppressMenu: true, floatingFilter: false, resizable: true},
      { headerName: 'Netto', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
      { headerName: 'VAT', field: 'VAT', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, agr: "sum", resizable: true},
    ];    
  };
}

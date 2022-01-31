import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-analysis-bank-statement-pos',
  templateUrl: './sit-analysis-bank-statement-pos.component.html',
  styleUrls: ['./sit-analysis-bank-statement-pos.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAnalysisBankStatementPosComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitAnalysisBankStatementPos"] = [
      { headerName: 'Bank', field: 'BankStatementIdent', filter: 'agTextColumnFilter', width: 100,
        rowGroup: true, enableRowGroup: true, enablePivot: true},
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100,
        rowGroup: true, enableRowGroup: true, enablePivot: true },
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Data', field: 'BankStatementDate', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true },
      { headerName: 'Rok-miesiąc', field: 'YearMonth', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true  },
      { headerName: 'Kwota', field: 'Amount', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn',
        aggFunc: "sum"},
      { headerName: 'Kwota +', field: 'AmountIn', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn',
        aggFunc: "sum"},
      { headerName: 'Kwota -', field: 'AmountOut', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn',
        aggFunc: "sum"},
    ];

   }
}

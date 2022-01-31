import { Component, Inject, LOCALE_ID} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-analysis-bank-statement-pos',
  templateUrl: './sit-analysis-bank-statement-pos.component.html',
  styleUrls: ['./sit-analysis-bank-statement-pos.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAnalysisBankStatementPosComponent extends SitDictBaseComponent {
  public defaultColDef;
  public  autoGroupColumnDef;
  public pivotRowTotals;
  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale)
      this.defaultColDef = {
        flex: 0,
        minWidth: 120,  
        sortable: true,
        resizable: true,
      };
      this.autoGroupColumnDef = { 
        minWidth: 300, 
        pinned: 'left',
        sort: 'asc'
      };
      //this.pivotRowTotals = 'after';
    };

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitAnalysisBankStatementPos"] = [
      { headerName: 'Bank', field: 'BankStatementIdent', filter: 'agTextColumnFilter', width: 100,
        rowGroup: true, enableRowGroup: true, enablePivot: true },
      { headerName: 'Kontrahent', field: 'CustIdent4Group', filter: 'agTextColumnFilter', width: 100,
        rowGroup: true, enableRowGroup: true, enablePivot: true },
      { headerName: 'Logo', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100 },          
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data', field: 'BankStatementDate', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Opis dokumentu', field: 'PositionDescription', filter: 'agTextColumnFilter', width: 300, defaultVisibility: false },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true },  
      { headerName: 'Rok-miesiąc', field: 'YearMonth', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true  },  
      { headerName: 'Wpływy', field: 'AmountIn', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn',
        aggFunc: "sum", enableValue: true },          
      { headerName: 'Wydatki', field: 'AmountOut', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn',
        aggFunc: "sum", enableValue: true },
      { headerName: 'Różnica', field: 'Amount', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn', 
        enableValue: true },  
    ];
 
   }
}

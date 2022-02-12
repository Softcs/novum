import { Component, Inject, LOCALE_ID} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-pub-print-cost-analysis',
  templateUrl: './sit-pub-print-cost-analysis.component.html',
  styleUrls: ['./sit-pub-print-cost-analysis.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubPrintCostAnalysisComponent extends SitDictBaseComponent {
  public defaultColDef;
  public autoGroupColumnDef;
  public pivotRowTotals;
  public pivotColumnGroupTotals;

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
        minWidth: 400, 
        pinned: 'left',
        sort: 'asc'
      };
      this.pivotRowTotals = 'after';
      this.pivotColumnGroupTotals = 'before';
    };

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPubPrintCostAnalysis"] = [
      { headerName: 'Drukarnia', field: 'CustIdent4Group', filter: 'agTextColumnFilter', width: 300,
        rowGroup: true, enableRowGroup: true, enablePivot: true },
      { headerName: 'Logo', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100 },        
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Projekt', field: 'ProjectIdent4Group', filter: 'agTextColumnFilter', width: 300,
        rowGroup: true, enableRowGroup: true, enablePivot: true },      
      { headerName: 'Symbol', field: 'ProjectIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Tytuł', field: 'ProjectName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data', field: 'DocumentDate', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Opis dokumentu', field: 'DocumentDescription', filter: 'agTextColumnFilter', width: 200, defaultVisibility: false },
      { headerName: 'Numer dokumentu', field: 'DocumentNumberExt', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true },  
      { headerName: 'Rok-miesiąc', field: 'YearMonth', filter: 'agTextColumnFilter', width: 100,
        enablePivot: true },  
      { headerName: 'Kwota', field: 'Net', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn', 
        aggFunc: 'sum', enableValue: true },
      { headerName: 'Ilość (PW)', field: 'Quantity', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn', 
        aggFunc: 'sum', enableValue: true },
    ];
 
   }
}
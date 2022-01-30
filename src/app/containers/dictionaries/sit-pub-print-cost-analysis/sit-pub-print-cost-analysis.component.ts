import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-pub-print-cost-analysis',
  templateUrl: './sit-pub-print-cost-analysis.component.html',
  styleUrls: ['./sit-pub-print-cost-analysis.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubPrintCostAnalysisComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPubPrintCostAnalysis"] = [
      { headerName: 'Drukarnia', field: 'CustIdent', filter: 'agTextColumnFilter', width: 300,
        rowGroup: "true", enableRowGroup: "true", enablePivot: "true" },
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Projekt', field: 'ProjectIdent', filter: 'agTextColumnFilter', width: 300,
        rowGroup: "true", enableRowGroup: "true", enablePivot: "true" },      
      { headerName: 'Tytuł', field: 'ProjectName', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Data', field: 'DocumentDate', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100,
        pivot: "true", enablePivot: "true" },  
      { headerName: 'Rok-miesiąc', field: 'YearMonth', filter: 'agTextColumnFilter', width: 100,
        pivot: "true", enablePivot: "true" },  
      { headerName: 'Kwota', field: 'Net', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', 
        aggFunc: "sum"}        
    ];
 
   }
}
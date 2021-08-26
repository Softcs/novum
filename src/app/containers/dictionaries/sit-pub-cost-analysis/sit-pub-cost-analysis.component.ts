import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';

@Component({
  selector: 'app-sit-pub-cost-analysis',
  templateUrl: './sit-pub-cost-analysis.component.html',
  styleUrls: ['./sit-pub-cost-analysis.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubCostAnalysisComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPubCostAnalysis"] = [
      { headerName: 'Konto', field: 'Account', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false  },
      { headerName: 'Grupa kosztów', field: 'GroupDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Okres 01', field: 'P01', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 02', field: 'P02', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 03', field: 'P03', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 04', field: 'P04', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 05', field: 'P05', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 06', field: 'P06', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 07', field: 'P07', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 08', field: 'P08', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 09', field: 'P09', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 10', field: 'P10', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 11', field: 'P11', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Okres 12', field: 'P12', filter: 'agTextColumnFilter', width: 100, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Suma', field: 'PSUM', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn', agr: 'sum',
      cellStyle: function(params) { return {backgroundColor: '#cce6ff'} } }
    ];

    this.gridColumnsDefinition["sitPubCostAnalysisDetails"] = [
      { headerName: 'Grupa kosztów', field: 'GroupDesc', filter: 'agTextColumnFilter', width: 300, defaultVisibility: false  },
      { headerName: 'Kwota', field: 'Amount', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn', agr: 'sum' },
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa kontrahenta', field: 'CustName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Numer dokumentu', field: 'DocumentNumber', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Numer zewnętrzny', field: 'DocumentExtNumber', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Data', field: 'DocumentDate', width: 100,},      
      { headerName: 'Opis dokumentu', field: 'DocumentDesc', filter: 'agTextColumnFilter', width: 400 },
      { headerName: 'Konto', field: 'Account', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false  },
      { headerName: 'DP', field: 'DP', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false  },
      { headerName: 'KD', field: 'KD', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false  },
      { headerName: 'WD', field: 'WD', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false  },
      { headerName: 'Projekt', field: 'ProjectIdent', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false  },
      { headerName: 'ExtAppIdent01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false  },
    ]    
   }
}
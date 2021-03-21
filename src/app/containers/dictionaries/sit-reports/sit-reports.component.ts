import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-reports',
  templateUrl: './sit-reports.component.html',
  styleUrls: ['./sit-reports.component.scss'],
  host: {class: 'router-flex'}
})
export class SitReportsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitReports"] = [
      { headerName: 'Identyfikator', field: 'ReportIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'ReportName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Plik wydruku', field: 'ReportFileName', filter: 'agTextColumnFilter', width: 300 }
    ];
    this.gridColumnsDefinition["sitDocumentsTypesReports"] = [
      { headerName: 'Dokument', field: 'DocumentIdent', width: 150,},
      { headerName: 'Opis dokumentu', field: 'DocumentName', width: 300,},
      { headerName: 'Domyślny', field: 'IsDefault', width: 100, renderType: 'checkbox'}
    ];
    this.gridColumnsDefinition["sitDictionaryReports"] = [
      { headerName: 'Słownik', field: 'DictionaryIdent', width: 150 },
      { headerName: 'Opis słownika', field: 'DictionaryName', width: 300 },
      { headerName: 'Kolejność', field: 'Order', width: 100 },
      { headerName: 'Domyślny', field: 'IsDefault', width: 100, renderType: 'checkbox'}
    ]
   }
}

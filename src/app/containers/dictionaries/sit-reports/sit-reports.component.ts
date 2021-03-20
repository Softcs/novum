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
    ]
   }
}

import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-rail-dns',
  templateUrl: './sit-rail-dns.component.html',
  styleUrls: ['./sit-rail-dns.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRailDnsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitRailDns"] = [
      { headerName: 'CompanyIdent', field: 'CompanyIdent', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'ConnectionDescription', field: 'ConnectionDescription', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'IsActive', field: 'IsActive', width: 80, renderType: 'checkbox'}, 
      { headerName: 'ClientGuid', field: 'ClientGuid', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'ServerName', field: 'ServerName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'ConnectionString', field: 'ConnectionString', filter: 'agTextColumnFilter', width: 400 },
      { headerName: 'LastActiveDate', field: 'LastActiveDate', filter: 'agTextColumnFilter', width: 150, renderType: "date", renderFormat: "yyyy-MM-dd H:mm:ss" },
      { headerName: 'CheckLastActive', field: 'CheckLastActive', width: 80, renderType: 'checkbox'},
    ]
   }
}

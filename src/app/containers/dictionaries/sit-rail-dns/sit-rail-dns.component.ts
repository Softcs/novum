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
      { headerName: 'Id', field: 'sitRailDnsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitRailDnsG', width: 100, defaultVisibility: false},      
      { headerName: 'Id firmy', field: 'CompanyIdent', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Opis połączenia', field: 'ConnectionDescription', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Aktywny', field: 'IsActive', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered"}, 
      { headerName: 'ClientGuid', field: 'ClientGuid', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Serwer', field: 'ServerName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'ConnectionString', field: 'ConnectionString', filter: 'agTextColumnFilter', width: 400 },
      { headerName: 'Data ostatniej aktywności', field: 'LastActiveDate', filter: 'agTextColumnFilter', width: 180, renderType: "date", renderFormat: "yyyy-MM-dd H:mm:ss" },
      { headerName: 'Sprawdzaj aktywność', field: 'CheckLastActive', width: 160, renderType: 'checkbox', cellClass: "grid-cell-centered"},
    ]

    this.gridColumnsDefinition["sitWSUsers"] = [
      { headerName: 'Id', field: 'sitWSUsersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitWSUsersG', width: 100, defaultVisibility: false},      
      { headerName: 'Użytkownik', field: 'UserLogin', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Id firmy', field: 'CompanyIdent', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa firmy', field: 'CompanyDescription', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Aktywny', field: 'IsActive', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered"}, 
    ]

  }
}

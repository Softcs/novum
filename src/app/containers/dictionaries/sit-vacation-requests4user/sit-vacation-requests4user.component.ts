import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-vacation-requests4user',
  templateUrl: './sit-vacation-requests4user.component.html',
  styleUrls: ['./sit-vacation-requests4user.component.scss'],
  host: {class: 'router-flex'}
})
export class SitVacationRequests4UserComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitVacationRequests4User"] = [
      { headerName: 'Nazwisko', field: 'EmployeeName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data wniosku', field: 'Date', width: 130, renderType: 'date', renderFormat: 'yyy-mm-dd HH:mm'},
      { headerName: 'Rodzaj urlopu', field: 'AbsenceName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Od dnia', field: 'DateFrom', width: 100, renderType: 'date'},
      { headerName: 'Do dnia', field: 'DateTo', width: 100, renderType: 'date'},
      { headerName: 'Dni', field: 'DaysCount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, suppressMenu: true },
      { headerName: 'Zastępca', field: 'ReplacmentEmployeeName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Akcept. przełożonego', field: 'ValueName_SupAccept', filter: 'agTextColumnFilter', width: 150, suppressMenu: true },
      { headerName: 'Akcept. zastępcy', field: 'ValueName_RepAccept', filter: 'agTextColumnFilter', width: 150, suppressMenu: true },
      { headerName: 'Opis', field: 'Description', tooltipField: 'Description', filter: 'agTextColumnFilter', width: 200},
    ];
  }
}

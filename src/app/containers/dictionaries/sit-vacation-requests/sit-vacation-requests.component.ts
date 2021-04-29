import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-vacation-requests',
  templateUrl: './sit-vacation-requests.component.html',
  styleUrls: ['./sit-vacation-requests.component.scss'],
  host: {class: 'router-flex'}
})
export class SitVacationRequestsComponent  extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitVacationRequests"] = [
      { headerName: 'Nazwisko', field: 'EmployeeName', filter: 'agTextColumnFilter', width: 200, },
      { headerName: 'Data wniosku', field: 'Date', width: 130, renderType: 'date', renderFormat: 'yyyy-MM-dd HH:mm'},
      { headerName: 'Rodzaj urlopu', field: 'AbsenceName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Od dnia', field: 'DateFrom', width: 100, renderType: 'date'},
      { headerName: 'Do dnia', field: 'DateTo', width: 100, renderType: 'date'},
      { headerName: 'Dni', field: 'DaysCount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, suppressMenu: true },
      { headerName: 'Akcept. przełożonego', field: 'ValueName_SupAccept', filter: 'agTextColumnFilter', width: 150, suppressMenu: true,
        cellRenderer: function(params) {
          return (params.data["ValueName_SupAccept"] === "Zaakceptowany" ? '<span style="color: green;">' : '<span>') +'<b>' + params.value + '</b></span>'
            + '<br><span style="color: dimgray;">' + (!params.data["SuperiorEmployeeName"] ? '' : params.data["SuperiorEmployeeName"])  + '</span>';
        }
      },
      { headerName: 'Akcept. zastępcy', field: 'ValueName_RepAccept', filter: 'agTextColumnFilter', width: 150, suppressMenu: true,
        cellRenderer: function(params) {
          return (params.data["ValueName_RepAccept"] === "Zaakceptowany" ? '<span style="color: green;">' : '<span>') + '<b>' + params.value + '</b></span>'
          + '<br><span style="color: dimgray;">' + (!params.data["ReplacementEmployeeName"] ? '' : params.data["ReplacementEmployeeName"])  + '</span>';
        }
      },
      { headerName: 'Opis', field: 'Description', tooltipField: 'Description', filter: 'agTextColumnFilter', width: 200},
    ];
  }
}

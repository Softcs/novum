import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { DataSetWrapper } from '@app/_models/dataSetWrapper';

@Component({
  selector: 'app-sit-vacation-requests',
  templateUrl: './sit-vacation-requests.component.html',
  styleUrls: ['./sit-vacation-requests.component.scss'],
  host: {class: 'router-flex'}
})
export class SitVacationRequestsComponent  extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitVacationRequests"] = [
      { headerName: 'Nazwisko', field: 'EmployeeName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data wniosku', field: 'Date', width: 130, renderType: 'date', renderFormat: 'yyyy-MM-dd HH:mm', sort: 'desc'},
      { headerName: 'Rodzaj urlopu', field: 'AbsenceName', tooltipField: 'AbsenceName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Od dnia', field: 'DateFrom', width: 100, renderType: 'date'},
      { headerName: 'Do dnia', field: 'DateTo', width: 100, renderType: 'date'},
      { headerName: 'Dni', field: 'DaysCount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, suppressMenu: true },
      { headerName: 'Na żądanie', field: 'OnDemand', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true, renderType:'checkbox' },
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
      { headerName: 'Opis', field: 'Description', tooltipField: 'Description', filter: 'agTextColumnFilter', wrapText: true, width: 250},
    ];
  }

  getPrintout() {
    //generuje wydruk w nowej zakładce
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitVacationRequests');
    var url = this.urlService.getSecureRepUrl(
        '70F1D169-5210-C62A-675F-AD0B0DD3CA46',
        'dict',
        '9069CE97-3F9D-29A4-BD1D-321C12B51E49',
        'sitVacationRequestsId=' + dataSourceResponseWrapper.activeRow['sitVacationRequestsId']);

    window.open(url, '','height=700, width=1400, left=100,top=100');

  }
}

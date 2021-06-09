import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { DataSetWrapper } from '@app/_models/dataSetWrapper';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-vacation-requests',
  templateUrl: './sit-vacation-requests.component.html',
  styleUrls: ['./sit-vacation-requests.component.scss'],
  host: {class: 'router-flex'}
})
export class SitVacationRequestsComponent  extends SitDictBaseComponent {

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
    }

  public prepareColumnsDefinitnion() {
    var locale = this.locale;

    this.gridColumnsDefinition["sitVacationRequests"] = [
      { headerName: 'Pracownik', field: 'EmployeeName', filter: 'agTextColumnFilter', width: 200,
        cellRenderer: function(params) {
          return ('<span><b>' + params.value + '</b></span>'
            + '<br><span style="color: dimgray;">' + formatDate(params.data["Date"], 'yyyy-MM-dd HH:mm', locale) + '</span>')
        }
      },
      { headerName: 'Rodzaj urlopu', field: 'AbsenceName', tooltipField: 'AbsenceName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Okres', field: 'DateFrom', width: 100,
        cellRenderer: function(params) {
          return ('<span>' + formatDate(params.value, 'yyyy-MM-dd', locale) + '</span>'
            + '<br><span>' + formatDate(params.data["DateTo"], 'yyyy-MM-dd', locale) + '</span>')
        }
      },
      //{ headerName: 'Do dnia', field: 'DateTo', width: 100, renderType: 'date'},
      { headerName: 'Dni', field: 'DaysCount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, suppressMenu: true },
      { headerName: 'Na żądanie', field: 'OnDemand', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true, renderType:'checkbox' },
      { headerName: 'Akcept. przełożonego', field: 'ValueName_SupAccept', filter: 'agTextColumnFilter', width: 160, suppressMenu: true,
        cellRenderer: function(params) {
          return (params.data["ValueName_SupAccept"] === "Zaakceptowany" ? '<span style="color: green;">' : '<span>') +'<b>' + params.value + '</b></span>'
            + '<br><span style="color: dimgray;">' + (!params.data["SuperiorEmployeeName"] ? '' : params.data["SuperiorEmployeeName"])  + '</span>';
        }
      },
      { headerName: 'Akcept. zastępcy', field: 'ValueName_RepAccept', filter: 'agTextColumnFilter', width: 160, suppressMenu: true,
        cellRenderer: function(params) {
          return (!params.data["ReplacementEmployeeName"] ? '' : (params.data["ValueName_RepAccept"] === "Zaakceptowany" ? '<span style="color: green;">'
            : '<span>') + '<b>' + params.value + '</b></span>' + '<br><span style="color: dimgray;">' +  params.data["ReplacementEmployeeName"]  + '</span>')
        }
      },
      { headerName: 'Opis', field: 'Description', tooltipField: 'Description', filter: 'agTextColumnFilter', wrapText: true, width: 250},
      { headerName: 'Wydrukowany', field: 'Printed', type: 'numericColumn', tooltipField: 'PrintInfo', filter: 'agNumberColumnFilter', width: 100, suppressMenu: true, renderType:'checkbox' },
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

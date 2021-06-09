import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-vacation-requests4user',
  templateUrl: './sit-vacation-requests4user.component.html',
  styleUrls: ['./sit-vacation-requests4user.component.scss'],
  host: {class: 'router-flex'}
})
export class SitVacationRequests4UserComponent extends SitDictBaseComponent {

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
    }

  public prepareColumnsDefinitnion() {
    var locale = this.locale;

    this.gridColumnsDefinition["sitVacationRequests4User"] = [
      { headerName: 'Pracownik', field: 'EmployeeName', filter: 'agTextColumnFilter', width: 200,
        cellRenderer: function(params) {
          return ('<span><b>' + params.value + '</b></span>'
            + '<br><span style="color: dimgray;">' + formatDate(params.data["Date"], 'yyyy-MM-dd HH:mm', locale) + '</span>')
        }
      },
      { headerName: 'Rodzaj urlopu', field: 'AbsenceName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Okres', field: 'DateFrom', width: 100,
        cellRenderer: function(params) {
          return ('<span>' + formatDate(params.value, 'yyyy-MM-dd', locale) + '</span>'
            + '<br><span>' + formatDate(params.data["DateTo"], 'yyyy-MM-dd', locale) + '</span>')
        }
      },
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
      // { headerName: 'Zastępca', field: 'ReplacmentEmployeeName', filter: 'agTextColumnFilter', width: 200 },
      //  { headerName: 'Akcept. przełożonego', field: 'ValueName_SupAccept', filter: 'agTextColumnFilter', width: 150, suppressMenu: true },
      //  { headerName: 'Akcept. zastępcy', field: 'ValueName_RepAccept', filter: 'agTextColumnFilter', width: 150, suppressMenu: true },
      { headerName: 'Opis', field: 'Description', tooltipField: 'Description', filter: 'agTextColumnFilter', width: 200},
    ];
  }
}

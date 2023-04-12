import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pulpit',
  templateUrl: 'sit-pulpit.component.html',
  styleUrls: ['sit-pulpit.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'router-flex sit-pulpit-component-container'}
})
export class SitPulpitComponent  extends SitDictBaseComponent {
  appVersion = environment.appVersion;
  rowClassRules: any;

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
    }

  get serverVersion() {
    return this.gatewayService.serverVersion;
  }

  public prepareColumnsDefinitnion() {
    var locale = this.locale;

    this.rowClassRules = {
      'workday': 'data.DayOff === 0',
      'dayoff': 'data.DayOff === 1',
      'today': 'data.Today === 1'

    }

    this.gridColumnsDefinition["sitAttendanceList4User"] = [
      { headerName: 'Data', field: 'Date', suppressMenu: true, sort: 'asc', width: 100 },
      { headerName: 'Dzień', field: 'DayNameOfWeek', suppressMenu: true, width: 100},
      { headerName: 'Obecny', field: 'Present', suppressMenu: true, width: 80, renderType: 'checkbox', cellClass: "grid-cell-centered"},
      { headerName: 'Powód nieob.', field: 'AbsenceName', suppressMenu: true, flex: 1 },
    ],

    this.gridColumnsDefinition["sitVacationRequests4Accept"] = [
      { headerName: 'Pracownik', field: 'EmployeeName', tooltipField: 'EmployeeName', filter: 'agTextColumnFilter', width: 170,
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
      { headerName: 'Dni', field: 'DaysCount', suppressMenu: true, width: 60 },
      { headerName: 'Zastępca', field: 'ReplacmentEmployeeName', suppressMenu: true, width: 200 },
    ],

    this.gridColumnsDefinition["sitEmployeeContacts"] = [
      { headerName: "LP", valueGetter: "node.rowIndex + 1", width: 40, },
      { headerName: 'Pracownik', field: 'email', tooltipField: 'HRCompanyHierarchyDesc', filter: 'agTextColumnFilter', width: 250,
        cellRenderer: function(params) {
          return ('<span><b>' + (params.data["EmployeeName"] ? params.data["EmployeeName"] : '')  + '</b></span>'
            + '<br><span style="color: dimgray;">' + (params.data["email"] ? '<a href=mailto:'+params.data["email"]+'>'+params.data["email"]+'</a>' : '') + '</span>')
        }
      },
      { headerName: 'Telefon', field: 'PhoneNumber', flex: 1,
        cellRenderer: function(params) {
          return '<table style="width:100%"><tr>'
              + '<td style="width:30%">&nbsp;' + (params.value ? '<img src="assets/phone-small.png" /> ' + params.value : '')  + '</td>'
              + '<td style="width:70%">&nbsp;' + (params.data["MobileNumber"] ? '<img src="assets/mobile-phone-small.png" /> ' + params.data["MobileNumber"] : '') +'</td>'
            + '</tr>'
            + '<tr><td colspan="2"><b>' + (params.data["HRCompanyHierarchyDesc"] ? params.data["HRCompanyHierarchyDesc"] : '') + '</b></td></tr></table>'
        }
      },
      { headerName: 'sortOrder', field: 'EmployeeName', suppressMenu: true, width: 60, sort: 'asc', defaultVisibility: false },      
    ]    
  }
}

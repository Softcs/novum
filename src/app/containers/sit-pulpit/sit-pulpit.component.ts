import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pulpit',
  templateUrl: 'sit-pulpit.component.html',
  styleUrls: ['sit-pulpit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPulpitComponent  extends SitDictBaseComponent {
  appVersion = environment.appVersion;
  rowClassRules;

  get serverVersion() {
    return this.gatewayService.serverVersion;
  }

  public prepareColumnsDefinitnion() {
    this.rowClassRules = {
      'workday': 'data.DayOff === 0',
      'dayoff': 'data.DayOff === 1',
      'today': 'data.Today === 1'

    }

    this.gridColumnsDefinition["sitAttendanceList4User"] = [
      { headerName: 'Data', field: 'Date', suppressMenu: true, sort: 'asc', width: 100 },
      { headerName: 'Dzień', field: 'DayNameOfWeek', suppressMenu: true, width: 100},
      { headerName: 'Obecny', field: 'Present', suppressMenu: true, width: 80, renderType: 'checkbox' },
      { headerName: 'Powód nieob.', field: 'AbsenceName', suppressMenu: true, flex: 1 },
    ],

    this.gridColumnsDefinition["sitVacationRequests4Accept"] = [
      { headerName: 'Pracownik', field: 'EmployeeName', suppressMenu: true, width: 200 },
      { headerName: 'Data wniosku', field: 'Date', suppressMenu: true, width: 130, renderType: 'date', renderFormat:'yyyy-MM-dd HH:mm' },
      { headerName: 'Od dnia', field: 'DateFrom', suppressMenu: true, width: 100 },
      { headerName: 'Do dnia', field: 'DateTo', suppressMenu: true, width: 100 },
      { headerName: 'Dni', field: 'DaysCount', suppressMenu: true, width: 60 },
      { headerName: 'Zastępca', field: 'ReplacmentEmployeeName', suppressMenu: true, width: 200 },
      ]
    }
}

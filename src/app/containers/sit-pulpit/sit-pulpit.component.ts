import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
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
export class SitPulpitComponent {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  popupParent;
  columnDefs;
  excelStyles;
  frameworkComponents;
  rowClassRules;

  loading = false;
  users: User[];
  appVersion = environment.appVersion;

  get serverVersion() {
    return this.gatewayService.serverVersion;
  }

  constructor(
    private gatewayService: GatewayService
    ) {
      this.popupParent = document.querySelector('body');
      this.excelStyles = sitGlobalConfig.excelStyles;
      this.frameworkComponents = sitGlobalConfig.frameworkComponents;
      this.rowClassRules = {
        'today': 'data.Today === 1',
        'dayoff': 'data.DayOff === 1'
      }

      this.columnDefs = [
        { headerName: 'Data', field: 'Date', type: 'dateColumn', suppressMenu: true, sort: 'asc', width: 100 },
        { headerName: 'Dzień', field: 'DayNameOfWeek', suppressMenu: true, width: 100},
        { headerName: 'Obecny', field: 'Present', cellRenderer: 'gridCheckboxRenderer', suppressMenu: true, width: 80 },
        { headerName: 'Powód nieob.', field: 'AbsenceName', suppressMenu: true, flex: 1 },


      ]
    }
}

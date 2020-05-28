import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DataSourceResponseWrapper } from '@app/_models';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as $ from 'jquery';

@Component({
    selector: 'sit-rail-configurations',
    templateUrl: 'sit-rail-configurations.component.html',
    styleUrls: ['sit-rail-configurations.component.scss'],
    host: {class: 'router-flex'}
})
export class SitRailConfigurationsComponent implements OnInit {
  @ViewChild('sit-rail-configurations') menuTable: DatatableComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChild('sitRailConfigurations') table: any;

  sitRailConfigurationsSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() {

  }

  ngOnInit() {
  }

  displayCheck(row) {
    return row.name !== 'xxx';
  }

  onActivateRailConfigurations(event) {
    if (event.type == 'click') {
      const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitRailConfigurations");
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }

  onSelectRailConfigurations({ selected }) {
    this.sitRailConfigurationsSelected.splice(0, this.sitRailConfigurationsSelected.length);
    this.sitRailConfigurationsSelected.push(...selected);
  }

  toggleExpandRow(row) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitRailConfigurations");
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    //console.log('Detail Toggled', event);
  }
}

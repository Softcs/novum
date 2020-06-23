import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DataSetWrapper } from '@app/_models';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { Guid } from "guid-typescript";
import { SitRailConfigurationsEditComponent } from './../sit-rail-configurations/actions/sit-rail-configurations-edit';

@Component({
    selector: 'sit-rail-configurations',
    templateUrl: 'sit-rail-configurations.component.html',
    styleUrls: ['sit-rail-configurations.component.scss'],
    host: {class: 'router-flex'}
})
export class SitRailConfigurationsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChild('sitRailConfigurations') table: any;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  sitRailConfigurationsSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor(
    private tabService: TabService,
  ) {

  }

  ngOnInit() {
  }

  displayCheck(row) {
    return row.name !== 'xxx';
  }

  onActivateRailConfigurations(event) {
    if (event.type == 'click') {
      const dataSetResponseWrapper: DataSetWrapper =
        this.dictContainer.DataSetManager.getDateSourceWrapper("sitRailConfigurations");
      dataSetResponseWrapper.SetActiveRow(event.row);
    }
  }

  onSelectRailConfigurations({ selected }) {
    this.sitRailConfigurationsSelected.splice(0, this.sitRailConfigurationsSelected.length);
    this.sitRailConfigurationsSelected.push(...selected);
  }

  toggleExpandRow(row) {
    const dataSourceResponseWrapper: DataSetWrapper =
      this.dictContainer.DataSetManager.getDateSourceWrapper("sitRailConfigurations");
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {

  }

  get activeRowRailConfigurations() {
    return this.dictContainer?.activeRow('sitRailConfigurations');
  }

  new() {
    const dataSourceResponseWrapper: DataSetWrapper =
      this.dictContainer.DataSetManager.getDateSourceWrapper("sitRailConfigurations");
    const newGuid = Guid.create();
    const row = dataSourceResponseWrapper.GenerateRow();

    row['sitRailConfigurationsG'] = newGuid.toString();
    row['IsActive'] = 1;

    this.tabService.addTab(new Tab(
      'sitRailConfigurationsEdit', 'sitRailConfigurationsEdit',
      'Konfiguracja Rail - Nowy', { parent: 'AppComponent',
      guid: row['sitRailConfigurationsG'],
      senderObject: this.getSenderObject(row) }));
  }

  edit() {
    const dataSourceResponseWrapper: DataSetWrapper =
        this.dictContainer.DataSetManager.getDateSourceWrapper("sitRailConfigurations");
    const row = dataSourceResponseWrapper.GenerateRow(dataSourceResponseWrapper.activeRow);
    this.tabService.addTab(
      new Tab(
        'sitRailConfigurationsEdit','sitRailConfigurationsEdit',
        'Konfiguracja Rail - Edycja' , { parent: 'AppComponent',
        guid: row['sitRailConfigurationsG'],
        senderObject: this.getSenderObject(row) }));
  }

  private getSenderObject(activeRow: any) {
    const sender = {};
    const dataSets = {};
    dataSets["sitRailConfigurationsEdit"] = {
      'activeRow': activeRow
    };
    sender["dataSets"] = dataSets;
    return sender;
  }

}

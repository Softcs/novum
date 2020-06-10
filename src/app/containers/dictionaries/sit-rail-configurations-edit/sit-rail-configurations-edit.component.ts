import { Guid } from 'guid-typescript';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';
import { AgFilterComponent } from 'ag-grid-angular';
@Component({
  selector: 'app-sit-rail-configurations-edit',
  templateUrl: './sit-rail-configurations-edit.component.html',
  styleUrls: ['./sit-rail-configurations-edit.component.scss']
})
export class SitRailConfigurationsEditComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  constructor(
    private tabService: TabService,
  ) { }

  ngOnInit(): void {
    //console.log(this.tabService.tabs[this.tabService.tabs.findIndex(tab => tab.active)].tabData)
  }

  get activeRowRailConfigurations() {
    return this.dictContainer?.activeRow('sitRailConfigurationsEdit');
  }

  refreshAfter(dataSourceManager)  {
    let tabIndex = this.tabService.tabs.findIndex(tab => tab.active);
    //console.log(this.tabService.tabs[tabIndex].tabData.activeRow);
    dataSourceManager.getDateSourceWrapper('sitRailConfigurationsEdit').activeRow = this.tabService.tabs[tabIndex].tabData.activeRow;
  }

  onChange(field, value) {
    //console.log('field',field,'value',value);
    const dataSourceResponseWrapper: DataSourceResponseWrapper =
    this.dictContainer.DataSourceManager.getDateSourceWrapper('sitRailConfigurationsEdit');

    dataSourceResponseWrapper.activeRow[field] = value;
    //console.log(dataSourceResponseWrapper.activeRow);
  }

}

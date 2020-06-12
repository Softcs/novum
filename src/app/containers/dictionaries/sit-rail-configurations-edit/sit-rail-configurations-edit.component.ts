import { Guid } from 'guid-typescript';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';
import { AgFilterComponent } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogDiscardComponent } from '@app/components/sit-dialog-discard';
@Component({
  selector: 'app-sit-rail-configurations-edit',
  templateUrl: './sit-rail-configurations-edit.component.html',
  styleUrls: ['./sit-rail-configurations-edit.component.scss']
})
export class SitRailConfigurationsEditComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  tabIndex: number;
  isChecked: boolean;

  constructor(
    private tabService: TabService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    //console.log(this.tabService.tabs[this.tabService.tabs.findIndex(tab => tab.active)].tabData)
      this.tabIndex = this.tabService.tabs.findIndex(tab => tab.active);
    //console.log(this.selectedTab)
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


  openDiscardDialog(): void {
    const dialogRef = this.dialog.open(SitDialogDiscardComponent, {
      width: '250px', height: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tabService.removeTab(this.tabIndex);
      }
    });
  }

  onSave(e) {
    console.log(e)
  }
}

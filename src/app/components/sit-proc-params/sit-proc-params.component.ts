import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { TabService } from '@app/_services/tab.service';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogDiscardComponent } from '@app/components/sit-dialog-discard';
import { SitDataSetContainerComponent } from '../sit-data-set-container';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { GatewayService } from '@app/_services';
import { TabData } from '@app/_models/tabdata';


@Component({
  selector: 'sit-proc-params',
  templateUrl: './sit-proc-params.component.html',
  styleUrls: ['./sit-proc-params.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProcParamsComponent implements OnInit, AfterViewInit {
  @ContentChildren(SitDataSetContainerComponent, { descendants: true })
  dataSetContainers !: QueryList<SitDataSetContainerComponent>;

  @Input() actionIdent;
  @Input() dictIdent: string;
  @Input() dataSourceIdent: string;
  @Input() senderObject = null;
  @Input() activeRow = null;
  @Output() activeRowChange = new EventEmitter<any[]>();

  tabIndex: number;
  public DataSetManager: DataSetManager;
  private dataSetManagerSource: DataSetManager;
  private mainDataSet: DataSetWrapper;
  constructor(
    private gatewayService: GatewayService,
    private tabService: TabService,
    public dialog: MatDialog,
  ) {
    this.DataSetManager = new DataSetManager(gatewayService);
  }

  ngOnInit(): void {
    this.tabIndex = this.tabService.tabs.findIndex(tab => tab.active);
  }

  getTabData(): TabData {
    const tabData = this.tabService.tabs[this.tabIndex].tabData;
    this.dataSetManagerSource = tabData?.dataSetManagerSource;
    console.log("tabData", tabData);
    return tabData;
  }

  prepareDataSet() {
    const tabData = this.getTabData();
    this.mainDataSet = this.DataSetManager.CreateDataSetWrapper(this.dataSourceIdent, this.dataSetManagerSource);
    const dataSourceDefinition = this.dataSetManagerSource.FindDataSource(this.dataSourceIdent);

    const activeRow = this.mainDataSet.GenerateRow(tabData.activeRow);
    this.mainDataSet.AddRow(activeRow);

    const dataSetContainer = this.DataSetManager.dataSetContainers.first;
    dataSetContainer.setDataSource(this.mainDataSet);
    this.activeRow = this.mainDataSet;
    this.activeRowChange.emit(this.activeRow);
  }


  ngAfterViewInit() {
    this.DataSetManager.dataSetContainers = this.dataSetContainers;
    this.prepareDataSet();
  }

  refreshAfter(dataSourceManager)  {
    // const dataSourceResponseWrapper: DataSetWrapper =
    //   this.dictContainer.DataSourceManager.getDateSourceWrapper(this.dataSourceIdent);

    // dataSourceManager.getDateSourceWrapper(this.dataSourceIdent).activeRow = this.tabService.tabs[this.tabIndex].tabData.activeRow;
    // this.activeRow =  this.tabService.tabs[this.tabIndex].tabData.activeRow;
    // this.activeRowChange.emit(this.activeRow);
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

  onSave(e: string) {
    if (e === 'OK') {
      this.tabService.removeTab(this.tabIndex);
    }
  }

  executeAction(): void {
    this.mainDataSet.ExecuteAction(this.actionIdent,
      this,
      this.executeActionCompletedCallback,
      this.executeActionExceptionCallback,
      this.dictIdent);
  }

  private executeActionCompletedCallback(self) {
    self.executing = false;
    self.tabService.removeTab(self.tabIndex);
  }

  private executeActionExceptionCallback(self) {
    self.executing = false;
  }
}

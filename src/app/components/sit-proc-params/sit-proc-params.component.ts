import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { TabService } from '@app/_services/tab.service';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogDiscardComponent } from '@app/components/sit-dialog-discard';
import { SitDataSetContainerComponent } from '../sit-data-set-container';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { GatewayService } from '@app/_services';
import { ActionExecuteData } from '@app/_models/actionExecuteData';


@Component({
  selector: 'sit-proc-params',
  templateUrl: './sit-proc-params.component.html',
  styleUrls: ['./sit-proc-params.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProcParamsComponent implements OnInit, AfterViewInit {
  @ContentChildren(SitDataSetContainerComponent, { descendants: true })
  dataSetContainers !: QueryList<SitDataSetContainerComponent>;

  @Input() dictIdent: string;
  @Input() actionExecuteData: ActionExecuteData  = null;
  @Input() activeRow = null;
  @Output() activeRowChange = new EventEmitter<any[]>();

  executing = false;
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

  getActionExecuteData(): ActionExecuteData {
    if (this.actionExecuteData) {
      return this.actionExecuteData;
    }
    const actionExecuteData = this.tabService.tabs[this.tabIndex].tabData;
    return actionExecuteData;
  }

  prepareDataSet() {
    this.actionExecuteData = this.getActionExecuteData();
    this.dataSetManagerSource = this.actionExecuteData.dataSetManagerSource;
    const dataSetContainer = this.DataSetManager.dataSetContainers.first;
    this.mainDataSet = this.DataSetManager.CreateDataSetWrapper(dataSetContainer.ident, this.dataSetManagerSource);
    this.mainDataSet.GenerateRow(this.actionExecuteData.activeRow);
    dataSetContainer.setDataSource(this.mainDataSet);
    this.activeRow = this.mainDataSet.activeRow;
    this.activeRowChange.emit(this.activeRow);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
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

  discard() {
    if (this.isExpanderOpenKind()) {
      this.close()
    } else {
      this.openDiscardDialog();
    }

  }

  private openDiscardDialog(): void {
    const dialogRef = this.dialog.open(SitDialogDiscardComponent, {
      width: '250px', height: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.close();
      }
    });
  }

  private isExpanderOpenKind() {
    return this.actionExecuteData.openKind === 'EXPANDER';
  }

  onSave(e: string) {
    if (e === 'OK') {
      this.close();
    }
  }

  executeAction(): void {
    this.executing = true;
    this.dataSetManagerSource.ExecuteAction(
      this.actionExecuteData.actionIdent,
      this.actionExecuteData.sourceDataSetIdent,
      this,
      this.executeActionCompletedCallback,
      this.executeActionExceptionCallback,
      this.dictIdent,
      this.mainDataSet);
  }

  private executeActionCompletedCallback(self) {
    self.executing = false;
    self.close(self.tabIndex);
  }

  private executeActionExceptionCallback(self) {
    self.executing = false;
  }

  private close() {
    if (this.isExpanderOpenKind()) {
      this.actionExecuteData.dataSetManagerSource.procExpander.Close(this.actionExecuteData);
    } else {
      this.tabService.removeTab(this.tabIndex);
    }
  }
}

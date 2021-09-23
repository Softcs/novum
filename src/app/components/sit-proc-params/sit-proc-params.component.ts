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
export class SitProcParamsComponent implements AfterViewInit {
  @ContentChildren(SitDataSetContainerComponent, { descendants: true })
  dataSetContainers !: QueryList<SitDataSetContainerComponent>;

  @Input() actionExecuteData: ActionExecuteData  = null;
  @Input() activeRow = null;
  @Output() activeRowChange = new EventEmitter<any[]>();

  private dataSetManagerSource: DataSetManager;
  private mainDataSet: DataSetWrapper;
  private sourceDataSet: DataSetWrapper;
  private tabIndex: number;
  public dictIdent: string;

  public executing = false;
  public saveDisabled = false;

  public dataSetManager: DataSetManager;

  constructor(
    gatewayService: GatewayService,
    private tabService: TabService,
    public dialog: MatDialog,
  ) {
    this.dataSetManager = new DataSetManager(gatewayService);
    
    this.tabService.activeTabIndex.subscribe( i => {
      if (!this.tabIndex) {
        this.tabIndex = i;
      }
    });
  }

  getActionExecuteData(): ActionExecuteData {
    if (this.actionExecuteData) {
      return this.actionExecuteData;
    }
    
    if (!this.tabIndex) {
      return null;
    }

    const actionExecuteData: ActionExecuteData = this.tabService.tabs[this.tabIndex].tabData;
    return actionExecuteData;
  }

  executInitProc(dataSetContainer: SitDataSetContainerComponent, row) {
    this.executing = true;
    this.dataSetManagerSource.ExecuteInitInfo(
        this.actionExecuteData.sourceDataSetIdent,
        this.actionExecuteData.actionIdent,
        row,
        (owner, initRow) => this.initInfoCompleted(owner,dataSetContainer, initRow),
        this.initInfoException,
        this
      );
  }
  
  initInfoCompleted(self, dataSetContainer, initRow) {
    self.executing = false;
    self.connectDataSetToControls(dataSetContainer, initRow)
  }

  initInfoException(self) {
    self.executing = false;
  }

  connectDataSetToControls(dataSetContainer: SitDataSetContainerComponent, initRow) { 
    this.mainDataSet.initRowByInitRow(initRow, this.mainDataSet.activeRow);
    dataSetContainer.setDataSource(this.mainDataSet);
    dataSetContainer.prepareControls(null);
    this.executing = false;
    this.activeRow = this.mainDataSet.activeRow;
    this.activeRowChange.emit(this.activeRow);
    this.connectToFilesButton();    
  }

  prepareDataSet() {
    this.actionExecuteData = this.getActionExecuteData();
    this.dictIdent = this.actionExecuteData?.dataSetManagerSource?.dictIdent;
    this.dataSetManagerSource = this.actionExecuteData.dataSetManagerSource;
    this.dataSetManager.parentDataSetManager = this.dataSetManagerSource;
    const dataSetContainer = this.dataSetManager.dataSetContainers.first;
    this.mainDataSet = this.dataSetManager.CreateDataSetWrapper(dataSetContainer.ident, this.dataSetManagerSource);
    var actionRow = this.mainDataSet.GenerateRow(this.actionExecuteData.activeRow, true, null, false, null);
    !this.actionExecuteData.hasInitProc
       ? this.connectDataSetToControls(dataSetContainer, null)
       : this.executInitProc(dataSetContainer, actionRow); 
       
     this.sourceDataSet = this.dataSetManagerSource.getDateSourceWrapper(this.actionExecuteData.sourceDataSetIdent);
  }

  ngAfterViewInit() {
    this.dataSetManager.dataSetContainers = this.dataSetContainers;
    setTimeout(() => {
      this.prepareDataSet();
    }, 20);
  }

  discard() {
    if (this.isExpanderOpenKind()) {
      this.close(true)
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
        this.close(false);
      }
    });
  }

  private isExpanderOpenKind() {
    return this.actionExecuteData.openKind === 'EXPANDER';
  }

  onSave(e: string) {
    if (e === 'OK') {
      this.close(false);
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

  private close(discard: boolean) {
    this.dataSetContainers?.forEach(container => {
      container.detachEvents();
    });

    if (this.isExpanderOpenKind()) {
      this.actionExecuteData.dataSetManagerSource.procExpander.Close(this.actionExecuteData, discard);
    } else {
      this.tabService.removeTab(this.tabIndex);      
    }

    if (discard && this.actionExecuteData?.generatedRow && this.sourceDataSet) {
      this.sourceDataSet.RemoveRow(this.actionExecuteData.generatedRow);
    }
  }

  private connectToFilesButton() {
    const dataSetContainer =  this.dataSetManager.dataSetContainers?.first;

    if (!dataSetContainer) {
      return;
    }

    if (!dataSetContainer.filesButtons) {
      return;
    }

    const fileButton = dataSetContainer.filesButtons.first;

    if (!fileButton) {
      return;
    }

    fileButton.stateExecutinChanged.subscribe(
      x => this.saveDisabled = x
    );
  }
}

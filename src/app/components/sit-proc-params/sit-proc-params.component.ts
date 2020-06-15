import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { TabService } from '@app/_services/tab.service';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogDiscardComponent } from '@app/components/sit-dialog-discard';
import { SitDataSetContainerComponent } from '../sit-data-set-container';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { GatewayService } from '@app/_services';


@Component({
  selector: 'sit-proc-params',
  templateUrl: './sit-proc-params.component.html',
  styleUrls: ['./sit-proc-params.component.scss']
})
export class SitProcParamsComponent implements OnInit, AfterViewInit {
  @ContentChildren(SitDataSetContainerComponent, { descendants: true })
  dataSetContainers !: QueryList<SitDataSetContainerComponent>;

  @Input() actionIdent;
  @Input() dictIdent: string;
  @Input() dataSourceIdent: string;
  @Input() senderObject = null;
  @Output() activeRowChange = new EventEmitter<any[]>();

  tabIndex: number;
  public DataSetManager: DataSetManager;

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

  ngAfterViewInit() {
    this.DataSetManager.dataSetContainers = this.dataSetContainers;
    const dataSetWrapper = this.DataSetManager.CreateDataSetWrapper(this.dataSourceIdent);
    this.senderObject = this.tabService.tabs[this.tabIndex].tabData.senderObject;
    const dataSetSource = this.senderObject.dataSets[this.dataSourceIdent];

    dataSetWrapper.rows = [dataSetSource.activeRow];
    dataSetWrapper.SetActiveRow(dataSetSource.activeRow, false);
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
    if (e === 'OK') { this.tabService.removeTab(this.tabIndex); }

  }
}

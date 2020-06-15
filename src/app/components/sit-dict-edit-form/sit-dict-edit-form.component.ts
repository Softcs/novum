import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { TabService } from '@app/_services/tab.service';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogDiscardComponent } from '@app/components/sit-dialog-discard';


@Component({
  selector: 'sit-dict-edit-form',
  templateUrl: './sit-dict-edit-form.component.html',
  styleUrls: ['./sit-dict-edit-form.component.scss']
})
export class SitDictEditFormComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  @Input() actionIdent = 'ins';
  @Input() dictIdent: string;
  @Input() dataSourceIdent: string;
  @Input() activeRow = [];

  @Output() activeRowChange = new EventEmitter<any[]>();

  tabIndex: number;

  constructor(
    private tabService: TabService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.tabIndex = this.tabService.tabs.findIndex(tab => tab.active);
  }

  refreshAfter(dataSourceManager)  {
    const dataSourceResponseWrapper: DataSetWrapper =
      this.dictContainer.DataSourceManager.getDateSourceWrapper(this.dataSourceIdent);

    dataSourceManager.getDateSourceWrapper(this.dataSourceIdent).activeRow = this.tabService.tabs[this.tabIndex].tabData.activeRow;
    this.activeRow =  this.tabService.tabs[this.tabIndex].tabData.activeRow;
    this.activeRowChange.emit(this.activeRow);
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

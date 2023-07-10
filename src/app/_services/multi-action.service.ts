import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SitDialogActionProgressComponent } from '@app/components/sit-dialog-action-progress/sit-dialog-action-progress.component';
import { SitDialogConfirmSeletedRowsComponent } from '@app/components/sit-dialog-confirm-selected-rows';
import { DataSetWrapper } from '@app/_models';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { ActionVisibilityRule } from '@app/_models/actionVisibilityRule';
import { VisibilityService } from './visibility.service';

@Injectable({
  providedIn: 'root'
})
export class MultiActionService {
  private owner: any;
  private dataSetWrapper: DataSetWrapper;
  private actionDefinition: ActionDefinitionWrapper;
  private cancelInvoke : boolean = false;
  private dialogDataProgress : MatDialogRef<SitDialogConfirmSeletedRowsComponent>;

  constructor(
    public dialog: MatDialog,
    private visibilityService: VisibilityService
    ) { }

  private runActionOneByOneForward(selectedRows: any[], rowIndex: number, owner: any, visibility:ActionVisibilityRule, exceptionCallback: Function, exceptionFinally: Function): void {
    if (this.cancelInvoke) {
      exceptionFinally(owner);
      return;
    }

    rowIndex++;
    if (rowIndex >= selectedRows.length) {
      if (exceptionFinally) {
        exceptionFinally(owner);
      }
      this.closeProgressDialog(true);
      return;
    }

    this.runActionOneByOne(selectedRows, rowIndex, visibility, exceptionCallback, exceptionFinally);
  }

  public setProperties(owner: any,
    dataSetWrapper: DataSetWrapper,
    actionDefinition: ActionDefinitionWrapper) {
      this.owner = owner;
      this.dataSetWrapper = dataSetWrapper;
      this.actionDefinition = actionDefinition;
  }

  public runActionOneByOne(selectedRows: any[],
                           rowIndex: number,
                           visibility:ActionVisibilityRule,
                           exceptionCallback: Function,
                           exceptionFinally: Function
                           ) {
    var row = selectedRows[rowIndex];
    if (rowIndex == 0) {
      selectedRows = this.applyVisibility(selectedRows, visibility, this.dataSetWrapper);

      this.showProgressDialog(this.actionDefinition.tooltip, selectedRows, (cancelResult: any) => {
        this.cancelInvoke = true;
      });
    } else {
      this.updateProgressDialog(rowIndex);
    }

    this.dataSetWrapper.ExecuteAction(
      this.actionDefinition,
      this.owner,
      (owner) => {
        this.runActionOneByOneForward(selectedRows, rowIndex, owner, visibility, exceptionCallback, exceptionFinally);
      },
      (owner) => {
        if (exceptionCallback) {
          exceptionCallback(this.owner);
        }

        this.runActionOneByOneForward(selectedRows, rowIndex, owner, visibility, exceptionCallback, exceptionFinally);
      },
      null,
      row);
  }

  public applyVisibility(selectedRows: any[], visibility:ActionVisibilityRule, dataSetResponseWrapper: DataSetWrapper) {
    if (!selectedRows || !visibility) {
      return selectedRows;
    }

    var result = selectedRows.filter(r => this.visibilityService.shouldBeVisible(visibility, dataSetResponseWrapper, r));
    return result;
  }

  public showConfirmDialog(caption: string,
                           selectedRows: any[],
                           visibility:ActionVisibilityRule,
                           dataSetResponseWrapper: DataSetWrapper,
                           closeOKCallBack: Function,
                           closeFailedCallBack: Function,
                          //  width: string = '450px',
                          //  height: string = '180px',
                           panelClass: string = 'sit-selected-rows-confirmation') {
    var rows = this.applyVisibility(selectedRows, visibility, dataSetResponseWrapper);
    const dialogRef = this.dialog.open(SitDialogConfirmSeletedRowsComponent, {
      // width: width, 
      // height: height, 
      panelClass: panelClass,
      data: {
        rowsCount: rows.length,
        caption: caption,
        confirm: true
      }
    });
    this.cancelInvoke = false;
    dialogRef.afterClosed().subscribe(result => {
      result ? closeOKCallBack(true) : closeFailedCallBack(false);
    });
  }

  public showProgressDialog(caption: string,
                            selectedRows: any[],
                            closeCanceCallBack: Function,
                            width: string = '450px',
                            height: string = '205px',
                            panelClass: string = 'sit-selected-rows-confirmation') {

    this.dialogDataProgress = this.dialog.open(SitDialogActionProgressComponent, {
      width: width, height: height, panelClass: panelClass,
      data: {
      rowsCount: selectedRows.length,
      caption: caption,
      currentRowIndex: 1,
      progress: true
      }
    });

    this.dialogDataProgress.afterClosed().subscribe(result => {
      closeCanceCallBack(result);
      this.cancelInvoke = true;
    });
 }

 public updateProgressDialog(rowIndex) {
    this.dialogDataProgress.componentInstance.data.currentRowIndex = rowIndex + 1;

 }

 private closeProgressDialog(result) {
    this.dialogDataProgress.close(result);
 }

  private executeActionForSelectedExceptionCallback(self) {
    self.afterCompleted.emit('Error');
  }

  private executeActionForSelectedCompletedCallback(self) {

  }
}

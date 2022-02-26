import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogConfirmSeletedRowsComponent } from '@app/components/sit-dialog-confirm-selected-rows';

import { DataSetWrapper } from '@app/_models';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { NumberFilterModel } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class MultiActionService {
  private owner: any;
  private dataSetWrapper: DataSetWrapper;
  private actionDefinition: ActionDefinitionWrapper;
  private cancelInvoke : boolean = false;
  constructor(public dialog: MatDialog) { }

  private runActionOneByOneForward(selectedRows: any[], rowIndex: number, owner: any, exceptionCallback: Function, exceptionFinally: Function): void {
    if (this.cancelInvoke) {
      exceptionFinally(owner);
      return;
    }
    rowIndex++;
    if (rowIndex >= selectedRows.length && exceptionFinally) {
      exceptionFinally(owner);
      return;
    }

    this.runActionOneByOne(selectedRows, rowIndex, exceptionCallback, exceptionFinally);
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
                           exceptionCallback: Function,
                           exceptionFinally: Function
                           ) {
    var row = selectedRows[rowIndex];
    if (rowIndex == 0) {
      this.showProgressDialog(this.actionDefinition.tooltip, selectedRows, (cancelResult) => {
        this.cancelInvoke = true;
      });
    } else {
      this.updateProgressDialog(rowIndex);
    }

    this.dataSetWrapper.ExecuteAction(
      this.actionDefinition,
      this.owner,
      (owner) => {
        this.runActionOneByOneForward(selectedRows, rowIndex, owner, exceptionCallback, exceptionFinally);
      },
      (owner) => {
        if (exceptionCallback) {
          exceptionCallback(this.owner);
        }

        this.runActionOneByOneForward(selectedRows, rowIndex, owner, exceptionCallback, exceptionFinally);
      },
      null,
      row);
  }

  public showConfirmDialog(caption: string,
                           selectedRows: any[],
                           closeOKCallBack: Function,
                           closeFailedCallBack: Function,
                           width: string = '450px',
                           height: string = '180px',
                           panelClass: string = 'sit-selected-rows-confirmation') {
    const dialogRef = this.dialog.open(SitDialogConfirmSeletedRowsComponent, {
      width: width, height: height, panelClass: panelClass,
      data: {
        rowsCount: selectedRows.length,
        caption: caption,
        confirm: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      result ? closeOKCallBack(true) : closeFailedCallBack(false);
    });
  }

  public showProgressDialog(caption: string,
                            selectedRows: any[],
                            closeCanceCallBack: Function,
                            width: string = '450px',
                            height: string = '180px',
                            panelClass: string = 'sit-selected-rows-confirmation') {

    const dialogRef = this.dialog.open(SitDialogConfirmSeletedRowsComponent, {
      width: width, height: height, panelClass: panelClass,
      data: {
      rowsCount: selectedRows.length,
      caption: caption,
      progress: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      closeCanceCallBack(result);
    });
 }

 public updateProgressDialog(rowIndex) {

 }

  private executeActionForSelectedExceptionCallback(self) {
    self.afterCompleted.emit('Error');
  }

  private executeActionForSelectedCompletedCallback(self) {

  }
}

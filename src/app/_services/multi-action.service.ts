import { Injectable } from '@angular/core';
import { DataSetWrapper } from '@app/_models';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';

@Injectable({
  providedIn: 'root'
})
export class MultiActionService {
  private owner: any;
  private dataSetWrapper: DataSetWrapper;
  private actionDefinition: ActionDefinitionWrapper;

  constructor() { }

  private runActionOneByOneForward(selectedRows: any[], rowIndex: number, owner: any, exceptionCallback: Function, exceptionFinally: Function) {
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

  private executeActionForSelectedExceptionCallback(self) {
    self.afterCompleted.emit('Error');
  }

  private executeActionForSelectedCompletedCallback(self) {

  }
}

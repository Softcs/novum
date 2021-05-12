import { Injectable } from '@angular/core';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { ActionVisibilityRule } from '@app/_models/actionVisibilityRule';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  constructor() { }
  public shouldBeVisible(visibilityRule: ActionVisibilityRule, dataSetWrapper: DataSetWrapper): boolean {
    if (!visibilityRule) {
        return true;
    }    
    var row = null;
    if (!visibilityRule.dataSourceIdent) {
          row = dataSetWrapper.activeRow;
    } else {
      var dataSetManager = dataSetWrapper.dataSourceManager;
      dataSetWrapper =  dataSetManager.getDateSourceWrapper(visibilityRule.dataSourceIdent);
      if (!dataSetWrapper) {
        console.error(`Visiblity - dataSet: ${visibilityRule.dataSourceIdent} could not be found`);
        return false;
      }
      row = dataSetWrapper.activeRow;      
    }
    
    return this.shouldBeVisible4row(visibilityRule, row);
  }

  public shouldBeVisible4row(visibilityRule: ActionVisibilityRule, activeRow: any): boolean {
    if (visibilityRule && !activeRow) {
      return false;
    }
    
    return activeRow[visibilityRule.fieldName].toString() === visibilityRule.value;     
  }
}

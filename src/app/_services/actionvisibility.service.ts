import { Injectable } from '@angular/core';
import { ActionVisibilityRule } from '@app/_models/actionVisibilityRule';

@Injectable({
  providedIn: 'root'
})
export class ActionvisibilityService {

  constructor() { }

  public shouldBeVisible(visibilityRule: ActionVisibilityRule, activeRow: any): boolean {
    
    if((visibilityRule != null || visibilityRule != undefined) && (activeRow != null || activeRow != undefined)){
      
      if (activeRow[visibilityRule.fieldName] === visibilityRule.value) {
        //console.log("Active row = " + activeRow[visibilityRule.fieldName]);
        return true;
      }  else 
          return false;
    } 

    if (visibilityRule == null || visibilityRule == undefined)
        return true;

    return false;
  }
}

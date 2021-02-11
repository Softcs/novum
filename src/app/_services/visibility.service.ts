import { Injectable } from '@angular/core';
import { ActionVisibilityRule } from '@app/_models/actionVisibilityRule';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  constructor() { }

  public shouldBeVisible(visibilityRule: ActionVisibilityRule, activeRow: any): boolean {

    if(visibilityRule && activeRow){

      if (activeRow[visibilityRule.fieldName].toString() === visibilityRule.value) {
        //console.log("Active row = " + activeRow[visibilityRule.fieldName]);
        return true;
      }  else
          return false;
    }

    if (!visibilityRule)
        return true;

    return false;
  }
}

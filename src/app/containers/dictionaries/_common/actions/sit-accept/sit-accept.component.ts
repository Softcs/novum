import { Component } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-accept',
  templateUrl: './sit-accept.component.html',
  styleUrls: ['./sit-accept.component.scss']
})
export class SitAcceptComponent extends SitActionParamsForm{

  showEmployeesList(){
    return(!this.activeRow  || this.activeRow.ShowEmployeesList == 0 ? false : true);
  }

  showAcceptanceMode(){
    return(!this.activeRow  || this.activeRow.ShowAcceptanceMode == 0 ? false : true);
  }  

}

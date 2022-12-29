import { Component } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-customer-credit-limit-scores-accept',
  templateUrl: './sit-customer-credit-limit-scores-accept.component.html',
  styleUrls: ['./sit-customer-credit-limit-scores-accept.component.scss']
})
export class SitCustomerCreditLimitScoresAcceptComponent extends SitActionParamsForm{

  hideEmployeesList(){
    return(!this.activeRow  || this.activeRow.ShowEmployeesList == 0 ? true : false);
  }

}

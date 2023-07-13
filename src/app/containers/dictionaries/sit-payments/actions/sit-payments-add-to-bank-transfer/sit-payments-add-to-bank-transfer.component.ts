import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-payments-add-to-bank-transfer',
  templateUrl: './sit-payments-add-to-bank-transfer.component.html',
  styleUrls: ['./sit-payments-add-to-bank-transfer.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-payments-add-to-bank-transfer-component'}  
})
export class SitPaymentsAddToBankTransferComponent extends SitActionParamsForm  {

  showBankTransferNumber(){
    return(!this.activeRow  || this.activeRow.GenBankTransfer == 1 ? false : true);
  }

}

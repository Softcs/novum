import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-bank-transfer-headers-edit',
  templateUrl: './sit-bank-transfer-headers-edit.component.html',
  styleUrls: ['./sit-bank-transfer-headers-edit.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-bank-transfer-headers-edit-component'}
})
export class SitBankTransferHeadersEditComponent extends SitActionParamsForm  {

}

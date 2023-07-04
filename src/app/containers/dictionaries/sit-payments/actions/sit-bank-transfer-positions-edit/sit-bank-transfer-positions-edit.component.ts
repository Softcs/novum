import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-bank-transfer-positions-edit',
  templateUrl: './sit-bank-transfer-positions-edit.component.html',
  styleUrls: ['./sit-bank-transfer-positions-edit.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-bank-transfer-positions-edit-component'}
})
export class SitBankTransferPositionsEditComponent extends SitActionParamsForm  {

}

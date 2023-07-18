import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-bank-transfer-headers-gen-file',
  templateUrl: './sit-bank-transfer-headers-gen-file.component.html',
  styleUrls: ['./sit-bank-transfer-headers-gen-file.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-bank-transfer-headers-gen-file-component'}
})
export class SitBankTransferHeadersGenFileComponent extends SitActionParamsForm  {

}


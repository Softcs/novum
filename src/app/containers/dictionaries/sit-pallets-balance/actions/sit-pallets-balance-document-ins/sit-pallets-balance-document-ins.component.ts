import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-pallets-balance-document-ins',
  templateUrl: './sit-pallets-balance-document-ins.component.html',
  styleUrls: ['./sit-pallets-balance-document-ins.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-pallets-balance-document-ins-component'}
})
export class SitPalletsBalanceDocumentInsComponent extends SitActionParamsForm  {

}

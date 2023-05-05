import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-pallets-evidence-add',
  templateUrl: './sit-pallets-evidence-add.component.html',
  styleUrls: ['./sit-pallets-evidence-add.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-pallets-evidence-add-component'}
})
export class SitPalletsEvidenceAddComponent extends SitActionParamsForm  {

}

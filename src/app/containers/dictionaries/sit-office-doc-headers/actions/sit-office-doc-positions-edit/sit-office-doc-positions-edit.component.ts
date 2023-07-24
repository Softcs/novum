import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-office-doc-positions-edit',
  templateUrl: './sit-office-doc-positions-edit.component.html',
  styleUrls: ['./sit-office-doc-positions-edit.component.scss'],
  host: {class: 'sit-office-doc-positions-edit-component flex-container-column'},
  encapsulation : ViewEncapsulation.None,
 
})
export class SitOfficeDocPositionsEditComponent extends SitActionParamsForm{



}

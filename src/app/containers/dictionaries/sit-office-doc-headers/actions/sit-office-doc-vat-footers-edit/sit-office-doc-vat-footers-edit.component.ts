import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-office-doc-vat-footers-edit',
  templateUrl: './sit-office-doc-vat-footers-edit.component.html',
  styleUrls: ['./sit-office-doc-vat-footers-edit.component.scss'],
  host: {class: 'sit-office-doc-vat-footers-edit-component  flex-container-column'},
  encapsulation : ViewEncapsulation.None,
})
export class SitOfficeDocVatFootersEditComponent extends SitActionParamsForm{

}

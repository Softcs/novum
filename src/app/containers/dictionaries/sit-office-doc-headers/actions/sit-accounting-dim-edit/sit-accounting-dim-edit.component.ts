import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-accounting-dim-edit',
  templateUrl: './sit-accounting-dim-edit.component.html',
  styleUrls: ['./sit-accounting-dim-edit.component.scss'],
  host: {class: 'sit-accounting-dim-edit-component flex-container-column'},
  encapsulation : ViewEncapsulation.None,
})
export class SitAccountingDimEditComponent extends SitActionParamsForm{



}
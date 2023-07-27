import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-office-doc-dimensions-edit',
  templateUrl: './sit-office-doc-dimensions-edit.component.html',
  styleUrls: ['./sit-office-doc-dimensions-edit.component.scss'],
  host: {class: 'sit-office-doc-dimensions-edit-component flex-container-column'},
  encapsulation : ViewEncapsulation.None,
})
export class SitOfficeDocDimensionsEditComponent extends SitActionParamsForm{}

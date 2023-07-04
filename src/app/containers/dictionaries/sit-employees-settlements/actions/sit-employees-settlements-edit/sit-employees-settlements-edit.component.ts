import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-employees-settlements-edit',
  templateUrl: './sit-employees-settlements-edit.component.html',
  styleUrls: ['./sit-employees-settlements-edit.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-employees-settlements-edit-component'}
})
export class SitEmployeesSettlementsEditComponent extends SitActionParamsForm{}

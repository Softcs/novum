import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-hrdepartments4-cust-edit',
  templateUrl: './sit-hrdepartments4-cust-edit.component.html',
  styleUrls: ['./sit-hrdepartments4-cust-edit.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-hrdepartments4-cust-edit-component'}
})
export class SitHRDepartments4CustEditComponent extends SitActionParamsForm{

}

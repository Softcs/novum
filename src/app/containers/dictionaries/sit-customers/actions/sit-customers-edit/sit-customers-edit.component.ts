import { Component } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';


@Component({
  selector: 'app-sit-customers-edit',
  templateUrl: './sit-customers-edit.component.html',
  styleUrls: ['./sit-customers-edit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomersEditComponent extends SitActionParamsForm{

}

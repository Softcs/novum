import { Component } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-accounting-edit',
  templateUrl: './sit-accounting-edit.component.html',
  styleUrls: ['./sit-accounting-edit.component.scss'],
  host: {class: 'sit-accounting-edit-component'}
})
export class SitAccountingEditComponent extends SitActionParamsForm{



}

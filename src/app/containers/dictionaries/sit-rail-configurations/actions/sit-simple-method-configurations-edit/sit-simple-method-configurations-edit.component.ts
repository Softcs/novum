import { Component } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-simple-method-configurations-edit',
  templateUrl: './sit-simple-method-configurations-edit.component.html',
  styleUrls: ['./sit-simple-method-configurations-edit.component.scss'],
  host: {class: 'router-flex'}
})

export class SitSimpleMethodConfigurationsEditComponent extends SitActionParamsForm {

}

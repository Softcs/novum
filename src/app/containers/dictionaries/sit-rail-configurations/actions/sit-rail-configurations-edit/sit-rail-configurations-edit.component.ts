import { Component } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-rail-configurations-edit',
  templateUrl: './sit-rail-configurations-edit.component.html',
  styleUrls: ['./sit-rail-configurations-edit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRailConfigurationsEditComponent extends SitActionParamsForm {
}

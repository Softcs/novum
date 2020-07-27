import { Component, OnInit, Input } from '@angular/core';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-rail-configurations-edit',
  templateUrl: './sit-rail-configurations-edit.component.html',
  styleUrls: ['./sit-rail-configurations-edit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRailConfigurationsEditComponent implements SitActionParamsForm, OnInit {
  @Input() actionExecuteData: ActionExecuteData;

  constructor() {}

  ngOnInit(): void {}

}

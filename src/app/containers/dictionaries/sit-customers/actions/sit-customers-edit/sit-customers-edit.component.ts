import { Component, OnInit, Input } from '@angular/core';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';


@Component({
  selector: 'app-sit-customers-edit',
  templateUrl: './sit-customers-edit.component.html',
  styleUrls: ['./sit-customers-edit.component.scss']
})
export class SitCustomersEditComponent implements SitActionParamsForm, OnInit {
  @Input() actionExecuteData: ActionExecuteData;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-agreements-edit',
  templateUrl: './sit-agreements-edit.component.html',
  styleUrls: ['./sit-agreements-edit.component.scss']
})
export class SitAgreementsEditComponent implements SitActionParamsForm, OnInit {
  @Input() actionExecuteData: ActionExecuteData;

  constructor() { }

  ngOnInit(): void {
  }

}

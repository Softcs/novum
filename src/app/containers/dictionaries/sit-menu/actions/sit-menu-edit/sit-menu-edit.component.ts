import { Component, OnInit, Input } from '@angular/core';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-menu-edit',
  templateUrl: './sit-menu-edit.component.html',
  styleUrls: ['./sit-menu-edit.component.scss']
})
export class SitMenuEditComponent implements SitActionParamsForm, OnInit {
  @Input() actionExecuteData: ActionExecuteData;


  constructor() { }

  ngOnInit(): void {
  }

}

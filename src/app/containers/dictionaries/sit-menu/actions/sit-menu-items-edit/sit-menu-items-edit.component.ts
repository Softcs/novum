import { Component, OnInit, Input } from '@angular/core';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-menu-items-edit',
  templateUrl: './sit-menu-items-edit.component.html',
  styleUrls: ['./sit-menu-items-edit.component.scss']
})
export class SitMenuItemsEditComponent implements SitActionParamsForm, OnInit {
  @Input() actionExecuteData: ActionExecuteData;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';
@Component({
  selector: 'app-sit-jpk-vat-get-data',
  templateUrl: './sit-jpk-vat-get-data.component.html',
  styleUrls: ['./sit-jpk-vat-get-data.component.scss']
})
export class SitJpkVatGetDataComponent implements SitActionParamsForm, OnInit {
  @Input() actionExecuteData: ActionExecuteData;

  constructor() { }

  ngOnInit(): void {
  }

}

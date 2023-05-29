import { Component, OnInit } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-payrolls-edit',
  templateUrl: './sit-payrolls-edit.component.html',
  styleUrls: ['./sit-payrolls-edit.component.scss']
})
export class SitPayrollsEditComponent extends SitActionParamsForm {}

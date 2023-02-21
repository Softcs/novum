import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-office-doc-gen-accounting',
  templateUrl: './sit-office-doc-gen-accounting.component.html',
  styleUrls: ['./sit-office-doc-gen-accounting.component.scss'],
  host: {class: 'sit-office-doc-gen-account-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitOfficeDocGenAccountingComponent  extends SitActionParamsForm{



}

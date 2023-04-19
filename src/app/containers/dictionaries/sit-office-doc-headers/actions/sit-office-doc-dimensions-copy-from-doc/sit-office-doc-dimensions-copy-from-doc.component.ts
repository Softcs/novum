import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-office-doc-dimensions-copy-from-doc',
  templateUrl: './sit-office-doc-dimensions-copy-from-doc.component.html',
  styleUrls: ['./sit-office-doc-dimensions-copy-from-doc.component.scss'],
  host: {class: 'sit-office-doc-dimensions-copy-from-doc.component'},
  encapsulation : ViewEncapsulation.None,   
})
export class SitOfficeDocDimensionsCopyFromDocComponent extends SitActionParamsForm{



}

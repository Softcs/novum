import { Component, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'sit-attachments-ins',
  templateUrl: './sit-attachments-ins.component.html',
  styleUrls: ['./sit-attachments-ins.component.scss'],
  host: {class: 'sit-attachments-ins-component flex-container-column'},
  encapsulation : ViewEncapsulation.None,
})
export class SitAttachmentsInsComponent extends SitActionParamsForm {

  showPDF: boolean = false;

  showPDFChangeView = (val: boolean) => {
    this.showPDF = val;
  }

}

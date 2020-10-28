import { Component, ViewChild, Renderer2 } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';


@Component({
  selector: 'sit-pdf-viewer',
  templateUrl: './sit-pdf-viewer.component.html',
  styleUrls: ['./sit-pdf-viewer.component.scss']
})
export class SitPdfViewerComponent  extends SitDataBaseComponent {
  @ViewChild('pdfViewer') pdfViewer;

  pdfSrc: string;
  downloadFileName: string;
  currentUser: User;
  companyGUID: string;
  showPDF = true;

  constructor(
      _renderer: Renderer2,
      private gatewayService: GatewayService,
      ) {
    super(_renderer);

    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.companyGUID = this.currentUser.company.companyGUID;
  }

  private refreshPdfSource() {
    // załączniki
    if (this.dataSetWrapper.getFieldValue('sitAttachmentsG') !== null) {
      this.pdfSrc = environment.apiUrl
        + '/service/attachments/get/'
        + this.currentUser.token + '/'
        + this.dataSetWrapper.getFieldValue('sitAttachmentsG') + '/'
        + this.dataSetWrapper.getFieldValue('FileName');
      this.downloadFileName = this.dataSetWrapper.getFieldValue('FileName');
    }

    // dowody
    if (this.dataSetWrapper.getFieldValue('sitDocumentsHeadersG') !== null) {
      this.pdfSrc = environment.apiUrl
        + '/service/show/anonymous/report/'
        + this.companyGUID + '/'
        + this.dataSetWrapper.getFieldValue('sitDocumentsHeadersG');

      this.downloadFileName = this.dataSetWrapper.getFieldValue('sitDocumentsHeadersG');
    }

    // jednostki logistyczne
    if (this.dataSetWrapper.getFieldValue('sitLogisticUnitsG') !== null) {
      this.pdfSrc = environment.apiUrl
        + '/service/show/anonymous/report/'
        + this.companyGUID + '/'
        + this.dataSetWrapper.getFieldValue('sitLogisticUnitsG');

      this.downloadFileName = this.dataSetWrapper.getFieldValue('LogisticUnitEAN');
    }
  }

  public refreshFieldValue() {
    this.refreshPdfSource();
    this.showPDF = true;
    if (this.dataSetWrapper.getFieldValue('showPrint') === 0) {
      this.showPDF = false;
    };
    if (this.pdfSrc !== this.pdfViewer.pdfSrc) {
      this.pdfViewer.pdfSrc = this.pdfSrc;
      this.pdfViewer.downloadFileName = this.downloadFileName;
      this.pdfViewer.refresh();
    }
  }
}

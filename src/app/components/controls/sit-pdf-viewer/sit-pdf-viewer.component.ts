import { Component, ViewChild, Renderer2, Input } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'sit-pdf-viewer',
  templateUrl: './sit-pdf-viewer.component.html',
  styleUrls: ['./sit-pdf-viewer.component.scss']
})
export class SitPdfViewerComponent  extends SitDataBaseComponent {
  @ViewChild('pdfViewer') pdfViewer;

  @Input() dictGuid: string;
  @Input() reportType: string;

  pdfSrc: string;
  downloadFileName: string;
  currentUser: User;
  companyGUID: string;
  showPDF = true;

  constructor(
      _renderer: Renderer2,
      private gatewayService: GatewayService,
      private urlService: UrlService
      ) {
    super(_renderer);

    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.companyGUID = this.currentUser.company.companyGUID;
  }

  private refreshPdfSource() {

    // załączniki
    if (this.reportType === 'att') {
      this.downloadFileName = this.dataSetWrapper.getFieldValue('FileName');
      this.pdfSrc = this.urlService.getAttachmentUrl(this.dataSetWrapper.getFieldValue('sitAttachmentsG'), this.downloadFileName)
      return;
    }
    // dowody
    if (this.reportType === 'doc') {
      this.pdfSrc = this.urlService.getSecureRepUrl(this.dataSetWrapper.getFieldValue(this.field),'doc','00000000-0000-0000-0000-000000000000','')
      this.downloadFileName = this.dataSetWrapper.getFieldValue(this.field);
      return;
    }
    // słowniki
    if (this.reportType === 'dict') {
      let params = { [this.field] : this.dataSetWrapper.getFieldValue(this.field) }
      this.pdfSrc = this.urlService.getSecureRepUrl(this.dictGuid, 'dict','00000000-0000-0000-0000-000000000000', params)
      this.downloadFileName = this.dataSetWrapper.getFieldValue('__Identity__');
      return;
    }
  }

  public refreshFieldValue() {
    this.refreshPdfSource();
    this.showPDF = true;
    if (this.dataSetWrapper.getFieldValue('showPrint') === 0 || !this.pdfSrc || !this.downloadFileName) {
      this.showPDF = false;
    };
    if (this.pdfSrc !== this.pdfViewer.pdfSrc) {
      this.pdfViewer.pdfSrc = encodeURIComponent(this.pdfSrc);
      this.pdfViewer.downloadFileName = this.downloadFileName;
      this.pdfViewer.refresh();
    }
  }
}

import { Component, ViewChild, Renderer2, Input, AfterViewInit } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { UrlService } from '@app/_services/url.service';
import { OnCFService } from '@app/_services/oncf.service';
import { basename } from 'path';
@Component({
  selector: 'sit-pdf-viewer',
  templateUrl: './sit-pdf-viewer.component.html',
  styleUrls: ['./sit-pdf-viewer.component.scss'],
  host: {class: 'sit-pdf-viewer-component'}
})
export class SitPdfViewerComponent extends SitDataBaseComponent implements AfterViewInit {
  @ViewChild('pdfViewer') pdfViewer;

  @Input() dictGuid: string;
  @Input() reportType: string;
  @Input() showField: string = 'showPrint';

  pdfSrc: string;
  downloadFileName: string;
  currentUser: User;
  companyGUID: string;
  showPDF = true;

  constructor(
      renderer: Renderer2,
      oncfService: OnCFService,
      private gatewayService: GatewayService,
      private urlService: UrlService
      ) {
    super(renderer);

    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.companyGUID = this.currentUser.company.companyGUID;


  }

  ngAfterViewInit() {
    document.addEventListener('webviewerloaded', function() {
      this.pdfViewer.PDFViewerApplicationOptions.set('printResolution', 300);
   })
  }

  private refreshPdfSource() {

    // załączniki
    if (this.reportType === 'att') {
      this.downloadFileName = this.dataSetWrapper.getFieldValue('FileName');
      var attachG = this.dataSetWrapper.getFieldValue('sitAttachmentsG');
      if (attachG == null) {
        this.showPDF = false;
        return;
      }
      this.pdfSrc = this.urlService.getAttachmentUrl(attachG, this.downloadFileName)
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
    if (this.dataSetWrapper.getFieldValue(this.showField) === 0 || !this.pdfSrc || !this.downloadFileName) {
      this.showPDF = false;
    };
    if (this.pdfSrc !== this.pdfViewer.pdfSrc || this.showPDF === true) {
      this.pdfViewer.pdfSrc = encodeURIComponent(this.pdfSrc);
      this.pdfViewer.downloadFileName = this.downloadFileName;
      this.pdfViewer.refresh();
    }
  }

  public setValue(value: any) {
    if(!this.IsNewValue(value)) {
      return;
    }

    super.setValue(value);
    if (value != null) {
      this.refreshFieldValue();
    }
  }
}

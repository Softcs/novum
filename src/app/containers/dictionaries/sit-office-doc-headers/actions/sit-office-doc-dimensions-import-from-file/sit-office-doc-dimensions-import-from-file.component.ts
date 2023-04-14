import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-office-doc-dimensions-import-from-file',
  templateUrl: './sit-office-doc-dimensions-import-from-file.component.html',
  styleUrls: ['./sit-office-doc-dimensions-import-from-file.component.scss'],
  host: {class: 'sit-office-doc-dimensions-import-from-file.component'},
  encapsulation : ViewEncapsulation.None,  
})
export class SitOfficeDocDimensionsImportFromFileComponent extends SitActionParamsForm{

  constructor(protected urlService: UrlService){
    super();    
  }

  getTemplate() {
    //pobiera załącznik
    //console.log(this.activeRow?.templateFileName);
    //console.log(this.activeRow?.templateFullFileName);
    const url = this.urlService.getImportTemplateUrl(this.activeRow?.TemplateFileName, this.activeRow?.TemplateFullFileName);
    //console.log(url);
    window.open(url, '_blank');

  }
}

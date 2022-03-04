import { Component, OnInit } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-import-from-file',
  templateUrl: './sit-import-from-file.component.html',
  styleUrls: ['./sit-import-from-file.component.scss']
})
export class SitImportFromFileComponent extends SitActionParamsForm {
  constructor(protected urlService: UrlService){
    super();    
  }

  getTemplate() {
    //pobiera załącznik
    console.log(this.activeRow?.templateFileName);
    console.log(this.activeRow?.templateFullFileName);
    const url = this.urlService.getImportTemplateUrl(this.activeRow?.templateFileName, this.activeRow?.templateFullFileName);
    console.log(url);
    window.open(url, '_blank');

  }
}


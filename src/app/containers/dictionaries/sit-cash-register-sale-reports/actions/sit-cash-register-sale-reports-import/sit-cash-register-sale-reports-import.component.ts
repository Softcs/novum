import { Component} from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-cash-register-sale-reports-import',
  templateUrl: './sit-cash-register-sale-reports-import.component.html',
  styleUrls: ['./sit-cash-register-sale-reports-import.component.scss']
})
export class SitCashRegisterSaleReportsImportComponent extends SitActionParamsForm {
  constructor(protected urlService: UrlService){
    super();    
  }

  getTemplate() {
    //pobiera załącznik
    const url = this.urlService.getImportTemplateUrl(this.activeRow?.templateFileName, this.activeRow?.templateFullFileName);
    window.open(url, '_blank');
  }
}

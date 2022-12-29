import { Component, OnInit } from '@angular/core';
import { SitActionParamsForm } from '@app/_interfaces/sitActionParamsForm';

@Component({
  selector: 'app-sit-office-doc-headers-edit',
  templateUrl: './sit-office-doc-headers-edit.component.html',
  styleUrls: ['./sit-office-doc-headers-edit.component.scss']
})
export class SitOfficeDocHeadersEditComponent extends SitActionParamsForm{

  isCurrency(){
    return( !this.activeRow?.sitCurrenciesG || this.activeRow?.sitCurrenciesG == 'E43EB905-3B49-432B-AD42-0D7E2618C82D' ? false : true );
  }

  hideNewCustomer(){
    return(!this.activeRow  || this.activeRow.CustomerInsert == 0 ? true : false);
  }

  bankNoReq(){
    return(!this.activeRow  || this.activeRow.BankAccountNumberReq == 0 ? false : true);

  }
}

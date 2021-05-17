import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-agreements',
  templateUrl: './sit-publications-agreements.component.html',
  styleUrls: ['./sit-publications-agreements.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsAgreementsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublicationsAgreements"] = [
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Numer', field: 'AgreementNo', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data', field: 'Date', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Częstotliwość rozliczeń', field: 'BillingFrequencyName', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Czas do zapłaty', field: 'TimeToSettle', filter: 'agTextColumnFilter', type: 'numericColumn', width: 70},
      { headerName: 'Czas do rozliczenia', field: 'TimeToPay', filter: 'agTextColumnFilter', type: 'numericColumn', width: 70},
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 100 }
    ];
    this.gridColumnsDefinition["sitAgreementsBenef"] = [
      { headerName: 'Beneficjent', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: 'Procent udziału', field: 'PercentShare', width: 100, type: 'numericColumn'},
      { headerName: 'Do rozliczenia', field: 'ForBilling', width: 100, renderType: 'checkbox'},
      { headerName: 'Sposób rozliczenia', field: 'BillingType', width: 150}
    ];
    this.gridColumnsDefinition["sitAgreementsPublications"] = [
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 150},
      { headerName: 'Tytuł', field: 'Title', width: 300},
      { headerName: 'Tytuł oryginalny', field: 'OriginalTitle', width: 300}
    ];
    this.gridColumnsDefinition["sitAgreementsAdvances"] = [
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 150},
      { headerName: 'Tytuł', field: 'Title', width: 300},
      { headerName: 'Beneficjent', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: 'Kwota zliczki', field: 'Amount', width: 100, type: 'numericColumn'},
      { headerName: 'Kwota rozliczona', field: 'ClearedAmount', width: 100, type: 'numericColumn'} 
    ];    
   }
}
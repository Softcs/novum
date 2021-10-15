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
      { headerName: 'Numer', field: 'AgreementNo', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data', field: 'Date', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Częst. rozl.', field: 'BillingFrequencyName', filter: 'agTextColumnFilter', width: 100, suppressMenu: true},
      { headerName: 'Czas do zapł.', field: 'TimeToSettle', filter: 'agTextColumnFilter', type: 'numericColumn', width: 100, suppressMenu: true},
      { headerName: 'Czas do rozl.', field: 'TimeToPay', filter: 'agTextColumnFilter', type: 'numericColumn', width: 100, suppressMenu: true},
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Publikacje', field: 'PublicationsIdents', tooltipField: 'PublicationsIdents', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Zaliczka', field: 'IsAdvance', width: 100, renderType: 'checkbox'},
      { headerName: 'Status', field: 'MainStatus_ValueName', filter: 'agTextColumnFilter', width: 150}
    ];
    this.gridColumnsDefinition["sitAgreementsBenef"] = [
      { headerName: 'Beneficjent', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: '% udziału', field: 'PercentShare', width: 100, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Do rozl.', field: 'ForBilling', width: 100, renderType: 'checkbox', suppressMenu: true},
      { headerName: 'Sposób rozl.', field: 'BillingType', width: 100, suppressMenu: true}
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
      { headerName: 'Kwota zal.', field: 'Amount', width: 100, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Kwota rozl.', field: 'ClearedAmount', width: 100, type: 'numericColumn', renderType: 'number', suppressMenu: true}
    ];
    this.gridColumnsDefinition["sitAgreementsPublicationsFormsOfRelease"] = [
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', width: 150},
      { headerName: 'Opis', field: 'FormOfReleaseDesc', width: 300},
      { headerName: ' ', field: 'IsActive', width: 100, renderType: 'checkbox'}
    ];
    this.gridColumnsDefinition["sitAgreementsBillingTypes"] = [
      { headerName: 'Grupa form wydania', field: 'FormsOfReleaseGroupIdent', tolltipField: 'FormsOfReleaseGroupDesc', width: 170},
      { headerName: 'Typ rozliczenia', field: 'BillingTypeIdent', tolltipField: 'FormsOfReleaseGroupDesc', width: 150},
      { headerName: 'Rodzaj ceny', field: 'PriceTypeName', tolltipField: 'FormsOfReleaseGroupDesc', width: 150},
    ];
    this.gridColumnsDefinition["sitAttachments"] = [
      { headerName: 'ParentId', field: 'ParentId', defaultVisibility: false },
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG', defaultVisibility: false },
      { headerName: 'Data dodania', field: 'InsertDate', width: 120,renderType: 'date' },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 },
    ];
   }
}

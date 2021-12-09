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
      { headerName: 'Id', field: 'sitAgreementsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsG', width: 100, defaultVisibility: false},
      { headerName: 'Numer umowy', field: 'AgreementNo', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Data zawarcia', field: 'Date', filter: 'agTextColumnFilter', width: 100, renderType: 'date', suppressMenu: true},
      { headerName: 'Zakres umowy', field: 'AgreementsScopeDesc', tooltipField: 'AgreementsScopeDesc', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Publikacje', field: 'PublicationsIdents', tooltipField: 'PublicationsIdents', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Okres lic.', headerTooltip: 'Okres trwania licencji w latach.', field: 'RightsPeriodInYears', width: 80, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Częst. rozl.', headerTooltip: 'Częstotliwość rozliczania tantiem', field: 'BillingFrequencyName', filter: 'agTextColumnFilter', width: 100, suppressMenu: true},
      { headerName: 'Na rozl.', headerTooltip: 'Ile mamy czasu na rozliczenie w dniach', field: 'TimeToPay', filter: 'agTextColumnFilter', type: 'numericColumn', width: 80, suppressMenu: true},
      { headerName: 'Do zapł.', headerTooltip: 'Ile mamy czasu do zapłaty w dniach', field: 'TimeToSettle', filter: 'agTextColumnFilter', type: 'numericColumn', width: 80, suppressMenu: true},
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true},
      { headerName: 'Zaliczka', field: 'IsAdvance', headerTooltip: 'Czy wypłacana jest zaliczka.', width: 80, renderType: 'checkbox', suppressMenu: true},
      { headerName: 'Sprzedaż po wyg. lic.', headerTooltip: 'Prawo do sprzedaży po wygaśnięciu licencji', field: 'SellAfterRightsKindDesc', tooltipField: 'SellAfterRightsKindDesc', filter: 'agTextColumnFilter', width: 180},
      { headerName: 'Okres', headerTooltip: 'Okres przez jaki mamy prawo do sprzedaży po wygaśnięciu licencji - mies.', field: 'SellAfterRightsPeriodInMonths', width: 60, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Min.tant. / cena', field: 'MinPriceDesc', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Wyprz.do tant.', headerTooltip: 'Czy wyprzedaż jest wliczana do tantiem.', field: 'IncSale', width: 110, renderType: 'checkbox', suppressMenu: true},
      { headerName: 'Reminders', field: 'Reminders', headerTooltip: 'Czy umowa przewiduje reminders.', width: 80, renderType: 'checkbox', suppressMenu: true},
      { headerName: '% od remind.', headerTooltip: '% tantiem od reminders', field: 'RemindersRate', width: 100, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Status', field: 'MainStatus_ValueName', filter: 'agTextColumnFilter', width: 150}
    ];
    this.gridColumnsDefinition["sitAgreementsBenef"] = [
      { headerName: 'Id', field: 'sitAgreementsBenefId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsBenefG', width: 100, defaultVisibility: false},
      { headerName: 'Beneficjent', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: '% udziału', field: 'PercentShare', width: 100, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Do rozl.', field: 'ForBilling', width: 100, renderType: 'checkbox', suppressMenu: true},
      { headerName: 'Sposób rozl.', field: 'BillingType', width: 100, suppressMenu: true}
    ];
    this.gridColumnsDefinition["sitAgreementsPublications"] = [
      { headerName: 'Id', field: 'sitAgreementsPublicationsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsPublicationsG', width: 100, defaultVisibility: false},
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 150},
      { headerName: 'Tytuł', field: 'Title', width: 300},
      { headerName: 'Tytuł oryginalny', field: 'OriginalTitle', width: 300},
      { headerName: 'Typ daty licencji', field: 'RightsDateFromTypeDesc', width: 150},
      { headerName: 'Początek licencji', field: 'RightsDateFrom', filter: 'agTextColumnFilter', width: 120, renderType: 'date'},
      { headerName: 'Lat', field: 'RightsPeriodInYears', width: 80, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Koniec licencji', field: 'RightsDateTo', filter: 'agTextColumnFilter', width: 120, renderType: 'date'},
      { headerName: 'Miesięcy', field: 'SellAfterRightsPeriodInMonths', width: 80, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Sprzedaż do', field: 'RightsToSellDateTo', filter: 'agTextColumnFilter', width: 120, renderType: 'date'},
    ];
    this.gridColumnsDefinition["sitAgreementsAdvances"] = [
      { headerName: 'Id', field: 'sitAgreementsAdvancesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsAdvancesG', width: 100, defaultVisibility: false},
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 150},
      { headerName: 'Tytuł', field: 'Title', width: 300},
      { headerName: 'Beneficjent', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: 'Kwota zal.', field: 'Amount', width: 100, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Kwota rozl.', field: 'ClearedAmount', width: 100, type: 'numericColumn', renderType: 'number', suppressMenu: true}
    ];
    this.gridColumnsDefinition["sitAgreementsPublicationsFormsOfRelease"] = [
      { headerName: 'Id', field: 'sitAgreementsPublicationsFormsOfReleaseId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsPublicationsFormsOfReleaseG', width: 100, defaultVisibility: false},
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', width: 150},
      { headerName: 'Opis', field: 'FormOfReleaseDesc', width: 300},
      { headerName: ' ', field: 'IsActive', width: 100, renderType: 'checkbox'}
    ];
    this.gridColumnsDefinition["sitAgreementsBillingTypes"] = [
      { headerName: 'Id', field: 'sitAgreementsBillingTypesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsBillingTypesG', width: 100, defaultVisibility: false},
      { headerName: 'Grupa form wydania', field: 'FormsOfReleaseGroupIdent', tolltipField: 'FormsOfReleaseGroupDesc', width: 170},
      { headerName: 'Typ rozliczenia', field: 'BillingTypeIdent', tolltipField: 'FormsOfReleaseGroupDesc', width: 150},
      { headerName: 'Rodzaj ceny', field: 'PriceTypeName', tolltipField: 'FormsOfReleaseGroupDesc', width: 150},
    ];
    this.gridColumnsDefinition["sitAttachments"] = [
      { headerName: 'ParentId', field: 'ParentId', defaultVisibility: false},
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG', defaultVisibility: false},
      { headerName: 'Data dodania', field: 'InsertDate', width: 120, renderType: 'date'},
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250},
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250},
    ];
   }
}

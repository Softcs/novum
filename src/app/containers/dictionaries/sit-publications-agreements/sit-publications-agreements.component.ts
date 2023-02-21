import { Component, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-agreements',
  templateUrl: './sit-publications-agreements.component.html',
  styleUrls: ['./sit-publications-agreements.component.scss'],
  host: {class: 'router-flex sit-publications-agreements-component'},
  encapsulation : ViewEncapsulation.None,
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
      { headerName: 'Okres lic.', headerTooltip: 'Okres trwania licencji w latach.', field: 'RightsPeriodInYears', width: 80, type: 'numericColumn', renderType: 'number', renderFormat: '1.0-0', suppressMenu: true},
      { headerName: 'Częst. rozl.', headerTooltip: 'Częstotliwość rozliczania tantiem', field: 'BillingFrequencyName', filter: 'agTextColumnFilter', width: 100, suppressMenu: true},
      { headerName: 'Na rozl.', headerTooltip: 'Ile mamy czasu na przesłanie rozliczenia i zapłatę w dniach', field: 'TimeToPay',  type: 'numericColumn', width: 80, suppressMenu: true},
      { headerName: 'Do zapł.', headerTooltip: 'Ile mamy czasu do zapłaty w dniach', field: 'TimeToSettle',  type: 'numericColumn', width: 80, suppressMenu: true},
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true},
      { headerName: 'Zaliczka', field: 'IsAdvance', headerTooltip: 'Czy wypłacana jest zaliczka.', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Sprz. po wyg. lic.', headerTooltip: 'Prawo do sprzedaży po wygaśnięciu licencji', field: 'SellAfterRightsKindDesc', tooltipField: 'SellAfterRightsKindDesc', filter: 'agTextColumnFilter', width: 160},
      { headerName: 'Okres', headerTooltip: 'Okres przez jaki mamy prawo do sprzedaży po wygaśnięciu licencji - mies.', field: 'SellAfterRightsPeriodInMonths', width: 60, type: 'numericColumn', renderType: 'number', renderFormat: '1.0-0', suppressMenu: true},
      { headerName: 'Min.tant. / cena', field: 'MinPriceDesc', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Tant.od wyprz.', headerTooltip: 'Czy są liczone tantiemy od wyprzedaży.', field: 'IncSale', width: 110, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Remainders', field: 'Remainders', headerTooltip: 'Czy umowa przewiduje remainders.', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: '% od remaind.', headerTooltip: '% tantiem od remainders', field: 'RemaindersRate', width: 100, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Status', field: 'MainStatus_ValueName', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Zatwierdzone przez', field: 'UserLogin_Confirmed', filter: 'agTextColumnFilter', width: 200, defaultVisibility: false}
    ];
    this.gridColumnsDefinition["sitAgreementsBenef"] = [
      { headerName: 'Id', field: 'sitAgreementsBenefId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsBenefG', width: 100, defaultVisibility: false},
      { headerName: 'Identyfikator', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: '% udziału', field: 'PercentShare', width: 100, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Odbiorca rozl.', field: 'ForBilling', width: 110, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Sposób rozl.', field: 'BillingType', width: 100, suppressMenu: true},
      { headerName: 'Rola', field: 'BenefRoleIdent', width: 100, suppressMenu: true}
    ];
    this.gridColumnsDefinition["sitAgreementCustomers"] = [
      { headerName: 'Id', field: 'sitAgreementCustomersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementCustomersG', width: 100, defaultVisibility: false},
      { headerName: 'Identyfikator', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: '% udziału', field: 'PercentShare', width: 100, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Odbiorca rozl.', field: 'ForBilling', width: 110, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Rola', field: 'RoleIdent', width: 100, suppressMenu: true}
    ];
    this.gridColumnsDefinition["sitAgreementsPublications"] = [
      { headerName: 'Id', field: 'sitAgreementsPublicationsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsPublicationsG', width: 100, defaultVisibility: false},
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 150},
      { headerName: 'Tytuł', field: 'Title', width: 300},
      { headerName: 'Tytuł oryginalny', field: 'OriginalTitle', width: 300},
      { headerName: 'Typ daty licencji', field: 'RightsDateFromTypeIdent', width: 150},
      { headerName: 'Początek licencji', field: 'RightsDateFrom', filter: 'agTextColumnFilter', width: 120, renderType: 'date'},
      { headerName: 'Koniec licencji', field: 'RightsDateTo', filter: 'agTextColumnFilter', width: 120, renderType: 'date'},
      { headerName: 'Sprzedaż do', field: 'RightsToSellDateTo', filter: 'agTextColumnFilter', width: 120, renderType: 'date'},
    ];
    this.gridColumnsDefinition["sitAgreementsAdvances"] = [
      { headerName: 'Id', field: 'sitAgreementsAdvancesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsAdvancesG', width: 100, defaultVisibility: false},
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 150},
      { headerName: 'Tytuł', field: 'Title', width: 300},
      { headerName: 'Beneficjent', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true},      
      { headerName: 'Kwota zal.', field: 'Amount', width: 100, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Kwota rozl.', field: 'ClearedAmount', width: 100, type: 'numericColumn', renderType: 'number', suppressMenu: true}
    ];
    this.gridColumnsDefinition["sitAgreementsPublicationsFormsOfRelease"] = [
      { headerName: 'Id', field: 'sitAgreementsPublicationsFormsOfReleaseId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsPublicationsFormsOfReleaseG', width: 100, defaultVisibility: false},
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', width: 150},
      { headerName: 'Opis', field: 'FormOfReleaseDesc', width: 300},
      { headerName: ' ', field: 'IsActive', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered"}
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

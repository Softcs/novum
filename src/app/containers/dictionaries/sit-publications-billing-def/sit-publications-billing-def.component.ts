import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-billing-def',
  templateUrl: './sit-publications-billing-def.component.html',
  styleUrls: ['./sit-publications-billing-def.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsBillingDefComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublicationsBillingDef"] = [
      { headerName: 'Id', field: 'sitPublicationsBillingDefId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsBillingDefG', width: 100, defaultVisibility: false },       
      { headerName: 'Numer umowy', field: 'AgreementNo', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Publikacja', field: 'PublicationIdent', tooltipField: 'PublicationIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Od dnia', field: 'DateFrom', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Do dnia', field: 'DateTo', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Rozl.jako grupę', field: 'CalcAsGroup', headerTooltip: 'Rozliczaj jako grupę.', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Formy wydań', field: 'FormOfReleaseIdents', tooltipField: 'FormOfReleaseIdents', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Status', field: 'StatusValueName', filter: 'agTextColumnFilter', width: 150 }
    ];
    this.gridColumnsDefinition["sitPublicationsBillingDefForms"] = [
      { headerName: 'Id', field: 'sitPublicationsBillingDefFormsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsBillingDefFormsG', width: 100, defaultVisibility: false },       
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', width: 150},
      { headerName: 'Typ rozliczenia', field: 'BillingTypeIdent', width: 150},
      { headerName: 'Rodzaj ceny', field: 'PriceTypeName', width: 150}
    ];
    this.gridColumnsDefinition["sitPublicationsBillingDefThrs"] = [
      { headerName: 'Id', field: 'sitPublicationsBillingDefThrsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsBillingDefThrsG', width: 100, defaultVisibility: false },        
      { headerName: 'Powyżej ilości', field: 'Threshold', width: 100, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Stawka(% lub kwota)', field: 'Rate', width: 150, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Tant./cena min.', field: 'MinPrice', width: 110, type: 'numericColumn', renderType: 'number', suppressMenu: true},
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true },
    ];
   }
}

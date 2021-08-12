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
      { headerName: 'Numer umowy', field: 'AgreementNo', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Publikacja', field: 'PublicationIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Data od (rozliczenia)', field: 'DateFrom', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Data od (umowy)', field: 'AgreementDate', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Formy wydań', field: 'FormOfReleaseIdents', tooltipField: 'FormOfReleaseIdents', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis rozliczenia', field: 'PublicationsBillingDefDesc', filter: 'agTextColumnFilter', width: 300 },

    ];
    this.gridColumnsDefinition["sitPublicationsBillingDefForms"] = [
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', width: 150},
      { headerName: 'Typ rozliczenia', field: 'BillingTypeIdent', width: 150},
      { headerName: 'Rodzaj ceny', field: 'PriceTypeName', width: 150}
    ];
    this.gridColumnsDefinition["sitPublicationsBillingDefThrs"] = [
      { headerName: 'Próg', field: 'Threshold', width: 150, type: 'numericColumn', renderType: 'number'},
      { headerName: 'Stawka(% lub kwota)', field: 'Rate', width: 150, type: 'numericColumn', renderType: 'number'}
    ];
   }
}
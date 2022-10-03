import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-billing-params-def',
  templateUrl: './sit-publications-billing-params-def.component.html',
  styleUrls: ['./sit-publications-billing-params-def.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsBillingParamsDefComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublicationsBillingTypes"] = [
      { headerName: 'Id', field: 'sitPublicationsBillingTypesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsBillingTypesG', width: 100, defaultVisibility: false },
      { headerName: 'Typ rozliczenia', field: 'BillingTypeIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'BillingTypeName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Procentowy', field: 'IsPercent', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered", suppressMenu: true}
    ];

    this.gridColumnsDefinition["sitAgreementsBenefRoles"] = [
      { headerName: 'Id', field: 'sitAgreementsBenefRolesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAgreementsBenefRolesG', width: 100, defaultVisibility: false },
      { headerName: 'Rola', field: 'BenefRoleIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'BenefRoleName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Aktywny', field: 'IsActive', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered", suppressMenu: true},
      { headerName: 'Domyślny', field: 'IsDefault', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered", suppressMenu: true},
    ];
   }
}

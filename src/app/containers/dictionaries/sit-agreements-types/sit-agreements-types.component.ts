import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-agreements-types',
  templateUrl: './sit-agreements-types.component.html',
  styleUrls: ['./sit-agreements-types.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAgreementsTypesComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {

    this.gridColumnsDefinition["sitAgreementsTypes"] = [
      { headerName: 'Id', field: 'sitAgreementsTypesId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsTypesG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'AgreementsTypeIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwa', field: 'AgreementsTypeName', filter: 'agTextColumnFilter', width: 300 },
    ];

  }

}

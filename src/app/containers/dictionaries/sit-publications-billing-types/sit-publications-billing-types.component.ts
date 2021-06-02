import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-billing-types',
  templateUrl: './sit-publications-billing-types.component.html',
  styleUrls: ['./sit-publications-billing-types.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsBillingTypesComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublicationsBillingTypes"] = [
      { headerName: 'Typ rozliczenia', field: 'BillingTypeIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'BillingTypeName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Procentowy', field: 'IsPercent', width: 100, renderType: 'checkbox'}
    ]
   }
}


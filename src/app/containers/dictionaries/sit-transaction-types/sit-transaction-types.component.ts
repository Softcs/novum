import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-transaction-types',
  templateUrl: './sit-transaction-types.component.html',
  styleUrls: ['./sit-transaction-types.component.scss'],
  host: {class: 'router-flex sit-transaction-types-component'},
  encapsulation : ViewEncapsulation.None,
})

export class SitTransactionTypesComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitTransactionTypes"] = [
      { headerName: 'Id', field: 'sitTransactionTypesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitTransactionTypesG', width: 100, defaultVisibility: false},
      { headerName: 'Identyfikator', field: 'TransactionTypeIdent', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Opis', field: 'TransactionTypeDesc',width: 300 },
    ];
  }
}



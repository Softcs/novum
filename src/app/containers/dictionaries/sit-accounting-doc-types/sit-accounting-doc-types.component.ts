import { Component, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-accounting-doc-types',
  templateUrl: './sit-accounting-doc-types.component.html',
  styleUrls: ['./sit-accounting-doc-types.component.scss'],
  host: {class: 'router-flex sit-accounting-doc-types-component'},
  encapsulation : ViewEncapsulation.None, 
})
export class SitAccountingDocTypesComponent extends SitDictBaseComponent {
 
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitAccountingDocTypes"] = [
      { headerName: 'Id', field: 'sitAccountingDocTypesId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAccountingDocTypesG',width: 150, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'AccountingDocIdent', width: 120,},
      { headerName: 'Nazwa', field: 'AccountingDocName', width: 300, },
    
    ];
  }

}
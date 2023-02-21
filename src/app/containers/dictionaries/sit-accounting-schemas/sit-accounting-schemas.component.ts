import { Component, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-accounting-schemas',
  templateUrl: './sit-accounting-schemas.component.html',
  styleUrls: ['./sit-accounting-schemas.component.scss'],
  host: {class: 'router-flex sit-accounting-schemas-component'},
  encapsulation : ViewEncapsulation.None,  
})
export class SitAccountingSchemasComponent extends SitDictBaseComponent {
 
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitAccountingSchemas"] = [
      { headerName: 'Id', field: 'sitAccountingSchemasId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAccountingSchemasG',width: 150, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'AccountingSchemaIdent', width: 120,},
      { headerName: 'Nazwa', field: 'AccountingSchemaDesc', width: 300, },
    
    ];
  }

}

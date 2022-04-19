import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-params4-employees-settlements',
  templateUrl: './sit-params4-employees-settlements.component.html',
  styleUrls: ['./sit-params4-employees-settlements.component.scss'],
  host: {class: 'router-flex'}
})
export class SitParams4EmployeesSettlementsComponent extends SitDictBaseComponent {
 
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitParams4EmployeesSettlements"] = [
      { headerName: 'GUID', field: '__Identity__', width: 100, defaultVisibility: false },
      { headerName: 'Od dnia', field: 'DateFrom', width: 100 },
      { headerName: 'ZUS', field: 'ZUS', width: 120, type: 'numericColumn', agr: 'sum', renderType: 'number'},
      { headerName: 'ZUS - emeryt', field: 'ZUSEmer', width: 120, type: 'numericColumn', agr: 'sum', renderType: 'number'},
      { headerName: 'PPK', field: 'PPK', width: 100, type: 'numericColumn', agr: 'sum', renderType: 'number'},
    ];
  }

}
import { Component  } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-warehouses',
  templateUrl: './sit-warehouses.component.html',
  styleUrls: ['./sit-warehouses.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWarehousesComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitWarehouses"] = [
      { headerName: 'sitWarehousesId', field: 'sitWarehousesId', type: 'numericColumn', sortable: true, filter: 'agNumberColumnFilter', defaultVisibility: false},
      { headerName: 'sitWarehousesG', field: 'sitWarehousesG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'WarehouseIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'WarehouseName', filter: 'agTextColumnFilter', width: 200 },
    ]

   }
}

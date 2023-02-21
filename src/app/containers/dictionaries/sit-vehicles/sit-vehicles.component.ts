import { Component, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-vehicles',
  templateUrl: './sit-vehicles.component.html',
  styleUrls: ['./sit-vehicles.component.scss'],
  host: {class: 'router-flex sit-vehicles-component'},
  encapsulation : ViewEncapsulation.None,  
})
export class SitVehiclesComponent extends SitDictBaseComponent {
 
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitVehicles"] = [
      { headerName: 'Id', field: 'sitVehiclesId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitVehiclesG',width: 150, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'VehicleIdent', width: 120,},
      { headerName: 'Opis', field: 'VehicleDesc', width: 300, },
      { headerName: 'Nr rej.', field: 'RegNo', width: 100,},
      { headerName: 'VIN', field: 'VIN', width: 150,},
    
    ];
  }

}
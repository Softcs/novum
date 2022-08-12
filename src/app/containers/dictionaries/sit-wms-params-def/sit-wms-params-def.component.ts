import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-wms-params-def',
  templateUrl: './sit-wms-params-def.component.html',
  styleUrls: ['./sit-wms-params-def.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWmsParamsDefComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitWMSPackingContainersTypes"] = [
      { headerName: 'Id', field: 'sitWMSPackingContainersTypesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitWMSPackingContainersTypesG', width: 100, defaultVisibility: false },  
      { headerName: 'Typ pojemnika', field: 'ContainerTypeIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'ContainerTypeName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Prefix dla numeru', field: 'NumberPrefix', filter: 'agTextColumnFilter', width: 150, suppressMenu: true },
      { headerName: 'Max waga', field: 'WeightLimit', width: 150, suppressMenu: true},
    ];

   }
}

import { Component  } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-locations',
  templateUrl: './sit-locations.component.html',
  styleUrls: ['./sit-locations.component.scss'],
  host: {class: 'router-flex'}
})
export class SitLocationsComponent extends SitDictBaseComponent {
   public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitLocations"] = [
      { headerName: 'Id', field: 'sitLocationsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitLocationsG', filter: 'agTextColumnFilter', width: 100, defaultVisiblity: false },
      { headerName: 'Identyfikator', field: 'LocationIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwa', field: 'LocationName', filter: 'agTextColumnFilter', width: 300 },
      //{ headerName: 'Aktywny', field: 'IsActive', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100  },

    ];
  }
}

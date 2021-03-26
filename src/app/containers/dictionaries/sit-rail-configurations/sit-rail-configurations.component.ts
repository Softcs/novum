import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
    selector: 'sit-rail-configurations',
    templateUrl: 'sit-rail-configurations.component.html',
    styleUrls: ['sit-rail-configurations.component.scss'],
    host: {class: 'router-flex'}
})
export class SitRailConfigurationsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitRailConfigurations"] = [
      { headerName: 'CompanyIdent', field: 'CompanyIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'OperationIdent', field: 'OperationIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'IsActive', field: 'IsActive', sortable: true, flex: 1, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered"  },
    ];

  }
}

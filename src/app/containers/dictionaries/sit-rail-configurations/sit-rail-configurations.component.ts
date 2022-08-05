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
      { headerName: 'Id firmy', field: 'CompanyIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Identyfikator operacji', field: 'OperationIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Aktywna', field: 'IsActive', sortable: true, flex: 1, filter: 'agTextColumnFilter', autoHeight: true, renderType: 'checkbox', cellClass: "grid-cell-centered"  },
    ];

    this.gridColumnsDefinition["sitSimpleMethodConfigurations"] = [
      { headerName: 'Id firmy', field: 'CompanyIdent', sortable: true, width: 150 , filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Nazwa firmy', field: 'CompanyDescription', sortable: true, width: 200, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Użytkownik', field: 'UserLogin', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Identyfikator operacji', field: 'OperationIdent', sortable: true, width: 200, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'Aktywna', field: 'IsActive', sortable: true, width: 100, filter: 'agTextColumnFilter', autoHeight: true, renderType: 'checkbox', cellClass: "grid-cell-centered"},
      { headerName: 'Procedura transformująca', field: 'TransformProcedure', filter: 'agTextColumnFilter', width: 300, },
      { headerName: 'Źródło', field: 'Source', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Timeout', field: 'Timeout', filter: 'agTextColumnFilter', width: 100 },
    ];

  }
}

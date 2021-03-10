import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-statuses',
  templateUrl: './sit-statuses.component.html',
  styleUrls: ['./sit-statuses.component.scss'],
  host: {class: 'router-flex'}
})
export class SitStatusesComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
   this.gridColumnsDefinition["sitStatuses"] = [
      { headerName: 'sitStatusesG', field: 'sitStatusesG', flex: 1 },
      { headerName: 'StatusIdent', field: 'StatusIdent', flex: 1},
      { headerName: 'StatusName', field: 'StatusName',toolTip: 'StatusName', flex: 1 },
      { headerName: 'TableName', field: 'TableName', flex: 1 },
      { headerName: 'ColumnName', field: 'ColumnName', flex: 1 },
    ];

    this.gridColumnsDefinition["sitStatusValues"] = [

      { headerName: 'ValueIdent', field: 'ValueIdent', type: "numericColumn", filter: 'agNumberColumnFilter', flex: 1  },
      { headerName: 'ValueName', field: 'ValueName', filter: 'agTextColumnFilter', flex: 1  },
      { headerName: 'Order', field: 'Order', type: "numericColumn", filter: 'agNumberColumnFilter', flex: 1  },
      { headerName: 'IsDefault', field: 'IsDefault', filter: 'agTextColumnFilter', flex: 1  },

    ];
    this.gridColumnsDefinition["sitStatusValuesTransitions"] = [


      { headerName: 'sitStatusValuesId_From', field: 'sitStatusValuesId_From', type: "numericColumn", filter: 'agNumberColumnFilter', flex: 1  },
      { headerName: 'sitStatusValuesId_To', field: 'sitStatusValuesId_To', type: "numericColumn", filter: 'agNumberColumnFilter', flex: 1  },
      { headerName: 'IsActive', field: 'IsActive', type: "numericColumn", filter: 'agNumberColumnFilter', flex: 1  },
      { headerName: 'ValueIdent as ValueIdent_From', field: 'ValueIdent as ValueIdent_From', type: "numericColumn", filter: 'agNumberColumnFilter', flex: 1  },
      { headerName: 'ValueName as ValueName_From', field: 'ValueName as ValueName_From', filter: 'agTextColumnFilter', flex: 1 },
      { headerName: 'ValueIdent as ValueIdent_To', field: 'ValueIdent as ValueIdent_To', type: "numericColumn", filter: 'agNumberColumnFilter', flex: 1  },
      { headerName: 'ValueName as ValueName_To', field: 'ValueName as ValueName_To', filter: 'agTextColumnFilter', flex: 1  },

    ];

   }

 }

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
      { headerName: 'GUID', field: 'sitStatusesG', width: 150 },
      { headerName: 'Identyfikator', field: 'StatusIdent', flex: 1 },
      { headerName: 'Nazwa', field: 'StatusName',toolTip: 'Nazwa statusu', width: 250 },
      { headerName: 'Tabela', field: 'TableName', width: 150 },
      { headerName: 'Nazwa kolumny', field: 'ColumnName', width: 200 }
    ];

    this.gridColumnsDefinition["sitStatusValues"] = [
      { headerName: 'Wartość', field: 'ValueIdent', filter: 'agNumberColumnFilter', width: 100   },
      { headerName: 'Nazwa', field: 'ValueName', filter: 'agTextColumnFilter', width: 250  },
      { headerName: 'Kolejność', field: 'Order', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100, sort: 'asc' },
      { headerName: 'Domyślna', field: 'IsDefault', filter: 'agTextColumnFilter', width: 100, renderType: 'checkbox' }
    ];

    this.gridColumnsDefinition["sitStatusValuesTransitions"] = [
      { headerName: 'Wartość początkowa', field: 'ValueIdent_From', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'ValueName_From', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Wartość końcowa', field: 'ValueIdent_To', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'ValueName_To', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Aktywne', field: 'IsActive', renderType: 'checkbox', width: 100 }
    ];
  }
}

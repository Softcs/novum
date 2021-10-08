import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-customers-groups',
  templateUrl: './sit-customers-groups.component.html',
  styleUrls: ['./sit-customers-groups.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomersGroupsComponent extends SitDictBaseComponent {
  groupDefaultExpanded;
  getDataPath;
  autoGroupColumnDef;  

  public prepareColumnsDefinitnion() {
    
    this.autoGroupColumnDef = {
      headerName: 'Struktura',
      minWidth: 400,
      cellRendererParams: { suppressCount: true },
      sort:'asc'
    };
    this.groupDefaultExpanded = -1;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

    this.gridColumnsDefinition["sitCustomersGroups"] = [
      { headerName: 'Id', field: 'sitCustomersGroupsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomersGroupsG', width: 100, defaultVisibility: false },
      { headerName: 'Opis', field: 'CustomersGroupName', width: 300, sortable: false},
    ];

    this.gridColumnsDefinition["sitCustomerInCustomersGroups"] = [
      { headerName: 'Id', field: 'sitCustomerInCustomersGroupsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomerInCustomersGroupsG', width: 100, defaultVisibility: false },
      { headerName: 'Kontrahent', field: 'CustIdent', width: 120 },
      { headerName: 'Nazwa kontrahenta', field: 'CustName', width: 300 },
      { headerName: 'Data od', field: 'DateFrom', filter: 'agTextColumnFilter', width: 100 },
    ];
  }
}

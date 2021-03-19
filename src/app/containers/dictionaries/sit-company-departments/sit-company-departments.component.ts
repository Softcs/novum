import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-company-departments',
  templateUrl: './sit-company-departments.component.html',
  styleUrls: ['./sit-company-departments.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCompanyDepartmentsComponent extends SitDictBaseComponent  {

  groupDefaultExpanded;
  getDataPath;
  autoGroupColumnDef;

  public prepareColumnsDefinitnion() {

    this.autoGroupColumnDef = {
      headerName: 'Działy firmy',
      minWidth: 200,
      cellRendererParams: { suppressCount: true },
    };
    this.groupDefaultExpanded = -1;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

    this.gridColumnsDefinition["sitCompanyDepartments"] = [
      { headerName: 'ID', field: 'sitCompanyDepartmentsId', filter: 'agNumberColumnFilter',defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCompanyDepartmentsG', filter: 'agTextColumnFilter',defaultVisibility: false },
      // { headerName: 'Identyfikator', field: 'CompanyDepartmentIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Opis', field: 'CompanyDepartmentDesc', filter: 'agTextColumnFilter', width: 300 },
      // { headerName: 'dataPath', field: 'dataPath', filter: 'agTextColumnFilter' },
    ];

  }
}

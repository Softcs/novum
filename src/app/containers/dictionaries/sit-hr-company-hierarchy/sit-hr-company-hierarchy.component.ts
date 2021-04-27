import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';


@Component({
  selector: 'app-sit-hr-company-hierarchy',
  templateUrl: './sit-hr-company-hierarchy.component.html',
  styleUrls: ['./sit-hr-company-hierarchy.component.scss'],
  host: {class: 'router-flex'}
})
export class SitHRCompanyHierarchyComponent  extends SitDictBaseComponent {
  groupDefaultExpanded;
  getDataPath;
  autoGroupColumnDef;

  public prepareColumnsDefinitnion() {

    this.autoGroupColumnDef = {
      headerName: 'Struktura',
      minWidth: 400,
      cellRendererParams: { suppressCount: true },
    };
    this.groupDefaultExpanded = -1;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

   this.gridColumnsDefinition["sitHRCompanyHierarchy"] = [
     { headerName: 'Opis', field: 'HRCompanyHierarchyDesc', filter: 'agTextColumnFilter', width: 300 },
   ];
  }
}

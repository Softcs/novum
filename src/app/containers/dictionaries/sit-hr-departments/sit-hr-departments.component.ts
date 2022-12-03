import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-hr-departments',
  templateUrl: './sit-hr-departments.component.html',
  styleUrls: ['./sit-hr-departments.component.scss'],
  host: {class: 'router-flex sit-hr-departments'}
})
export class SitHRDepartmentsComponent extends SitDictBaseComponent {
   public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitHRDepartments"] = [
      { headerName: 'Identyfikator', field: 'HRDepartmentIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'HRDepartmentName', filter: 'agTextColumnFilter' },
      { headerName: 'Identyfikator zewnętrzny', field: 'ExtIdent01', filter: 'agTextColumnFilter' },
    ];
   }
 }

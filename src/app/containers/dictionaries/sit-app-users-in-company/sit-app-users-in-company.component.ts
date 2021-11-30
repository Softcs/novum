import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-app-users-in-company',
  templateUrl: './sit-app-users-in-company.component.html',
  styleUrls: ['./sit-app-users-in-company.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAppUsersInCompanyComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitAppUsers"] = [
      { headerName: 'Id', field: 'sitAppUsersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAppUsersG', width: 100, defaultVisibility: false },
      { headerName: 'Login', field: 'UserLogin', width: 200 },
      { headerName: 'Imię', field: 'Name', width: 200 },
      { headerName: 'Nazwisko', field: 'SurName', width: 200 },
      { headerName: 'e-mail', field: 'email', width: 200 },
      { headerName: 'Aktywny', field: 'IsActive', renderType: 'checkbox', suppressMenu: true, width: 80},
      { headerName: 'Admin', field: 'IsAdmin', renderType: 'checkbox', suppressMenu: true, width: 80},
      { headerName: 'Pracownik', field: 'EmployeeName', width: 200 },
    ];

    this.gridColumnsDefinition["sitRightsGroupUsers"] = [
      { headerName: 'Identyfikator', field: 'RightsGroupIdent'},
      { headerName: 'Nazwa', field: 'RightsGroupName'},
    ];

    this.gridColumnsDefinition["sitHRDepartmentsUsers"] = [
      { headerName: 'Identyfikator', field: 'HRDepartmentIdent', width: 150},
      { headerName: 'Nazwa', field: 'HRDepartmentName', width: 300},
    ];
  }
}

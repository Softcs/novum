import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-app-users',
  templateUrl: './sit-app-users.component.html',
  styleUrls: ['./sit-app-users.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAppUsersComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion() {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    
    this.gridColumnsDefinition["sitAppUsers"] = [
      { headerName: 'Id', field: 'sitAppUsersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitAppUsersG', width: 100, defaultVisiblity: false },
      { headerName: 'Login', field: 'UserLogin', width: 200 },
      { headerName: 'Imię', field: 'Name', width: 200 },
      { headerName: 'Nazwisko', field: 'SurName', width: 200 },
      { headerName: 'e-mail', field: 'email', width: 200 },
      { headerName: 'MenuId', field: 'sitMenuId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisiblity: false },
      { headerName: 'Menu', field: 'Symbol', width: 100 },
      { headerName: 'Aktywny', field: 'IsActive', cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100, suppressMenu: true  },
      { headerName: 'Administrator', field: 'IsAdmin', cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100, suppressMenu: true  },


    ];

    this.gridColumnsDefinition["sitAppUserCompanies"] = [
      { headerName: 'sitAppUserCompaniesId', field: 'sitAppUserCompaniesId', type: 'numericColumn', filter: 'agNumberColumnFilter', flex: 1, defaultVisiblity: false },
      { headerName: 'sitAppUserCompaniesG', field: 'sitAppUserCompaniesG', flex: 1, defaultVisiblity: false },
      { headerName: 'Identyfikator', field: 'CompanyIdent', flex: 2 },
      { headerName: 'Nazwa', field: 'CompanyDescription', flex: 3 },
      { headerName: 'Plik konfig.', field: 'ConfigFile', flex: 1 },
      { headerName: 'Domyślna', field: 'IsDefault', cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", flex: 1  },

    ];

   }
}

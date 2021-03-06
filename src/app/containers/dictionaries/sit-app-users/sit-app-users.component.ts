import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { GridService } from '@app/_services/grid.service';
@Component({
  selector: 'sit-app-users',
  templateUrl: './sit-app-users.component.html',
  styleUrls: ['./sit-app-users.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAppUsersComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  frameworkComponents;
  popupParent;
  columnDefs;
  columnDefsAppUserCompanies;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Id', field: 'sitAppUsersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitAppUsersG', width: 100 },
      { headerName: 'Login', field: 'UserLogin', width: 200 },
      { headerName: 'Imię', field: 'Name', width: 200 },
      { headerName: 'Nazwisko', field: 'SurName', width: 200 },
      { headerName: 'e-mail', field: 'email', width: 200 },
      { headerName: 'MenuId', field: 'sitMenuId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80 },
      { headerName: 'Menu', field: 'Symbol', width: 100 },
      { headerName: 'Aktywny', field: 'IsActive', cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100, suppressMenu: true  },
      { headerName: 'Administrator', field: 'IsAdmin', cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100, suppressMenu: true  },


    ];

    this.columnDefsAppUserCompanies = [
      { headerName: 'sitAppUserCompaniesId', field: 'sitAppUserCompaniesId', type: 'numericColumn', filter: 'agNumberColumnFilter', flex: 1 },
      { headerName: 'sitAppUserCompaniesG', field: 'sitAppUserCompaniesG', flex: 1 },
      { headerName: 'Identyfikator', field: 'CompanyIdent', flex: 2 },
      { headerName: 'Nazwa', field: 'CompanyDescription', flex: 3 },
      { headerName: 'Plik konfig.', field: 'ConfigFile', flex: 1 },
      { headerName: 'Domyślna', field: 'IsDefault', cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", flex: 1  },

    ];

   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitAppUsersId')) {
      params.columnApi.setColumnsVisible(['sitAppUsersId','sitAppUsersG','sitMenuId'],false)
    }

    if (params.columnApi.getColumn('sitAppUserCompaniesId')) {
      params.columnApi.setColumnsVisible(['sitAppUserCompaniesId','sitAppUserCompaniesG'],false)
    }
  }


}

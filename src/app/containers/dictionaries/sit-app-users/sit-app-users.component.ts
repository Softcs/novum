import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
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
  columnDefsRightsGroupUsers;

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
      { headerName: 'Id', field: 'sitAppUsersId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitAppUsersG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Imię', field: 'Name', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwisko', field: 'SurName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'e-mail', field: 'email', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'MenuId', field: 'sitMenuId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Menu', field: 'Symbol', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Aktywny', field: 'IsActive', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100  },

    ];

    this.columnDefsAppUserCompanies = [
      { headerName: 'sitAppUserCompaniesId', field: 'sitAppUserCompaniesId', type: 'numericColumn', filter: 'agTextColumnFilter', flex: 1 },
      { headerName: 'sitAppUserCompaniesG', field: 'sitAppUserCompaniesG', filter: 'agTextColumnFilter', flex: 1 },
      { headerName: 'Identyfikator', field: 'CompanyIdent', filter: 'agTextColumnFilter', flex: 2 },
      { headerName: 'Nazwa', field: 'CompanyDescription', filter: 'agTextColumnFilter', flex: 3 },
      { headerName: 'Plik konfig.', field: 'ConfigFile', filter: 'agTextColumnFilter', flex: 1 },
      { headerName: 'Domyślna', field: 'IsDefault', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", flex: 1  },

    ];

    this.columnDefsRightsGroupUsers = [
      { headerName: 'Identyfikator', field: 'RightsGroupIdent', filter: 'agTextColumnFilter'},
      { headerName: 'Nazwa', field: 'RightsGroupName', filter: 'agTextColumnFilter'},
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

import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

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

  defaultColDef;
  rowSelection;
  popupParent;

  gridApi;
  gridColumnApi;
  columnDefs;

  gridApiAppUserCompanies;
  gridColumnApiAppUserCompanies;
  columnDefsAppUserCompanies;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      // flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true
    };

    this.columnDefs = [
      { headerName: 'sitAppUsersId', field: 'sitAppUsersId', type: 'numericColumn', filter: 'agTextColumnFilter' },
      { headerName: 'sitAppUsersG', field: 'sitAppUsersG', filter: 'agTextColumnFilter' },
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter' },
      { headerName: 'Imię', field: 'Name', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwisko', field: 'SurName', filter: 'agTextColumnFilter' },
      { headerName: 'e-mail', field: 'email', filter: 'agTextColumnFilter' },
      { headerName: 'sitMenuId', field: 'sitMenuId', type: 'numericColumn', filter: 'agTextColumnFilter' },
      { headerName: 'IsActive', field: 'IsActive', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered"  },

    ];
    this.columnDefsAppUserCompanies = [
      { headerName: 'sitAppUserCompaniesId', field: 'sitAppUserCompaniesId', type: 'numericColumn', filter: 'agTextColumnFilter' },
      { headerName: 'sitAppUserCompaniesG', field: 'sitAppUserCompaniesG', filter: 'agTextColumnFilter' },
      { headerName: 'Symbol', field: 'CompanyIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'CompanyDescription', filter: 'agTextColumnFilter' },
      { headerName: 'Plik konfig.', field: 'ConfigFile', filter: 'agTextColumnFilter' },
      { headerName: 'Def', field: 'Def', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered"  },

    ];
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };
   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitAppUsersId','sitAppUsersG'],false)

  }

  onGridReadyAppUserCompanies(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitAppUserCompaniesId','sitAppUserCompaniesG'],false)

  }  

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitAppUsers');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedAppUserCompanies(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitAppUserCompanies');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(event) {

  }
}

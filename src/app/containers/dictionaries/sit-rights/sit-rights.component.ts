import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'app-sit-rights',
  templateUrl: './sit-rights.component.html',
  styleUrls: ['./sit-rights.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRightsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;

  popupParent;
  frameworkComponents;
  rowClassRules;
  columnDefs;
  columnDefsDictionaries;
  columnDefsDatasources;
  columnDefsActions;
  columnDefsRightsGroupUsers;
  columnDefsLocations;
  columnDefsAgreementsTypes;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Id', field: 'sitRightsGroupsId', type: "numericColumn", sortable: true, resizable: true, filter: 'agNumberColumnFilter',width: 80 },
      { headerName: 'GUID', field: 'sitRightsGroupsG', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'RightsGroupIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa grupy', field: 'RightsGroupName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Poufne umowy', field: 'ConfidentialAgreements', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },
    ]

    this.columnDefsDictionaries = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDictionariesId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysDictionariesG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'DictionaryIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DictionaryName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 130 },

    ];

    this.columnDefsDatasources = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDatasourcesId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysDatasourcesG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'DatasourceIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DatasourceName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];

    this.columnDefsActions = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysActionsId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitSysActionsG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'ActionIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'ActionName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];

    this.columnDefsRightsGroupUsers = [
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter'},
      { headerName: 'Imię', field: 'Name', filter: 'agTextColumnFilter'},
      { headerName: 'Nazwisko', field: 'SurName', filter: 'agTextColumnFilter'},
    ];

    this.columnDefsLocations = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitLocationsId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitLocationsG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'LocationIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'LocationName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];

    this.columnDefsAgreementsTypes = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitAgreementsTypesId', filter: 'agTextColumnFilter' },
      { headerName: 'GUID', field: 'sitAgreementsTypesG', filter: 'agTextColumnFilter' },
      { headerName: "Identyfikator", field: 'AgreementsTypeIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'AgreementsTypeName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];

   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitRightsGroupsG')) {
      params.columnApi.setColumnsVisible(['sitRightsGroupsId','sitRightsGroupsG'],false)
    }

    if (params.columnApi.getColumn('sitSysDictionariesG')) {
      params.columnApi.setColumnsVisible(['sitSysDictionariesId', 'sitSysDictionariesG'], false)
    }

    if (params.columnApi.getColumn('sitSysDatasourcesG')) {
      params.columnApi.setColumnsVisible(['sitSysDatasourcesId', 'sitSysDatasourcesG'], false)
    }

    if (params.columnApi.getColumn('sitSysActionsG')) {
      params.columnApi.setColumnsVisible(['sitSysActionsId', 'sitSysActionsG'], false)
    }

    if (params.columnApi.getColumn('sitLocationsG')) {
      params.columnApi.setColumnsVisible(['sitLocationsId', 'sitLocationsG'], false)
    }

    if (params.columnApi.getColumn('sitAgreementsTypesG')) {
      params.columnApi.setColumnsVisible(['sitAgreementsTypesId', 'sitAgreementsTypesG'], false)
    }
  }


}

import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-rights',
  templateUrl: './sit-rights.component.html',
  styleUrls: ['./sit-rights.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRightsComponent extends SitDictBaseComponent {
 
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitRightsGroups"] = [
      { headerName: 'Id', field: 'sitRightsGroupsId', type: "numericColumn", sortable: true, resizable: true, filter: 'agNumberColumnFilter',width: 80, defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitRightsGroupsG', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100, defaultVisiblity: false },
      { headerName: 'Identyfikator', field: 'RightsGroupIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa grupy', field: 'RightsGroupName', sortable: true, resizable: true, filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Poufne umowy', field: 'ConfidentialAgreements', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },
    ]
    this.gridColumnsDefinition["sitSysDictionaries"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDictionariesId', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitSysDictionariesG', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: "Identyfikator", field: 'DictionaryIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DictionaryName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 130 },

    ];
    this.gridColumnsDefinition["sitSysDatasources"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDatasourcesId', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitSysDatasourcesG', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: "Identyfikator", field: 'DatasourceIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DatasourceName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];
    this.gridColumnsDefinition["sitSysActions"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysActionsId', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitSysActionsG', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: "Identyfikator", field: 'ActionIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'ActionName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];
    this.gridColumnsDefinition["sitSysAcsitRightsGroupUserstions"] = [
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter'},
      { headerName: 'Imię', field: 'Name', filter: 'agTextColumnFilter'},
      { headerName: 'Nazwisko', field: 'SurName', filter: 'agTextColumnFilter'},
    ];
    this.gridColumnsDefinition["sitLocations"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitLocationsId', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitLocationsG', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: "Identyfikator", field: 'LocationIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'LocationName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];
    this.gridColumnsDefinition["sitAgreementsTypes"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitAgreementsTypesId', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitAgreementsTypesG', filter: 'agTextColumnFilter', defaultVisiblity: false },
      { headerName: "Identyfikator", field: 'AgreementsTypeIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'AgreementsTypeName', filter: 'agTextColumnFilter'},
      { headerName: 'Prawo', field: 'HasRight', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered",width: 80 },

    ];

   }
}

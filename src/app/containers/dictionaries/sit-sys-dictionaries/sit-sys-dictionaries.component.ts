import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-sys-dictionaries',
  templateUrl: './sit-sys-dictionaries.component.html',
  styleUrls: ['./sit-sys-dictionaries.component.scss'],
  host: {class: 'router-flex sit-sys-dictionaries'}
})
export class SitSysDictionariesComponent extends SitDictBaseComponent {

  json: any;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitSysDictionaries"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDictionariesId', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitSysDictionariesG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: "Identyfikator", field: 'DictionaryIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DictionaryName', filter: 'agTextColumnFilter'},
      { headerName: 'All synch', field: 'IsAllSynch', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered", suppressMenu: true},

    ];
    this.gridColumnsDefinition["sitSysDatasources"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDatasourcesId', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitSysDatasourcesG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: "Identyfikator", field: 'DatasourceIdent', filter: 'agTextColumnFilter', width: 300},
      { headerName: "Nazwa", field: 'DatasourceName', filter: 'agTextColumnFilter', width: 300},

    ];
    this.gridColumnsDefinition["sitSysActions"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysActionsId', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitSysActionsG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: "Identyfikator", field: 'ActionIdent', filter: 'agTextColumnFilter', width: 200},
      { headerName: "Nazwa", field: 'ActionName', filter: 'agTextColumnFilter', width: 200},

    ];
   }

   activeRowChanged(activeRow) {
    this.json = activeRow?.DictionaryInfo == null ? JSON.parse('') :  JSON.parse(activeRow.DictionaryInfo) ;
  }
}

import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-sys-dictionaries',
  templateUrl: './sit-sys-dictionaries.component.html',
  styleUrls: ['./sit-sys-dictionaries.component.scss'],
  host: {class: 'router-flex'}
})
export class SitSysDictionariesComponent extends SitDictBaseComponent {

  json;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitSysDictionaries"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDictionariesId', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitSysDictionariesG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: "Identyfikator", field: 'DictionaryIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DictionaryName', filter: 'agTextColumnFilter'},

    ];
    this.gridColumnsDefinition["sitSysDatasources"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysDatasourcesId', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitSysDatasourcesG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: "Identyfikator", field: 'DatasourceIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'DatasourceName', filter: 'agTextColumnFilter'},

    ];
    this.gridColumnsDefinition["sitSysActions"] = [
      { headerName: 'Id', type: 'numericColumn', field: 'sitSysActionsId', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitSysActionsG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: "Identyfikator", field: 'ActionIdent', filter: 'agTextColumnFilter'},
      { headerName: "Nazwa", field: 'ActionName', filter: 'agTextColumnFilter'},

    ];
   }

   activeRowChanged(activeRow) {
    this.json = activeRow?.DictionaryInfo == null ? JSON.parse('') :  JSON.parse(activeRow.DictionaryInfo) ;
  }
}

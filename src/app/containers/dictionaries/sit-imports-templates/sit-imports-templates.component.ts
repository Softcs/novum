import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-imports-templates',
  templateUrl: './sit-imports-templates.component.html',
  styleUrls: ['./sit-imports-templates.component.scss'],
  host: {class: 'router-flex'}
})
export class SitImportsTemplatesComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitImportsTemplates"] = [
      { headerName: 'Id', field: 'sitImportsTemplatesId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitImportsTemplatesG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },     
      { headerName: 'Identyfikator szablonu', field: 'ImportTemplateIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'ImportTemplateName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Plik wzorca importu', field: 'TemplateFileName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Procedura importująca', field: 'ImportProcName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Usuń wiersze', field: 'DelExistingRows', filter: 'agSetColumnFilter', suppressMenu: true, width: 100,renderType: "checkbox", cellClass: "grid-cell-centered" },      
      { headerName: 'Definicja kolumn', field: 'ColumnDefinition', filter: 'agTextColumnFilter', width: 250 },    ]
   }
}
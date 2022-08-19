import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-mail-templates',
  templateUrl: './sit-mail-templates.component.html',
  styleUrls: ['./sit-mail-templates.component.scss'],
  host: {class: 'router-flex'}
})
export class SitMailTemplatesComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitMailTemplates"] = [
      { headerName: 'Id', field: 'sitMailTemplatesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitMailTemplatesG', width: 100, defaultVisibility: false },  
      { headerName: 'Identyfikator szablonu', field: 'MailTemplateIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'MailTemplateName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', suppressMenu: true, width: 80,renderType: "checkbox", cellClass: "grid-cell-centered" },      
      { headerName: 'Profil', field: 'ProfileName', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Temat', field: 'Subject', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Odbiorca', field: 'Recipients', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Kopia do', field: 'CopyRecipients', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Ukryta kopia do', field: 'BlindCopyRecipients', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Format', field: 'BodyFormat', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Funkcja generująca temat', field: 'SubjectContentFunction', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Funkcja generująca treść', field: 'BodyContentFunction', filter: 'agTextColumnFilter', width: 200 },
    ]
   }
}

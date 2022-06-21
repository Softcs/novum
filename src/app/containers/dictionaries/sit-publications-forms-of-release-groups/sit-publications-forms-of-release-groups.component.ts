import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-forms-of-release-groups',
  templateUrl: './sit-publications-forms-of-release-groups.component.html',
  styleUrls: ['./sit-publications-forms-of-release-groups.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsFormsOfReleaseGroupsComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublicationsFormsOfReleaseGroups"] = [
      { headerName: 'Id', field: 'sitPublicationsFormsOfReleaseGroupsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsFormsOfReleaseGroupsG', width: 100, defaultVisibility: false },        
      { headerName: 'Grupa formy wydania', field: 'FormsOfReleaseGroupIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Opis', field: 'FormsOfReleaseGroupDesc', filter: 'agTextColumnFilter', width: 300 }
    ];

    this.gridColumnsDefinition["sitPublicationSubjects"] = [
      { headerName: 'Id', field: 'sitPublicationSubjectsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationSubjectsG', width: 100, defaultVisibility: false },  
      { headerName: 'Identyfikator', field: 'PublicationSubjectIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'PublicationSubjectName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100 },
    ];
   }
}

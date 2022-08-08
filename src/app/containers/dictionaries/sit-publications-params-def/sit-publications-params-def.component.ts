//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-params-def',
  templateUrl: './sit-publications-params-def.component.html',
  styleUrls: ['./sit-publications-params-def.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsParamsDefComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitPublicationsParamsDef"] = [
      { headerName: 'Id', field: 'sitPublicationsParamsDefId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsParamsDefG', width: 100, defaultVisibility: false },
      { headerName: 'Grupa formy wydania', field: 'FormsOfReleaseGroupIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Opis', field: 'FormsOfReleaseGroupDesc', filter: 'agTextColumnFilter', width: 300 }
    ];

    this.gridColumnsDefinition["sitPublicationSubjects"] = [
      { headerName: 'Id', field: 'sitPublicationSubjectsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationSubjectsG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'PublicationSubjectIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'PublicationSubjectName', filter: 'agTextColumnFilter', width: 350 },
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
    ];

    this.gridColumnsDefinition["sitPublicationAudience"] = [
      { headerName: 'Id', field: 'sitPublicationAudienceId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationAudienceG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'AudienceIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'AudienceName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
    ];

    this.gridColumnsDefinition["sitProduct4PubCollections"] = [
      { headerName: 'Id', field: 'sitProduct4PubCollectionsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProduct4PubCollectionsG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'CollectionIdent', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Opis', field: 'CollectionName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
    ];
  }

}

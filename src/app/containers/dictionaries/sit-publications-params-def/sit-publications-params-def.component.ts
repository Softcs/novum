import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-params-def',
  templateUrl: './sit-publications-params-def.component.html',
  styleUrls: ['./sit-publications-params-def.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsParamsDefComponent extends SitDictBaseComponent {
  groupDefaultExpanded;
  getDataPath;
  autoGroupColumnDef;

  public prepareColumnsDefinitnion() {

    this.autoGroupColumnDef = {
      headerName: 'Struktura',
      minWidth: 400,
      cellRendererParams: { suppressCount: true },
      sort:'asc'
    };
    this.groupDefaultExpanded = 0;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

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
      { headerName: 'Opis', field: 'PublicationSubjectName', filter: 'agTextColumnFilter', width: 350 },
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
    ];

    this.gridColumnsDefinition["sitThemaCodeList"] = [
      { headerName: 'Id', field: 'sitThemaCodeListId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitThemaCodeListG', width: 100, defaultVisibility: false },
      { headerName: 'Opis', field: 'CodeDescription', width: 300, sortable: false, filter: 'agTextColumnFilter', floatingFilter: true},
      { headerName: 'Info dodatkowe', field: 'CodeNotes', width: 500, sortable: false, filter: 'agTextColumnFilter', floatingFilter: true},
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

    this.gridColumnsDefinition["sitPublicationsFormsOfRelease"] = [
      { headerName: 'Id', field: 'sitPublicationsFormsOfReleaseId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsFormsOfReleaseG', width: 100, defaultVisibility: false },
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'FormOfReleaseDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Grupa', field: 'FormsOfReleaseGroupIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
    ];

  }

}

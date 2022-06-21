import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications',
  templateUrl: './sit-publications.component.html',
  styleUrls: ['./sit-publications.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublications"] = [
      { headerName: 'Id', field: 'sitPublicationsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsG', width: 100, defaultVisibility: false },  
      { headerName: 'Publikacja', field: 'PublicationIdent', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Tytuł', field: 'Title', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Tytuł oryginalny', field: 'OriginalTitle', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status', field: 'StatusValueName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Temat id', field: 'PublicationSubjectIdent', filter: 'agTextColumnFilter', width: 150, defaultVisibility: false },
      { headerName: 'Tematyka', field: 'PublicationSubjectName', filter: 'agTextColumnFilter', width: 250 },
    ];
    this.gridColumnsDefinition["sitPublicationsProducts"] = [
      { headerName: 'Id', field: 'sitPublicationsProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsProductsG', width: 100, defaultVisibility: false }, 
      { headerName: 'Identfikator', field: 'ProductIdent', width: 150},
      { headerName: 'Nazwa', field: 'ProductName', width: 300},
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', width: 300}
    ];
   }
}

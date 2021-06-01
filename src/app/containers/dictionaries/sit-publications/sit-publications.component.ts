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
      { headerName: 'Publikacja', field: 'PublicationIdent', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Tytuł', field: 'Title', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Tytuł oryginalny', field: 'OriginalTitle', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status', field: 'StatusValueName', filter: 'agTextColumnFilter', width: 150 }
    ];
    this.gridColumnsDefinition["sitPublicationsProducts"] = [
      { headerName: 'Identfikator', field: 'ProductIdent', width: 150},
      { headerName: 'Nazwa', field: 'ProductName', width: 300},
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', width: 300}
    ];
   }
}

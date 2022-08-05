import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications-forms-of-release',
  templateUrl: './sit-publications-forms-of-release.component.html',
  styleUrls: ['./sit-publications-forms-of-release.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsFormsOfReleaseComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublicationsFormsOfRelease"] = [
      { headerName: 'Id', field: 'sitPublicationsFormsOfReleaseId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsFormsOfReleaseG', width: 100, defaultVisibility: false },  
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'FormOfReleaseDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Grupa', field: 'FormsOfReleaseGroupIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
    ]
   }
}

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
      { headerName: 'Forma wydania', field: 'FormOfReleaseIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'FormOfReleaseDesc', filter: 'agTextColumnFilter', width: 300 }
    ]
   }
}

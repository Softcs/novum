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
      { headerName: 'Grupa formy wydania', field: 'FormsOfReleaseGroupIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Opis', field: 'FormsOfReleaseGroupDesc', filter: 'agTextColumnFilter', width: 300 }
    ]
   }
}

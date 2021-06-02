import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-params',
  templateUrl: './sit-params.component.html',
  styleUrls: ['./sit-params.component.scss'],
  host: {class: 'router-flex'}
})
export class SitParamsComponent extends SitDictBaseComponent {
 
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitParams"] = [
      { headerName: 'Identyfikator', field: 'ParamIdent', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, flex: 1 },
      { headerName: 'Wartość', field: 'ParamValue', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, flex: 2 },
      { headerName: 'Tech', field: 'IsTechnical', width: 80, renderType: 'checkbox'}
    ];
  }

}

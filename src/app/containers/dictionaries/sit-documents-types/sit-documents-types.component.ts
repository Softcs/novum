import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-documents-types',
  templateUrl: './sit-documents-types.component.html',
  styleUrls: ['./sit-documents-types.component.scss'],
  host: {class: 'router-flex'}
})
export class SitDocumentsTypesComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');

    this.gridColumnsDefinition["sitDocumentsTypes"] = [
      { headerName: 'Identyfikator', field: 'DocumentIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'DocumentName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Opis', field: 'DocumentDescription', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Wpływ na magazyn', field: 'StockEffect', type: "numericColumn" },
    ]
   }
}

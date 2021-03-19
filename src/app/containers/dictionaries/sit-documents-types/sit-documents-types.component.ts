import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-documents-types',
  templateUrl: './sit-documents-types.component.html',
  styleUrls: ['./sit-documents-types.component.scss'],
  host: {class: 'router-flex'}
})
<<<<<<< HEAD
export class SitDocumentsTypesComponent extends SitDictBaseComponent{
  public prepareColumnsDefinitnion() {  
=======
export class SitDocumentsTypesComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
>>>>>>> 0fec908df4aa84eb36ea20088305ee0ccdcdbdf2
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

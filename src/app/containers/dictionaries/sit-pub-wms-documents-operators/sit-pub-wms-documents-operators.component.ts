import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-pub-wms-documents-operators',
  templateUrl: './sit-pub-wms-documents-operators.component.html',
  styleUrls: ['./sit-pub-wms-documents-operators.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubWmsDocumentsOperatorsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPubWMSDocumentsOperators"] = [
      { headerName: 'Operator', field: 'Operator', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'NagId', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'XlId', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Numer dokumentu', field: 'DocumentNumber', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data dokumentu', field: 'DocumentDate', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Opis dokumentu', field: 'DocumentDescription', filter: 'agTextColumnFilter', width: 400 },
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa kontrahenta', field: 'CustName', filter: 'agTextColumnFilter', width: 300 }
    ]
   }
}

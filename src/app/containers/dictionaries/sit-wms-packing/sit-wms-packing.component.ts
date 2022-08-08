import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-wms-packing',
  templateUrl: './sit-wms-packing.component.html',
  styleUrls: ['./sit-wms-packing.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWmsPackingComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitWMSPacking"] = [
      { headerName: 'Id', field: 'sitWMSPackingId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitWMSPackingG', width: 100, defaultVisibility: false },  
      { headerName: 'Numer', field: 'PackingNumber', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Data', field: 'PackingDate', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Status', field: 'PackingStatus', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Kontrahenta', field: 'CustName', filter: 'agTextColumnFilter' },
    ];

    this.gridColumnsDefinition["sitWMSPackingDocuments"] = [
      { headerName: 'Id', field: 'sitWMSPackingDocumentsId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitWMSPackingDocumentsG', width: 100, defaultVisibility: false },  
      { headerName: 'Typ', field: 'DocumentIdent', width: 80},
      { headerName: 'Numer', field: 'DocumentNumber', width: 200},
      { headerName: 'Data', field: 'DocumentDate', width: 90},      
      { headerName: 'Kontrahent', field: 'CustName', width: 300}
    ];

    this.gridColumnsDefinition["sitWMSPackingContainers"] = [
      { headerName: 'Id', field: 'sitWMSPackingContainersId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitWMSPackingContainersG', width: 100, defaultVisibility: false },  
      { headerName: 'Nośnik', field: 'ContainerTypeName', width: 150},
      { headerName: 'Numer', field: 'ContainerNumber', width: 200},
    ];

    this.gridColumnsDefinition["sitWMSPackingContainerProducts"] = [
      { headerName: 'Id', field: 'sitWMSPackingContainerProductsId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitWMSPackingContainerProductsG', width: 100, defaultVisibility: false },  
      { headerName: 'Produkt', field: 'ProductIdent', width: 120},
      { headerName: 'EAN', field: 'EAN', width: 120},
      { headerName: 'Nazwa', field: 'ProductName', width: 200},
      { headerName: 'Ilość', field: 'Quantity', width: 100},
    ];

    this.gridColumnsDefinition["sitWMSPackingDocumentsPositions"] = [
      { headerName: 'Produkt', field: 'ProductIdent', width: 120},
      { headerName: 'EAN', field: 'EAN', width: 120},
      { headerName: 'Nazwa', field: 'ProductName', width: 200},
      { headerName: 'Ilość', field: 'Quantity', width: 100},
    ];

   }  
}

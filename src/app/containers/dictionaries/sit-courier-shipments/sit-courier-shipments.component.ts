import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sit-courier-shipments',
  templateUrl: './sit-courier-shipments.component.html',
  styleUrls: ['./sit-courier-shipments.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCourierShipmentsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitCourierShipments"] = [
      { headerName: 'Id', field: 'sitCourierShipmentsId',width: 90, defaultVisibility: false},
      { headerName: 'Numer przesyłki', field: 'ShipmentIdent4GUI', width: 200},
      { headerName: 'Data utworzenia', field: 'CreateDate', width: 150, sort: 'desc',
        cellRenderer: (data) => { return (data.value) ? formatDate(data.value, 'yyyy-MM-dd HH:mm:ss', this.locale) : ''}
      },
      { headerName: 'Odbiorca', field: 'ReceiverName', width: 300},
      { headerName: 'Status', field: 'ShipmentStatusDesc', width: 150},
      { headerName: 'Odebrana przez', field: 'ReceivedBy', width: 200},
      { headerName: 'Próba dost.', field: 'DeliveryFailed', width: 100, suppressMenu: true,
        cellRenderer: (params:any) => {
//          if (params.data.DeliveryFailed === 1) return '&#10071;'
          if (params.data.DeliveryFailed === 0) return '&#10003;'
          else if (params.data.DeliveryFailed === 1) return '&#10071;'
        },
        cellStyle: function(params) {
          if (params.data.DeliveryFailed === 0) return {'text-align': 'center', color: 'green'}
          else if (params.data.DeliveryFailed === 1) return {'text-align': 'center'}
        },
      }      
    ];
    this.gridColumnsDefinition["sitCourierDocumentsInShipment"] = [
      { headerName: 'Id', field: 'sitCourierDocumentsInShipmentId',width: 90, defaultVisibility: false},
      { headerName: 'Id zew', field: 'ExtAppIdent01',width: 90, defaultVisibility: false},
      { headerName: 'Typ', field: 'DocumentIdent', width: 80},
      { headerName: 'Numer', field: 'DocumentNumber', width: 200},
      { headerName: 'Data', field: 'DocumentDate', width: 90},      
      { headerName: 'Opis', field: 'DocumentDescription', width: 300},
      { headerName: 'Kontrahent', field: 'CustName', width: 300}
    ];
    this.gridColumnsDefinition["sitCourierDocumentsPiecesInShipment"] = [
      { headerName: 'Id', field: 'sitCourierDocumentsPiecesInShipmentId',width: 90, defaultVisibility: false},
      { headerName: 'Typ', field: 'ItemDescription', width: 130,},
      { headerName: 'Szerokość', field: 'ItemWidth', type: 'numericColumn', width: 100},
      { headerName: 'Wysokość', field: 'ItemHeight', type: 'numericColumn', width: 100},
      { headerName: 'Długość', field: 'ItemLength', type: 'numericColumn', width: 100},
      { headerName: 'Waga', field: 'ItemWeight', type: 'numericColumn', width: 100},
      { headerName: 'Ilość', field: 'ItemQuantity', type: 'numericColumn', width: 70}
    ];
    this.gridColumnsDefinition["sitCourierTrackAndTraceInfo"] = [
      { headerName: 'Status', field: 'Status', width: 100},
      { headerName: 'Opis', field: 'Description', width: 350},
      { headerName: 'Terminal', field: 'Terminal', width: 200},
      { headerName: 'Data', field: 'Date', width: 150, sort: 'desc',
        cellRenderer: (data) => { return (data.value) ? formatDate(data.value, 'yyyy-MM-dd HH:mm:ss', this.locale) : ''}
      },
    ];
   }
}

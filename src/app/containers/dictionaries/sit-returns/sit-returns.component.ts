import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-returns',
  templateUrl: './sit-returns.component.html',
  styleUrls: ['./sit-returns.component.scss'],
  host: {class: 'router-flex'}
})
export class SitReturnsComponent extends SitDictBaseComponent {

  rowClassRules;

    public prepareColumnsDefinitnion() {


    //definicja kolumn nagłówków dowodów
    this.gridColumnsDefinition["sitDocumentsHeaders"] = [
      { headerName: 'Id', field: 'sitDocumentsHeadersId', sortable: true, resizable: true, filter: 'agTextColumnFilter',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitDocumentsHeadersG', sortable: true, resizable: true, filter: 'agTextColumnFilter',width: 150, defaultVisibility: false },
      { headerName: 'Typ dok.', field: 'DocumentIdent', sortable: true, resizable: true, filter: 'agSetColumnFilter',width: 90 },
      { headerName: 'Status', field: 'DocumentStatus', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Numer', field: 'DocumentNumber', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Data', field: 'DocumentDate', filter: 'agDateColumnFilter',width: 100, floatingFilter: false, sort: 'desc'  },
      { headerName: 'Status WMS', field: 'Status_WMS', filter: 'agSetColumnFilter', width: 160,
        cellStyle: function(params) {
          if (params.value === 'Wysłana') { return { color: 'blue' }; }
          else if (params.value === 'Błąd wysyłki') { return { color: 'red' }; }
          else if (params.value === 'Przetworzone poprawnie') { return { color: 'green' }; }
          else { return null; }
        }
      },
      { headerName: 'Kontrahent', field: 'CustName', filter: 'agTextColumnFilter' },
      { headerName: 'Opis', field: 'DocumentDescription', filter: 'agTextColumnFilter' },
      { headerName: 'NagId SL', field: 'ExtAppIdent01', filter: 'agTextColumnFilter',width: 100 },
      { headerName: 'XL ID', field: 'ExtAppIdent02', filter: 'agTextColumnFilter',width: 100  },
    ];

      //definicja kolumn pozycji dowodów
    this.gridColumnsDefinition["sitDocumentsPositions"] = [
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 110, floatingFilter: true },
      { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', suppressMenu: true, width: 60 },
      { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Ilość klienta', field: 'Quantity4Compare', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Różnica', field: 'QuantityDiff', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Defekty', field: 'QuantityDefect', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
    ];

    this.gridColumnsDefinition["sitAttachments"] = [
      { headerName: 'ParentId', field: 'ParentId' },
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG' },
      { headerName: 'Data dodania', field: 'InsertDate', width: 120, renderType: "date", renderFormat: "yyyy-MM-dd HH:mm"},
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 },
    ];

      this.rowClassRules = {
        'row-defect': 'data.QuantityDiff != 0'
      }

   }




}

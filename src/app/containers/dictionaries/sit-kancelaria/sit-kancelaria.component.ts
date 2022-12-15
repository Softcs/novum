import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-kancelaria',
  templateUrl: './sit-kancelaria.component.html',
  styleUrls: ['./sit-kancelaria.component.scss'],
  host: {class: 'router-flex app-sit-kancelaria-component'}
})
export class SitKancelariaComponent extends SitDictBaseComponent {
  Link: string;

  public prepareColumnsDefinitnion() {
    var self = this;
    this.gridColumnsDefinition["sitCustomers"] =  [
      { headerName: 'Identyfikator', field: 'CustIdent', width: 150 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName' },
      { headerName: 'NIP', field: 'VATId', width: 100},
      { headerName: 'Ulica', field: 'Street', tooltipField: 'Street',
        valueGetter: function(params) {
          return  self.getStringValue(params.data.Street) + ' ' + self.getStringValue(params.data.HouseNum);
        }
      },
      { headerName: 'Miasto', field: 'City' },
      { headerName: 'Kraj', field: 'CountrySymbol', resizable: false, width: 70 }
      // { headerName: 'Id. zew.', field: 'ExtIdent', sortable: true, filter: true, resizable: true },
    ];

    this.gridColumnsDefinition["sitAgreements"] = [
      { headerName: 'Numer', field: 'AgreementNo', width: 150, filter: 'agTextColumnFilter', floatingFilter: true,
        filterParams: {
          filterOptions: ['contains']
        }
      },
      { headerName: 'Numer zew.', field: 'AgreementNumberExt01',width: 150, defaultVisibility: false },
      { headerName: 'Data zawarcia', field: 'Date', width: 100, renderType: 'date', suppressMenu: true },
      { headerName: 'Data do', field: 'DateTo', width: 100, renderType: 'date' },
      { headerName: 'Typ umowy', field: 'AgreementsTypeName', width: 150, filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'Lokalizacja', field: 'LocationName', width: 150, filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'Poufny', field: 'Confidential', sortable: true, filter: 'agTextColumnFilter', width: 80, autoHeight: true, cellRenderer: 'gridCheckboxRenderer' }
    ];

    this.gridColumnsDefinition["sitAttachments"] = [
      { headerName: 'ParentId', field: 'ParentId', defaultVisibility: false},
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG', defaultVisibility: false},
      { headerName: 'sitAttachmentsId', field: 'sitAttachmentsId', defaultVisibility: false},
      { headerName: 'Data dodania', field: 'InsertDate', width: 120, renderType: 'date', renderFormat: "yyyy-MM-dd HH:mm" },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 }
    ];
  }
}

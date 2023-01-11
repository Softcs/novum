import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-agreements',
  templateUrl: './sit-agreements.component.html',
  styleUrls: ['./sit-agreements.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAgreementsComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitAgreements"] = [
      { headerName: 'Id', field: 'sitAgreementsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementsG', width: 100, defaultVisibility: false},
      { headerName: 'Numer umowy', field: 'AgreementNo', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Numer zew.', field: 'AgreementNumberExt01',width: 150, defaultVisibility: false },
      { headerName: 'Data zawarcia', field: 'Date', width: 100, renderType: 'date', suppressMenu: true },
      { headerName: 'Data do', field: 'DateTo', width: 100, renderType: 'date' },
      { headerName: 'Typ umowy', field: 'AgreementsTypeName', width: 150, filter: 'agTextColumnFilter'},
      { headerName: 'Lokalizacja', field: 'LocationName', width: 150, filter: 'agTextColumnFilter' },
      { headerName: 'Poufny', field: 'Confidential', sortable: true, filter: 'agTextColumnFilter', suppressMenu: true, width: 80,renderType: "checkbox", cellClass: "grid-cell-centered"  }
    ];

    this.gridColumnsDefinition["sitAttachments"] = [
      { headerName: 'ParentId', field: 'ParentId', defaultVisibility: false},
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG', defaultVisibility: false},
      { headerName: 'sitAttachmentsId', field: 'sitAttachmentsId', defaultVisibility: false},
      { headerName: 'Data dodania', field: 'InsertDate', width: 120, renderType: 'date', renderFormat: "yyyy-MM-dd HH:mm" },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 }
    ];

    this.gridColumnsDefinition["sitAgreementCustomers"] = [
      { headerName: 'Id', field: 'sitAgreementCustomersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementCustomersG', width: 100, defaultVisibility: false},
      { headerName: 'Identyfikator', field: 'CustIdent', width: 150},
      { headerName: 'Nazwa', field: 'CustName', width: 300},
      { headerName: '% udziału', field: 'PercentShare', width: 100, type: 'numericColumn', suppressMenu: true},
      { headerName: 'Odbiorca rozl.', field: 'ForBilling', width: 110, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Rola', field: 'BenefRoleIdent', width: 100, suppressMenu: true}
    ];

    this.gridColumnsDefinition["sitAgreementUsers"] = [
      { headerName: 'Id', field: 'sitAgreementUsersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitAgreementUsersG', width: 100, defaultVisibility: false},
      { headerName: 'Pracownik', field: 'EmployeeName', width: 150},
      { headerName: 'Użytkownik', field: 'UserName', width: 150, defaultVisibility: false},
    ];

  }
}

import { Component, OnInit, ViewChild, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { TabService } from '@app/_services/tab.service';
import { GridService } from '@app/_services/grid.service';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
@Component({
  selector: 'app-sit-kancelaria',
  templateUrl: './sit-kancelaria.component.html',
  styleUrls: ['./sit-kancelaria.component.scss'],
  host: {class: 'router-flex'}
})
export class SitKancelariaComponent extends SitDictBaseComponent {
  Link: string;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitCustomers"] =  [
      { headerName: 'Identyfikator', field: 'CustIdent', width: 150 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName' },
      { headerName: 'NIP', field: 'VATId', width: 100},
      { headerName: 'Ulica', field: 'Street', tooltipField: 'Street',
        valueGetter: function(params) {
          return  this.getStringValue(params.data.Street) + ' ' + this.getStringValue(params.data.HouseNum);
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
      { headerName: 'Data zawarcia', field: 'Date', type: ['date'], width: 100, cellRenderer: 'sitGridCellRenderer', suppressMenu: true },
      { headerName: 'Data do', field: 'DateTo',type: ['date'], width: 100, cellRenderer: 'sitGridCellRenderer' },
      { headerName: 'Typ umowy', field: 'AgreementsTypeName', width: 150, filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'Lokalizacja', field: 'LocationName', width: 150, filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'Poufny', field: 'Confidential', sortable: true, filter: 'agTextColumnFilter', width: 80, autoHeight: true, cellRenderer: 'gridCheckboxRenderer' }
    ];

    this.gridColumnsDefinition["sitAttachments"] = [
      { headerName: 'ParentId', field: 'ParentId', defaultVisibility: false},
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG', defaultVisibility: false},
      { headerName: 'sitAttachmentsId', field: 'sitAttachmentsId', defaultVisibility: false},
      { headerName: 'Data dodania', field: 'InsertDate', type: ['datetime'], width: 120, cellRenderer: 'sitGridCellRenderer' },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 }
    ];
  }

  // constructor(
  //   private gatewayService: GatewayService,
  //   private gridService: GridService,
  //   @Inject(LOCALE_ID) private locale: string,
  //   private tabService: TabService,
  // ) {
  //   super(gatewayService, gridService, null, locale);
  //   this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
  //   this.tabService.activeTabIndex.subscribe(x => this.activeTab = x);
  //   this.frameworkComponents = sitGlobalConfig.frameworkComponents;

  //   this.popupParent = document.querySelector('body');
  // }

  // onGridReady(params) {
  //   this.gridService.setDefGridOptionsOnReady(params);

  //   if (params.columnApi.getColumn('sitAttachmentsG')) {
  //     params.columnApi.setColumnsVisible(['sitAttachmentsId','sitAttachmentsG','ParentId'],false)
  //   }
  // }


}

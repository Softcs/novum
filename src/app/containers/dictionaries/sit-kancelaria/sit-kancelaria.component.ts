import { environment } from '@environments/environment';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { formatDate } from '@angular/common';
import { TabService } from '@app/_services/tab.service';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'app-sit-kancelaria',
  templateUrl: './sit-kancelaria.component.html',
  styleUrls: ['./sit-kancelaria.component.scss'],
  host: {class: 'router-flex'}
})
export class SitKancelariaComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  currentUser: User;
  activeTab: number;
  Link: string;
  frameworkComponents;

  sitCustomersSelected = [];
  sitAgreementsSelected = [];
  sitAttachmentsSelected = [];

  popupParent;

  gridApiCustomers;
  gridColumnApiCustomers;
  columnDefsCustomers;

  gridApiAgreements;
  gridColumnApiAgreements;
  columnDefsAgreements;

  gridApiAttachments;
  gridColumnApiAttachments;
  columnDefsAttachments;

  constructor(
    private gatewayService: GatewayService,
    @Inject(LOCALE_ID) private locale: string,
    private tabService: TabService,
  ) {

    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.tabService.activeTabIndex.subscribe(x => this.activeTab = x);
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.popupParent = document.querySelector('body');

    this.columnDefsCustomers = [
      { headerName: 'Identyfikator', field: 'CustIdent', width: 150 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName' },
      { headerName: 'NIP', field: 'VATId', width: 100},
      { headerName: 'Ulica', field: 'Street', tooltipField: 'Street',
        valueGetter: function(params) { return params.data.Street + ' ' + params.data.HouseNum }
      },
      { headerName: 'Miasto', field: 'City' },
      { headerName: 'Kraj', field: 'CountrySymbol', resizable: false, width: 70 },
      // { headerName: 'Id. zew.', field: 'ExtIdent', sortable: true, filter: true, resizable: true },
    ];

    this.columnDefsAgreements = [
      { headerName: 'Numer', field: 'AgreementNo', width: 150, filter: 'agTextColumnFilter', floatingFilter: true,
        filterParams: {
          filterOptions: ['contains']
        }
      },
      { headerName: 'Data', field: 'Date', width: 100, type: 'dateColumn',
        // cellRenderer: (data) => { return  formatDate(data.value, 'yyyy-MM-dd', this.locale)}
      },
      { headerName: 'Data do', field: 'DateTo', width: 100, type: 'dateColumn',
        // cellRenderer: (data) => { return  formatDate(data.value, 'yyyy-MM-dd', this.locale)}
      },
      { headerName: 'Typ umowy', field: 'AgreementsTypeName', width: 150, filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'Lokalizacja', field: 'LocationName', width: 150, filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'Poufny', field: 'Confidential', sortable: true, filter: 'agTextColumnFilter', width: 80, autoHeight: true, cellRenderer: 'gridCheckboxRenderer' },

    ];

    this.columnDefsAttachments = [
      { headerName: 'ParentId', field: 'ParentId' },
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG' },
      { headerName: 'Data dodania', field: 'InsertDate', width: 120,
         cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd H:mm', this.locale) }
      },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 },
    ];


  }

  ngOnInit(): void {}

  activeRowAttachmentsChanged(activeRow) {
    // this.sitAttachmentsSelected.splice(0, this.sitAttachmentsSelected.length);
    // this.sitAttachmentsSelected.push(...[activeRow]);

  }

  onGridReadyCustomers(params) {
    this.gridApiCustomers = params.api;
    this.gridColumnApiCustomers = params.columnApi;
  }
  onGridReadyAgreements(params) {
    this.gridApiAgreements = params.api;
    this.gridColumnApiAgreements = params.columnApi;
  }
  onGridReadyAttachments(params) {
    this.gridApiAttachments = params.api;
    this.gridColumnApiAttachments = params.columnApi;
    this.gridColumnApiAttachments.setColumnsVisible(['sitAttachmentsId','sitAttachmentsG','ParentId'],false)

  }

  onRowClickedCustomers(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitCustomers');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedAgreements(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitAgreements');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedAttachments(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitAttachments');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];

    this.gridColumnApiCustomers.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiAgreements.autoSizeColumns(allColumnIds, false);
  }
}

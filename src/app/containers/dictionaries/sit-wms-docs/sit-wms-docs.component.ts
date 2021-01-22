import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { TabService } from '@app/_services/tab.service';
import { formatNumber } from '@angular/common';
import { formatDate } from '@angular/common';
// import { AllModules } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-sit-wms-docs',
  templateUrl: './sit-wms-docs.component.html',
  styleUrls: ['./sit-wms-docs.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWmsDocsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  companyGUID: string;
  activeTab: number;
  activeSubTab: number;
  printLinked = false;

  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;
  rowClassRules;

  gridApiDocumentsHeaders;
  gridColumnApiDocumentsHeaders;
  columnDefsDocumentsHeaders;
  pinnedBottomRowDataDocumentsHeaders;

  gridApiDocumentsPositions;
  gridColumnApiDocumentsPositions;
  columnDefsDocumentsPositions;

  gridApiDocumentsPositionsSum;
  gridColumnApiDocumentsPositionsSum;
  columnDefsDocumentsPositionsSum;

  gridApiDocumentsPositionsHistory;
  gridColumnApiDocumentsPositionsHisotry;
  columnDefsDocumentsPositionsHistory;

  gridApiDocumentsHeadersHistory;
  gridColumnApiDocumentsHeadersHistory;
  columnDefsDocumentsHeadersHistory;

  gridApiAttachments;
  gridColumnApiAttachments;
  columnDefsAttachments;

  constructor(
    private gatewayService: GatewayService,
    private tabService: TabService,
    @Inject(LOCALE_ID) private locale: string,

    ) {

    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.tabService.activeTabIndex.subscribe(x => this.activeTab = x);

    this.companyGUID = this.currentUser.company.companyGUID;
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      floatingFilter: false,
    };

    //definicja kolumn nagłówków dowodów
    this.columnDefsDocumentsHeaders = [
      { headerName: 'Id', field: 'sitDocumentsHeadersId', sortable: true, resizable: true, filter: 'agTextColumnFilter',width: 90 },
      { headerName: 'GUID', field: 'sitDocumentsHeadersG', sortable: true, resizable: true, filter: 'agTextColumnFilter',width: 150 },
      { headerName: 'Typ dok.', field: 'DocumentIdent', sortable: true, resizable: true, filter: 'agSetColumnFilter', floatingFilter: false, width: 90 },
      { headerName: 'Numer', field: 'DocumentNumber', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Data', field: 'DocumentDate', filter: 'agDateColumnFilter',width: 100, floatingFilter: false, sort: 'desc'  },
      { headerName: 'Status WMS', field: 'Status_WMS', filter: 'agSetColumnFilter', width: 160, floatingFilter: true,
        cellStyle: function(params) {
          if (params.value === 'Wysłana') { return { color: 'blue' }; }
          else if (params.value === 'Błąd wysyłki') { return { color: 'red' }; }
          else if (params.value === 'Przetworzone poprawnie') { return { color: 'green' }; }
          else { return null; }
        }
      },
      { headerName: 'Kontrahent', field: 'CustName', filter: 'agTextColumnFilter', tooltipField: 'CustName', floatingFilter: true},
      { headerName: 'Opis', field: 'DocumentDescription', filter: 'agTextColumnFilter', tooltipField: 'DocumentDescription', floatingFilter: true, width: 120 },
      { headerName: 'Waga', field: 'Weight', type: 'numericColumn', filter: 'agNumberColumnFilter', tooltipField: 'DocumentDescription', width: 80,
        cellRenderer: function(params) {
        return formatNumber(params.data["Weight"], locale,'1.2-2')
        }
      },
      { headerName: 'NagId SL', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, floatingFilter: true },
      // { headerName: 'XL ID', field: 'ExtAppIdent02', filter: 'agTextColumnFilter',width: 100  },
      { headerName: 'Opis zew.', field: 'ExtAppDescription01', tooltipField: 'ExtAppDescription01', filter: 'agTextColumnFilter',width: 200  },

    ];

    //definicja kolumn pozycji dowodów
    this.columnDefsDocumentsPositions = [
      { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 40,floatingFilter: false },
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 110, floatingFilter: true },
      { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60 },
      { headerName: 'Il. start', field: 'QuantityUnitStart', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Waga', field: 'Weight', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,
        cellRenderer: function(params) {
        return formatNumber(params.data["Weight"], locale,'1.2-2')
        }
      },
      { headerName: 'Defekt', field: 'IsDefect', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer', floatingFilter: false }
    ];

    //definicja kolumn sum pozycji dowodów
    this.columnDefsDocumentsPositionsSum = [
      { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 40,floatingFilter: false },
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 110, floatingFilter: true },
      { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60 },
      { headerName: 'Il. start', field: 'QuantityUnitStart', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Różnica', field: 'QuantityDiff', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
    ];

    //definicja kolumn historii nagłówków
    this.columnDefsDocumentsHeadersHistory = [
      { headerName: 'Operacja', field: 'OprType', filter: 'agTextColumnFilter',  width: 100 },
      { headerName: 'Data mod.', field: 'ChangeDate', sortable: true, resizable: true, suppressMenu: true, width: 180, sort: 'desc',
        cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd H:mm', this.locale) }
      },
      { headerName: 'Status', field: 'ValueName', filter: 'agTextColumnFilter'},
      { headerName: 'Komentarz', field: '__HistoryComments__', filter: 'agTextColumnFilter' },
    ];

    //definicja kolumn historii pozycji
    this.columnDefsDocumentsPositionsHistory = [
      { headerName: 'Operacja', field: 'OprType', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Data mod.', field: 'ChangeDate', sortable: true, resizable: true, suppressMenu: true, width: 180, sort: 'desc',
        cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd H:mm', this.locale) }
      },
      { headerName: 'Ilość', field: 'Quantity', type: "numericColumn" }
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

    this.rowClassRules = {
      'row-defect': 'data.IsDefect == 1'
    }
  }


    ngOnInit(): void {
    }


  getPrintout() {
    //generuje wydruk w nowej zakładce
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
    let url;
    url = environment.apiUrl + '/service/show/anonymous/report/' + this.companyGUID + '/' + dataSourceResponseWrapper.activeRow['sitDocumentsHeadersG'];
    window.open(url, "_blank");
  }

  onGridReadyDocumentsHeaders(params) {
    this.gridApiDocumentsHeaders = params.api;
    this.gridColumnApiDocumentsHeaders = params.columnApi;
    this.gridColumnApiDocumentsHeaders.setColumnsVisible(['sitDocumentsHeadersId','sitDocumentsHeadersG'],false)

  }

  onGridReadyDocumentsHeadersHistory(params) {
    this.gridColumnApiDocumentsHeadersHistory = params.api;
    this.gridColumnApiDocumentsHeadersHistory = params.columnApi;
  }

  onGridReadyDocumentsPositions(params) {
    this.gridApiDocumentsPositions = params.api;
    this.gridColumnApiDocumentsPositions = params.columnApi;
  }

  onGridReadyDocumentsPositionsSum(params) {
    this.gridApiDocumentsPositionsSum = params.api;
    this.gridColumnApiDocumentsPositionsSum = params.columnApi;
  }

  onGridReadyDocumentsPositionsHistory(params) {
    this.gridApiDocumentsPositionsHistory = params.api;
    this.gridColumnApiDocumentsPositionsHisotry = params.columnApi;
  }

  onRowClickedDocumentsHeaders(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
    dataSourceResponseWrapper.SetActiveRow(event.data);
    if (dataSourceResponseWrapper.activeRow['sitDocumentsHeadersG_Invoice'] !== null) {
      this.printLinked = true;
    } else { this.printLinked = false };
  }

  onRowClickedDocumentsHeadersHistory(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeadersHistory');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedDocumentsPositions(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositions');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedDocumentsPositionsSum(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositionsSum');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedDocumentsPositionsHistory(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositionsHistory');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedDocumentsVATFooter(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsVATFooters');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyAttachments(params) {
    this.gridApiAttachments = params.api;
    this.gridColumnApiAttachments = params.columnApi;
    this.gridColumnApiAttachments.setColumnsVisible(['sitAttachmentsId','sitAttachmentsG','ParentId'],false)

  }

  onRowClickedAttachments(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitAttachments');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];
    // this.gridColumnApiDocumentsHeaders.getAllColumns().forEach(function(column) {
    //   allColumnIds.push(column.colId);
    // });
    // this.gridColumnApiDocumentsHeaders.autoSizeColumns(allColumnIds, false);

    // this.gridColumnApiDocumentsPositions.getAllColumns().forEach(function(column) {
    //   allColumnIds.push(column.colId);
    // });
    // this.gridColumnApiDocumentsPositions.autoSizeColumns(allColumnIds, false);

  }

  activateTab(index) {
    this.activeSubTab = index;
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
  }

  activeRowChangedDocumentsHeaders(activeRow) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
    // if (activeRow['sitDocumentsHeadersG_Invoice'] !== null) {
    //   this.printLinked = true;
    // }
  }
}

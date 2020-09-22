import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

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

  gridApiDocumentsPositionsHistory;
  gridColumnApiDocumentsPositionsHisotry;
  columnDefsDocumentsPositionsHistory;

  gridApiDocumentsHeadersHistory;
  gridColumnApiDocumentsHeadersHistory;
  columnDefsDocumentsHeadersHistory;

  constructor(
    private gatewayService: GatewayService
    ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.popupParent = document.querySelector('body');
      this.rowSelection = 'single';
      this.frameworkComponents = {
        gridCheckboxRenderer: GridCheckboxRenderer,
      };

      this.defaultColDef = {
        sortable: true,
        filter: true,
        //floatingFilter: true,
        resizable: true,
        enableValue: true,
        enableRowGroup: true,
        enablePivot: true,
        floatingFilter: true,
      };

      //definicja kolumn nagłówków dowodów
      this.columnDefsDocumentsHeaders = [
        { headerName: 'Typ dok.', field: 'DocumentIdent', sortable: true, resizable: true, filter: 'agSetColumnFilter',width: 90 },
        { headerName: 'Numer', field: 'DocumentNumber', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
        { headerName: 'Data', field: 'DocumentDate', filter: 'agDateColumnFilter',width: 100  },
        { headerName: 'Status WMS', field: 'Status_WMS', filter: 'agSetColumnFilter', width: 160,
          cellStyle: function(params) {
            if (params.value=='Wysłana') { return {color: 'blue', backgroundColor: 'white'}; }
            else if (params.value=='Błąd wysyłki') { return {color: 'red' }; }
            else if (params.value=='Przetworzone poprawnie') { return {color: 'green' }; }
            else { return null; }
          }
        },
        { headerName: 'Kontrahent', field: 'PayerDesc02', filter: 'agTextColumnFilter' },
        { headerName: 'Opis', field: 'DocumentDescription', filter: 'agTextColumnFilter' },
        { headerName: 'NagId SL', field: 'ExtAppIdent01', filter: 'agTextColumnFilter',width: 100 },
        { headerName: 'XL ID', field: 'ExtAppIdent02', filter: 'agTextColumnFilter',width: 100  },
      ];
      this.pinnedBottomRowDataDocumentsHeaders = this.createData(1, '');

      //definicja kolumn pozycji dowodów
      this.columnDefsDocumentsPositions = [
        { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 50,floatingFilter: false },
        { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, floatingFilter: true },
        { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
        { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
        { headerName: 'Il. start', field: 'QuantityUnitStart', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Defekt', field: 'IsDefect', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer' }
      ];



      //definicja kolumn historii nagłówków
      this.columnDefsDocumentsHeadersHistory = [
        { headerName: 'Operacja', field: 'OprType', filter: 'agTextColumnFilter', floatingFilter: true, width: 100 },
        { headerName: 'Data mod.', field: 'ChangeDate', sortable: true, resizable: true, suppressMenu: true, width: 180, floatingFilter: false, sort: 'desc',},
        { headerName: 'Status', field: 'ValueName', filter: 'agTextColumnFilter', floatingFilter: true },
        { headerName: 'Komentarz', field: '__HistoryComments__', filter: 'agTextColumnFilter', floatingFilter: true },
      ];

      //definicja kolumn historii pozycji
      this.columnDefsDocumentsPositionsHistory = [
        { headerName: 'Operacja', field: 'OprType', filter: 'agTextColumnFilter', floatingFilter: true, width: 100 },
        { headerName: 'Data mod.', field: 'ChangeDate', sortable: true, resizable: true, suppressMenu: true, width: 180, floatingFilter: false, sort: 'desc',},
        { headerName: 'Ilość', field: 'Quantity', floatingFilter: false, type: "numericColumn" }
      ];

      this.rowClassRules = {
        'row-defect': 'data.IsDefect == 1'
      }
    }


  ngOnInit(): void {
  }



  onGridReadyDocumentsHeaders(params) {
    this.gridApiDocumentsHeaders = params.api;
    this.gridColumnApiDocumentsHeaders = params.columnApi;
  }

  onGridReadyDocumentsHeadersHistory(params) {
    this.gridColumnApiDocumentsHeadersHistory = params.api;
    this.gridColumnApiDocumentsHeadersHistory = params.columnApi;
  }

  onGridReadyDocumentsPositions(params) {
    this.gridApiDocumentsPositions = params.api;
    this.gridColumnApiDocumentsPositions = params.columnApi;
  }
  onGridReadyDocumentsPositionsHistory(params) {
    this.gridApiDocumentsPositionsHistory = params.api;
    this.gridColumnApiDocumentsPositionsHisotry = params.columnApi;
  }

  onRowClickedDocumentsHeaders(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedDocumentsHeadersHistory(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeadersHistory');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onRowClickedDocumentsPositions(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositions');
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

  createData(count, prefix) {
    let result = [];
    for (var i = 0; i < count; i++) {
      result.push({
        Net: prefix + 0,
        VAT: prefix + 0,
        Gross: prefix + 0,
      });
    }
    return result;
  }
}
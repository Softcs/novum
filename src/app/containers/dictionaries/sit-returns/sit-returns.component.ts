import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';


@Component({
  selector: 'app-sit-returns',
  templateUrl: './sit-returns.component.html',
  styleUrls: ['./sit-returns.component.scss'],
  host: {class: 'router-flex'}
})
export class SitReturnsComponent implements OnInit {
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

  gridApiDocumentsPositions;
  gridColumnApiDocumentsPositions;
  columnDefsDocumentsPositions;

  constructor(
    private gatewayService: GatewayService
  )
  {
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
      { headerName: 'Id', field: 'sitDocumentsHeadersId', sortable: true, resizable: true, filter: 'agTextColumnFilter',width: 90 },
      { headerName: 'GUID', field: 'sitDocumentsHeadersG', sortable: true, resizable: true, filter: 'agTextColumnFilter',width: 150 },
      { headerName: 'Typ dok.', field: 'DocumentIdent', sortable: true, resizable: true, filter: 'agSetColumnFilter',width: 90 },
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
      this.columnDefsDocumentsPositions = [
        { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
        { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 110, floatingFilter: true },
        { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
        { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60 },
        { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Ilość klienta', field: 'Quantity4Compare', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Różnica', field: 'QuantityDiff', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Defekty', field: 'QuantityDefect', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },

      ];

      this.rowClassRules = {
        'row-defect': 'data.QuantityDiff != 0'
      }

   }

  ngOnInit(): void {
  }

  onGridReadyDocumentsHeaders(params) {
    this.gridApiDocumentsHeaders = params.api;
    this.gridColumnApiDocumentsHeaders = params.columnApi;
    this.gridColumnApiDocumentsHeaders.setColumnsVisible(['sitDocumentsHeadersId','sitDocumentsHeadersG'],false)
  }

  onGridReadyDocumentsPositions(params) {
    this.gridApiDocumentsPositions = params.api;
    this.gridColumnApiDocumentsPositions = params.columnApi;
  }


  onRowClickedDocumentsHeaders(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
      dataSourceResponseWrapper.SetActiveRow(event.data);
    }

  onRowClickedDocumentsPositions(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositions');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

}

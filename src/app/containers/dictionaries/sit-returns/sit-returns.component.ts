import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { formatDate } from '@angular/common';

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

  gridApiAttachments;
  gridColumnApiAttachments;
  columnDefsAttachments;

  constructor(
    private gatewayService: GatewayService,
    @Inject(LOCALE_ID) private locale: string,
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
      { headerName: 'Typ dok.', field: 'DocumentIdent', sortable: true, resizable: true, filter: 'agSetColumnFilter',width: 90 },
      { headerName: 'Status', field: 'DocumentStatus', filter: 'agNumericColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
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
        { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', suppressMenu: true, width: 60 },
        { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Ilość klienta', field: 'Quantity4Compare', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Różnica', field: 'QuantityDiff', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Defekty', field: 'QuantityDefect', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
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

  onRowClickedDocumentsHeaders(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyDocumentsPositions(params) {
    this.gridApiDocumentsPositions = params.api;
    this.gridColumnApiDocumentsPositions = params.columnApi;
  }

  onRowClickedDocumentsPositions(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositions');
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
  }
}

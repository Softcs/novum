import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { formatDate } from '@angular/common';
import { DataSetWrapper } from '@app/_models';
@Component({
  selector: 'app-sit-wms-docs',
  templateUrl: './sit-wms-docs.component.html',
  styleUrls: ['./sit-wms-docs.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWmsDocsComponent extends SitDictBaseComponent {

  printLinked = false;
  rowClassRules;
  columnDefsDocumentsHeaders;
  columnDefsDocumentsPositions;
  columnDefsDocumentsPositionsSum;
  columnDefsAttachments;
  columnDefsShipments;
  columnDefsShipmentPieces;
  detailCellRendererParamsDocHistory;
  detailCellRendererParamsPosHistory;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition['sitDocumentsHeaders'] = [
      { headerName: 'Id', field: 'sitDocumentsHeadersId', filter: 'agTextColumnFilter',width: 90, defaultVisiblity: false },
      { headerName: 'GUID', field: 'sitDocumentsHeadersG', filter: 'agTextColumnFilter',width: 150, defaultVisiblity: false },
      { headerName: 'Typ dok.', field: 'DocumentIdent', filter: 'agSetColumnFilter', floatingFilter: false, width: 90, cellRenderer: 'agGroupCellRenderer' },
      { headerName: 'Numer', field: 'DocumentNumber', filter: 'agTextColumnFilter' },
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
        renderType: "number", renderFormat: '1.2-2'
      },
      { headerName: 'NagId SL', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, floatingFilter: true },
      { headerName: 'XL ID', field: 'ExtAppIdent02', filter: 'agTextColumnFilter',width: 60, suppressMenu: true  },
      { headerName: 'Opis zew.', field: 'ExtAppDescription01', tooltipField: 'ExtAppDescription01', filter: 'agTextColumnFilter',width: 200  },
    ];

    this.gridColumnsDefinition['sitDocumentsPositions'] = [
      { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', suppressMenu: true, width: 70,floatingFilter: false, cellRenderer: 'agGroupCellRenderer' },
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 110, floatingFilter: true },
      { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60 },
      { headerName: 'Il. start', field: 'QuantityUnitStart', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 70 },
      { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 70 },
      { headerName: 'Waga', field: 'Weight', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,
        renderType: "number", renderFormat: '1.2-2'
      },
      { headerName: 'Defekt', field: 'IsDefect', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer', floatingFilter: false }
    ];

    this.gridColumnsDefinition['sitDocumentsPositionsSum'] = [
      { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', suppressMenu: true, width: 40,floatingFilter: false },
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 110, floatingFilter: true },
      { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60 },
      { headerName: 'Il. start', field: 'QuantityUnitStart', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Ilość', field: 'QuantityUnit', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      { headerName: 'Różnica', field: 'QuantityDiff', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
    ];

    this.detailCellRendererParamsDocHistory = {
      detailGridOptions: {
        columnDefs: [
          { headerName: 'Operacja', field: 'OprType', flex: 1 },
          { headerName: 'Data mod.', field: 'ChangeDate', suppressMenu: true, width: 180, sort: 'desc', flex: 2,
            cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd HH:mm', this.locale) }
          },
          { headerName: 'Status', field: 'ValueName', filter: 'agTextColumnFilter', flex: 2 },
          { headerName: 'Komentarz', field: '__HistoryComments__', filter: 'agTextColumnFilter', flex: 3 }
        ],
      },

      getDetailRowData: function (params) {
          params.successCallback(params.data.history);
      },
    };

    this.detailCellRendererParamsPosHistory = {
      detailGridOptions: {
        columnDefs: [
          { headerName: 'Operacja', field: 'OprType', filter: 'agTextColumnFilter', width: 100 },
          { headerName: 'Data mod.', field: 'ChangeDate', suppressMenu: true, width: 180, sort: 'desc',
             cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd HH:mm', this.locale) }
          },
          { headerName: 'Ilość', field: 'Quantity', type: "numericColumn" }
        ],
      },

      getDetailRowData: function (params) {
          params.successCallback(params.data.history);
      },
    };

    this.gridColumnsDefinition['sitAttachments'] = [
      { headerName: 'ParentId', field: 'ParentId' },
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG' },
      { headerName: 'Data dodania', field: 'InsertDate', width: 120,
         cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd HH:mm', this.locale) }
      },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 },
    ];

    this.gridColumnsDefinition['sitCourierShipmets4Document'] = [
      { headerName: 'Data utworzenia', field: 'CreateDate', width: 130,
        cellRenderer: (data) => { return (data.value) ? formatDate(data.value, 'yyyy-MM-dd HH:mm', this.locale) : ''}
      },
      { headerName: 'Status', field: 'ShipmentStatusDesc', width: 130,},
      { headerName: 'Identyfikator', field: 'ShipmentIdent4GUI', width: 130},
    ];

    this.gridColumnsDefinition['sitCourierShipmentPieces'] = [
      { headerName: 'Typ', field: 'ItemDescription', width: 130,},
      { headerName: 'Szerokość', field: 'ItemWidth', type: 'numericColumn', width: 100},
      { headerName: 'Wysokość', field: 'ItemHeight', type: 'numericColumn', width: 100},
      { headerName: 'Długość', field: 'ItemLength', type: 'numericColumn', width: 100},
      { headerName: 'Waga', field: 'ItemWeight', type: 'numericColumn', width: 100},
      { headerName: 'Ilość', field: 'ItemQuantity', type: 'numericColumn', width: 70},
    ]

    this.rowClassRules = {
      'row-defect': 'data.IsDefect == 1'
    }
  }

  ngOnInit(): void {}

  getPrintout() {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
    let url = this.urlService.getAnonymousRepUrl(dataSourceResponseWrapper.activeRow['sitDocumentsHeadersG']);
    window.open(url, "_blank");
  }

  activateTab(index) {

  }

  activeRowChangedDocumentsHeaders(activeRow) {
    if (!activeRow) {
      this.printLinked = false;
      return null;
    }

    if (!activeRow['sitDocumentsHeadersG_Invoice']) {
      this.printLinked = false
      return null;
    }

    this.printLinked = true;
  }
}

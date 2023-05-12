import { Component, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-pallets-balance',
  templateUrl: './sit-pallets-balance.component.html',
  styleUrls: ['./sit-pallets-balance.component.scss'],
  host: {class: 'router-flex sit-pallets-balance.component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitPalletsBalanceComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPalletsBalance"] = [
      { headerName: 'Kontrahent', field: 'CustIdent', width: 100, suppressMenu: true, },
      { headerName: 'Nazwa', field: 'CustName', sortable: true, filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Produkt', field: 'ProductIdent', width: 100, },
      { headerName: 'Bilans', field: 'BalanceSum', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,
        renderType: "number", renderFormat: '1.0-0', headerTooltip: 'Bilans: liczba dodania - nasze palety u kontrahenta, ujemna - palety kontrahenta u nas.'
      },
      { headerName: 'Bilans przeterm.', field: 'OverdueBalanceSum', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,
      renderType: "number", renderFormat: '1.0-0',
        cellStyle: function(params) {
          if (params.value != 0) { return { color: 'red' }; }
          else { return null; }
        }
      },
    ];
    
    this.gridColumnsDefinition["sitPalletsBalance4Customers"] = [
      { headerName: 'Data', field: 'Date', filter: 'agDateColumnFilter',width: 100, renderType: "date", renderFormat: "yyyy-MM-dd", floatingFilter: false, sort: 'desc' },
      { headerName: 'Ilość', field: 'Quantity', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, agr: 'sum' },
      { headerName: 'Bilans', field: 'Balance', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, agr: 'sum' },
      { headerName: 'Przeterminowane', field: 'IsOverdue', filter: 'agSetColumnFilter', suppressMenu: true, width: 120,renderType: "checkbox", cellClass: "grid-cell-centered" },      

    ];

    this.gridColumnsDefinition["sitPalletsBalance4CustomersDocsPos"] = [
      { headerName: 'Id', field: 'sitDocumentsHeadersId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitDocumentsHeadersG',width: 150, defaultVisibility: false },
      { headerName: 'Data', field: 'DocumentDate', filter: 'agDateColumnFilter',width: 100, renderType: "date", renderFormat: "yyyy-MM-dd", floatingFilter: false, sort: 'desc' },
      { headerName: 'Dokument', field: 'DocumentIdent', width: 100, },
      { headerName: 'Nazwa dokumentu', field: 'DocumentName', width: 220, },
      { headerName: 'Opis dokumentu', field: 'DocumentDescription', width: 250, },
      { headerName: 'Ilość dok.', field: 'Quantity', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, defaultVisibility: false  },
      { headerName: 'Ilość', field: 'QuantitySign', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, agr: 'sum'  },
      { headerName: 'Dokumenty źródłowe', field: 'DocumentNumber_Source', width: 250, }
    ];

    this.gridColumnsDefinition["sitPalletsBalanceStocks"] = [
      { headerName: 'Produkt', field: 'ProductIdent', width: 100, },
      { headerName: 'Stan magazynowy', field: 'Quantity', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,
        renderType: "number", renderFormat: '1.0-0', headerTooltip: 'Stan księgowy'
      },
      { headerName: 'Bilans plus', field: 'StockVMinus', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,
        renderType: "number", renderFormat: '1.0-0', headerTooltip: 'Ilość wydana do kontrahentów'
      },
      { headerName: 'Bilans minus', field: 'StockVPlus', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,
        renderType: "number", renderFormat: '1.0-0', headerTooltip: 'Ilość przyjęta od kontrahentów'
      },
      { headerName: 'Stan rzeczywisty', field: 'StockV', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,
        renderType: "number", renderFormat: '1.0-0', headerTooltip: 'Ilość dostępna na magazynie'
      },
    ];

    this.gridColumnsDefinition["sitPalletsBalanceTurnover"] = [
      { headerName: 'Id', field: 'sitDocumentsHeadersId',width: 90, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitDocumentsHeadersG',width: 150, defaultVisibility: false },
      { headerName: 'Data', field: 'DocumentDate', filter: 'agDateColumnFilter',width: 100, renderType: "date", renderFormat: "yyyy-MM-dd", floatingFilter: false, sort: 'desc' },
      { headerName: 'Kontrahent', field: 'CustIdent', width: 100, suppressMenu: true, },
      { headerName: 'Nazwa', field: 'CustName', sortable: true, filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Dokument', field: 'DocumentIdent', width: 100, },
      { headerName: 'Nazwa dokumentu', field: 'DocumentName', width: 220, },
      { headerName: 'Opis dokumentu', field: 'DocumentDescription', width: 250, },
      { headerName: 'Produkt', field: 'ProductIdent', width: 100, },
      { headerName: 'Ilość dok.', field: 'Quantity', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, defaultVisibility: false  },
      { headerName: 'Ilość', field: 'QuantitySign', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, agr: 'sum' },
      { headerName: 'Dokumenty źródłowe', field: 'DocumentNumber_Source', width: 250, },
    ];

  };
}

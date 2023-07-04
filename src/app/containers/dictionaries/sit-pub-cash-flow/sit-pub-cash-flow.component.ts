import { Component, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-pub-cash-flow',
  templateUrl: './sit-pub-cash-flow.component.html',
  styleUrls: ['./sit-pub-cash-flow.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'router-flex sit-pub-cash-flow-component'}
})
export class SitPubCashFlowComponent extends SitDictBaseComponent {
  public defaultColDef: any;
  public autoGroupColumnDef: any;
  public rowGroupPanelShow: any;
  public suppressAggFuncInHeader: any;
  public groupIncludeTotalFooter: any;

  public pivotDefaultColDef: any;
  public pivotAutoGroupColumnDef: any;
  public pivotRowTotals: any;
  public pivotColumnGroupTotals: any;  
  
  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
      this.defaultColDef = {
        sortable: true,
        flex: 1,
        // minWidth: 100,
        resizable: true,
      };
      this.autoGroupColumnDef = { 
        sortable: true,
        sort: 'asc',
        resizable: true,
        minWidth: 200,
        // suppressSizeToFit: true,
        flex: 3,
      };
      this.rowGroupPanelShow = 'always';
      this.suppressAggFuncInHeader = 'true';
      this.groupIncludeTotalFooter = 'true';
      //
      this.pivotDefaultColDef = {
        flex: 0,
        minWidth: 120,
        sortable: true,
        resizable: true,
      };
      this.pivotAutoGroupColumnDef = { 
        minWidth: 250, 
        pinned: 'left',
        sort: 'asc'
      };
      this.pivotRowTotals = 'after';
      this.pivotColumnGroupTotals = 'before';
    };  

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitCashFlow"] = [
      { headerName: 'Handlowiec', field: 'AccountManager_Payer', filter: 'agTextColumnFilter', width: 200,
        enableRowGroup: true, rowGroup: true, hide: true },
      { headerName: 'Grupa', field: 'CustomersGroupIdent', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false,
        enableRowGroup: true },
      { headerName: 'Nazwa grupy', field: 'CustomersGroupName', filter: 'agTextColumnFilter', width: 200,
        enableRowGroup: true, rowGroup: true, hide: true },
      { headerName: 'Płatnik', field: 'AddGroupIdent', filter: 'agTextColumnFilter', width: 100,
        enableRowGroup: true, rowGroup: true, hide: true },
      { headerName: 'Kontrahent', field: 'CustIdent_Payer', filter: 'agTextColumnFilter', minWidth: 100, maxWidth: 150, },
      { headerName: 'Nazwa kontrahenta', field: 'CustName_Payer', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Spływ', field: 'DepositAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum' },
      { headerName: 'Sprzedaż', field: 'SaleAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum' },
      { headerName: 'Korekty', field: 'CorrectionAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum' },
      { headerName: 'Zwroty', field: 'ReturnAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum' },
    ];

    this.gridColumnsDefinition["sitCashFlowPivot"] = [
      { headerName: 'Handlowiec', field: 'AccountManager_Payer', filter: 'agTextColumnFilter', width: 200,
        enableRowGroup: true, rowGroup: true, enablePivot: true },
      { headerName: 'Grupa', field: 'CustomersGroupIdent', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false,
        enableRowGroup: true },
      { headerName: 'Nazwa grupy', field: 'CustomersGroupName', filter: 'agTextColumnFilter', width: 200,
        enableRowGroup: true, rowGroup: true, enablePivot: true },
      { headerName: 'Płatnik', field: 'AddGroupIdent', filter: 'agTextColumnFilter', width: 100,
        enableRowGroup: true, rowGroup: true, enablePivot: true },
      { headerName: 'Kontrahent', field: 'CustIdent_Payer', filter: 'agTextColumnFilter', minWidth: 100, maxWidth: 150, 
        enableRowGroup: true },
      { headerName: 'Nazwa kontrahenta', field: 'CustName_Payer', filter: 'agTextColumnFilter', width: 100, 
        enableRowGroup: true },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true },  
      { headerName: 'Rok-miesiąc', field: 'YearMonth', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true }, 
      { headerName: 'Spływ', field: 'DepositAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum', enableValue: true },
      { headerName: 'Sprzedaż', field: 'SaleAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum', enableValue: true },
      { headerName: 'Korekty', field: 'CorrectionAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum', enableValue: true },
      { headerName: 'Zwroty', field: 'ReturnAmount', type: 'numericColumn', renderType:'number', suppressMenu: true, width: 100,
        aggFunc: 'sum', enableValue: true },
    ];    
  }

}

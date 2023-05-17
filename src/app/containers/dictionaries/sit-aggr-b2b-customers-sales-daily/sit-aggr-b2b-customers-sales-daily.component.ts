import { Component, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-aggr-b2b-customers-sales-daily',
  templateUrl: './sit-aggr-b2b-customers-sales-daily.component.html',
  styleUrls: ['./sit-aggr-b2b-customers-sales-daily.component.scss'],
  host: {class: 'router-flex sit-aggr-b2b-customers-sales-daily-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitAggrB2bCustomersSalesDailyComponent extends SitDictBaseComponent {
  public defaultColDef;
  public autoGroupColumnDef;
  public pivotRowTotals;
  public pivotColumnGroupTotals;

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale)
      this.defaultColDef = {
        flex: 0,
        minWidth: 120,
        sortable: true,
        resizable: true,
      };
      this.autoGroupColumnDef = { 
        minWidth: 400, 
        pinned: 'left',
        sort: 'asc'
      };
      this.pivotRowTotals = 'after';
      this.pivotColumnGroupTotals = 'before';
    };

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitAggrB2BCustomersSalesDaily"] = [
      { headerName: 'Data', field: 'Date', width: 100, renderType: 'date' },
      { headerName: 'ID kontrahenta', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100, suppressMenu: true},
      { headerName: 'Kontrahent', field: 'CustName', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'ID produktu', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 100, suppressMenu: true},
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 100, suppressMenu: true},
      { headerName: 'Produkt', field: 'ProductName', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Ilość', field: 'Quantity', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60, renderType: 'number' },
    ];

    this.gridColumnsDefinition["sitAggrB2BCustomersSalesDailyChart"] = [
      { headerName: 'Dzień', field: 'Ord', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 50 },
      { headerName: 'ID produktu', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 100, suppressMenu: true},
      { headerName: 'Produkt', field: 'ProductName', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Ilość nar.', field: 'RunningTotalQuantity', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60, renderType: 'number' },
    ];

    this.gridColumnsDefinition["sitAggrB2BCustomersSalesDailyTops"] = [
      { headerName: 'Kontrahent', field: 'CustName', filter: 'agTextColumnFilter', width: 300,
        enablePivot: true, enableRowGroup: true, rowGroup: true, },
      { headerName: 'Produkt', field: 'ProductIdentTitle', filter: 'agTextColumnFilter', width: 300,
        enablePivot: true, enableRowGroup: true, rowGroup: true, },      
      { headerName: 'Okres', field: 'Period4Order', filter: 'agTextColumnFilter', width: 100,
        pivot: true },  
      { headerName: 'Ilość', field: 'Quantity', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn', 
        aggFunc: 'sum', enableValue: true },
    ];

  }  
}

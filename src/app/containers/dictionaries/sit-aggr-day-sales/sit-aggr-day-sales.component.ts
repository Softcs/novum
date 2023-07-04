import { Component, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-aggr-day-sales',
  templateUrl: './sit-aggr-day-sales.component.html',
  styleUrls: ['./sit-aggr-day-sales.component.scss'],
  host: {class: 'router-flex sit-aggr-day-sales-component'},
  encapsulation : ViewEncapsulation.None
})
export class SitAggrDaySalesComponent extends SitDictBaseComponent {
  public defaultColDef: any;
  public autoGroupColumnDef: any;
  public pivotRowTotals: any;
  public pivotColumnGroupTotals: any;
  
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

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitAggrDaySales"] = [
      { headerName: 'Data', field: 'Date', width: 90},
      { headerName: 'Magazyn', field: 'WarehouseIdent', width: 90},
      { headerName: 'Dokument', field: 'DocumentIdent', width: 90},
      { headerName: 'Produkt', field: 'ProductIdent', tooltipField: 'ProductIdent', width: 150},
      { headerName: 'Opis produktu', field: 'ProductName', tooltipField: 'ProductName', width: 200},
      { headerName: 'Kontrahent', field: 'CustIdent', tooltipField: 'CustIdent', width: 100},
      { headerName: 'Nazwa kontrahenta', field: 'CustName', tooltipField: 'CustName', width: 200},

      { headerName: 'Grupa kontrahentów', field: 'CustomersGroupIdent4Group', filter: 'agTextColumnFilter', width: 300,
        rowGroup: true, enableRowGroup: true, enablePivot: true },
      { headerName: 'Kontrahent', field: 'CustIdent4Group', filter: 'agTextColumnFilter', width: 300,
        rowGroup: true, enableRowGroup: true, enablePivot: true },

      { headerName: 'Ilość', field: 'Quantity', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.0-0', enableValue: true },
      { headerName: 'Netto', field: 'Net', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2', aggFunc: 'sum', enableValue: true },
      { headerName: 'Rozliczenie', field: 'StandardAmount', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2', enableValue: true },

      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100,
        enablePivot: true },  
      { headerName: 'Rok-miesiąc', field: 'YearMonth', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true }, 
    ]
  }
}
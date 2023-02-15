import { Component, Inject, LOCALE_ID} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-aggr-month-sale-by-author',
  templateUrl: './sit-aggr-month-sale-by-author.component.html',
  styleUrls: ['./sit-aggr-month-sale-by-author.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAggrMonthSaleByAuthorComponent extends SitDictBaseComponent {
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
    this.gridColumnsDefinition["sitAggrMonthSaleByAuthor"] = [
      { headerName: 'Autor', field: 'Author', filter: 'agTextColumnFilter', width: 300,
        rowGroup: true, enableRowGroup: true, enablePivot: true },
      { headerName: 'Tytuł', field: 'Title', filter: 'agTextColumnFilter', width: 300,
        rowGroup: true, enableRowGroup: true, enablePivot: true },
      { headerName: 'Symbol', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150,
        rowGroup: false, enableRowGroup: false, enablePivot: true },
      { headerName: 'Nazwa', field: 'ProductName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true },  
      { headerName: 'Kwartał', field: 'Quarter', filter: 'agTextColumnFilter', width: 100,
        pivot: true, enablePivot: true },  
      { headerName: 'Miesiąc', field: 'Month', filter: 'agTextColumnFilter', width: 100,
        enablePivot: true },  
      { headerName: 'Ilość', field: 'Quantity', filter: 'agTextColumnFilter', width: 120, renderType: "number", type: 'numericColumn', 
        aggFunc: 'sum', enableValue: true },
    ];
 
   }
}

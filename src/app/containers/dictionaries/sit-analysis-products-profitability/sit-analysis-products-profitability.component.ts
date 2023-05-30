import { Component, ViewEncapsulation, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';
import { formatNumber } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sit-analysis-products-profitability',
  templateUrl: './sit-analysis-products-profitability.component.html',
  styleUrls: ['./sit-analysis-products-profitability.component.scss'],
  host: {class: 'router-flex sit-analysis-products-profitability-component'},
  encapsulation : ViewEncapsulation.None
})
export class SitAnalysisProductsProfitabilityComponent extends SitDictBaseComponent {
  public defaultColDef;
  public autoGroupColumnDef;
  public rowGroupPanelShow;
  public suppressAggFuncInHeader;
  public groupIncludeTotalFooter
  imgPrvHeight: string = '60';

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
      this.defaultColDef = {
        sortable: true,
        flex: 1,
        minWidth: 100,
      };
      this.autoGroupColumnDef = { 
        sortable: true,
        sort: 'asc',
        resizable: true,
        minWidth: 200,
      };
      this.rowGroupPanelShow = 'always';
      this.suppressAggFuncInHeader = 'true';
      this.groupIncludeTotalFooter = 'true';
    };

  public getImageUrlPrv(data:any) {
    if (!data || !data.sitImagesG_prv || !data.FileName_prv) {
      return '<img height="' + this.imgPrvHeight + '" class="img-for-grid-mini" src="' + this.urlService.getImageUrl("noimage", "noimage_s.jpg") + '" title="grafika: ' + data.ProductName + '" alt="grafika dla: ' + data.ProductName + '"/>';
    }
    return '<img height="' + this.imgPrvHeight + '" class="img-for-grid-mini" src="' + this.urlService.getImageUrl(data.sitImagesG_prv, data.FileName_prv) + '" title="grafika: ' + data.ProductName + '" alt="grafika dla: ' + data.ProductName + '"/>';
  };

  public prepareColumnsDefinitnion() {
    var locale = this.locale;
    this.gridColumnsDefinition["sitProductsProfitability"] = [
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 200, tooltipField: 'PublicationIdent',
        enableRowGroup: true, rowGroup: true, hide: true, },
      { headerName: 'Autor', field: 'Author', width: 200, tooltipField: 'Author',
        enableRowGroup: true, hide: true},
      { headerName: 'Manager', field: 'ManagerName', width: 200, tooltipField: 'ManagerName',
        enableRowGroup: true, hide: true},

      { headerName: 'Tytuł', field: 'Title', width: 200, tooltipField: 'Title', defaultVisibility: false},
      { headerName: 'Produkt', field: 'ProductName', width: 200, tooltipField: 'ProductName', defaultVisibility: false},
      { headerName: 'EAN', field: 'EAN', width: 100, defaultVisibility: false},

      { headerName: 'Sprz. ilość', field: 'SaleQuantity', width: 80, type: 'numericColumn', renderType:'number', suppressMenu: true, defaultVisibility: false,
        aggFunc: 'sum' },
      { headerName: 'Sprz. netto', field: 'SaleNetAmount', width: 80, type: 'numericColumn', renderType:'number', suppressMenu: true,
        aggFunc: 'sum' },

      { headerName: 'Całkowite',
        children: [  
          { headerName: 'Wynik', field: 'IncomAfterSalesTotal', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true,
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const totalCost = params.getValue('TotalCost') || 0;
              return saleNetAmount-totalCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
          },
          { headerName: 'Koszt', field: 'TotalCost', type: 'numericColumn', renderType:'number', suppressMenu: true,
            aggFunc: 'sum',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
          },
          { headerName: 'Przebitka', field: 'Margin01Total', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true, 
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const totalCost = params.getValue('TotalCost') || 0;
              return totalCost != 0 && saleNetAmount/totalCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
          },
          { headerName: 'ROI', field: 'ROITotal', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true, 
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const totalCost = params.getValue('TotalCost') || 0;
              return totalCost != 0 && (saleNetAmount-totalCost)/totalCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
          },
        ]
      },

      { headerName: 'Realizowane',
        children: [ 
          { headerName: 'Wynik', field: 'IncomAfterSalesReal', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true,
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const realizedCost = params.getValue('RealizedCost') || 0;
              return saleNetAmount-realizedCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },   
          },
          { headerName: 'Koszt', field: 'RealizedCost', type: 'numericColumn', renderType:'number', suppressMenu: true,
            aggFunc: 'sum',
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} }, 
          },
          { headerName: 'Przebitka', field: 'Margin01Real', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true,
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const realizedCost = params.getValue('RealizedCost') || 0;
              return realizedCost != 0 && saleNetAmount/realizedCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
          },
          { headerName: 'ROI', field: 'ROIReal', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true,
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const realizedCost = params.getValue('RealizedCost') || 0;
              return realizedCost != 0 && (saleNetAmount-realizedCost)/realizedCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
          },
        ]
      },

      { headerName: 'Planowane',
        children: [ 
          { headerName: 'Wynik', field: 'IncomAfterSalesPlan', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true,
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const plannedCost = params.getValue('PlannedCost') || 0;
              return saleNetAmount-plannedCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
          },
          { headerName: 'Koszt', field: 'PlannedCost', type: 'numericColumn', renderType:'number', suppressMenu: true,
            aggFunc: 'sum',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
          },
          { headerName: 'Przebitka', field: 'Margin01Plan', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true, 
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const plannedCost = params.getValue('PlannedCost') || 0;
              return plannedCost != 0 && saleNetAmount/plannedCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
          },
          { headerName: 'ROI', field: 'ROIPlan', width: 100, type: 'numericColumn', renderType:'number', suppressMenu: true,
            valueGetter: (params: any) => {
              const saleNetAmount = params.getValue('SaleNetAmount') || 0;
              const plannedCost = params.getValue('PlannedCost') || 0;
              return plannedCost != 0 && (saleNetAmount-plannedCost)/plannedCost;
            },
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
          },
        ]
      },

      { headerName: 'Koszt szac.', field: 'EstimatedCost', type: 'numericColumn', renderType:'number', suppressMenu: true,
        aggFunc: 'sum', defaultVisibility: false },
    ]

    this.gridColumnsDefinition["sitProductsProfitabilityInPeriod"] = [
      { headerName: 'Publikacja', field: 'PublicationIdent', width: 140, tooltipField: 'PublicationIdent', defaultVisibility: false},
      { headerName: 'Tytuł', field: 'Title', width: 200, tooltipField: 'Title', defaultVisibility: false},
      { headerName: 'Manager', field: 'ManagerName', width: 150, tooltipField: 'ManagerName', defaultVisibility: false},
      { headerName: 'Okładka', 
        field: 'sitImagesG_prv', 
        maxWidth: 80, 
        suppressMenu: true,
        cellRenderer: (params:any) => this.getImageUrlPrv(params.data),
        cellStyle: {'padding':'8px 0px 0px 0px', 'align-items':'center','display':'flex','justify-content': 'center','vertical-align': 'middle'}
      },
      { headerName: 'Autor', field: 'Author', width: 350, wrapText: true,
        cellRenderer: (params:any) => {
          let dataArr = [
            (params.data.ProductName ? '<b><span title="' + params.data.ProductName + '"">' + params.data.ProductName + '</span></b>' : null),
            (params.data.EAN ? '<span title="' + params.data.EAN + '" style="color: gray">' + params.data.EAN + '</span>' : null),
            (params.data.Author ? '<span title="' + params.data.Author + '">' + params.data.Author + '</span>' : null),
          ];
          return dataArr.filter(Boolean).join('<br/>');
        },
        cellStyle: {'line-height': '1.6em', 'padding-top': '.3em'}    
      },
      { headerName: 'Nakład', field: 'Circulation', width: 160, type: 'rightAligned', suppressMenu: true,
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Nakład</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Circulation"], locale,'1.0-0').replace(/[,]/g,' ') +'</span><br>'
              + '<span style="color: dimgray;">Przyjęcia</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["ReceiveQuantity"], locale,'1.0-0').replace(/[,]/g,' ') +'</span><br>'
              + '<span style="color: dimgray;">Stan</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["StocksQuantity"], locale,'1.0-0').replace(/[,]/g,' ') +'</span><br>'
              + '<span style="color: dimgray;">% sprzedaży</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["SoldReceivePercent"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}   
      },
      { headerName: 'Daty', field: 'ReleaseDate', width: 140, type: 'rightAligned', suppressMenu: true, 
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Premiery</span> <span style="display:inline-block;width:60px;">' + formatDate(params.data["PremiereDate"], 'yyyy-MM-dd', locale) +'</span><br>'
              + '<span style="color: dimgray;">Wydania</span> <span style="display:inline-block;width:60px;">' + formatDate(params.data["ReleaseDate"], 'yyyy-MM-dd', locale) +'</span><br>'
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'} 
      },
      { headerName: 'Dni od', field: 'DaysFromReleaseDate', width: 130, type: 'rightAligned', suppressMenu: true,
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Premiery</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["DaysFromPremiereDate"], locale,'1.0-0').replace(/[,]/g,' ') +'</span><br>'
              + '<span style="color: dimgray;">Wydania</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["DaysFromReleaseDate"], locale,'1.0-0').replace(/[,]/g,' ') +'</span><br>'
          },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}   
      },
      { headerName: 'Koszty', field: 'TotalCost', width: 200, type: 'rightAligned', suppressMenu: true,
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Szacunkowe</span> <span style="display:inline-block;width:80px;">' + formatNumber(params.data["EstimatedCost"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
              + '<span style="color: dimgray;">Planowane</span> <span style="display:inline-block;width:80px;">' + formatNumber(params.data["PlannedCost"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
              + '<span style="color: dimgray;">Realizowane</span> <span style="display:inline-block;width:80px;">' + formatNumber(params.data["RealizedCost"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
              + '<span style="color: dimgray;">Całkowite</span> <span style="display:inline-block;width:80px;">' + formatNumber(params.data["TotalCost"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}   
      },
      { headerName: 'Sprzedaż', field: 'SaleQuantity', width: 140, type: 'rightAligned', suppressMenu: true,
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Netto</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["SaleNetAmount"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
             + '<span style="color: dimgray;">Ilość</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["SaleQuantity"], locale,'1.0-0').replace(/[,]/g,' ') +'</span><br>'
        },
      cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}         
      },   
      { headerName: 'Wg kosztów planowanych', field: 'Margin01Plan', width: 210, type: 'rightAligned',  suppressMenu: true,
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Przebitka</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.Margin01Plan < 1 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["Margin01Plan"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">ROI</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.ROIPlan < 1 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["ROIPlan"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Wynik na inw.</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.IncomAfterSalesPlan < 0 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["IncomAfterSalesPlan"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}   
      },
      { headerName: 'Wg kosztów realizowanych', field: 'Margin01Plan', width: 210, type: 'rightAligned',  suppressMenu: true,
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Przebitka</span> <span style="display:inline-block;width:80px; color:' 
              + (params.data.Margin01Real < 1 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["Margin01Real"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">ROI</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.ROIReal < 1 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["ROIReal"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Wynik na inw.</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.IncomAfterSalesReal < 0 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["IncomAfterSalesReal"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}   
      },
      { headerName: 'Wg kosztów całkowitych', field: 'Margin01Plan', width: 210, type: 'rightAligned',  suppressMenu: true,
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Przebitka</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.Margin01Total < 1 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["Margin01Total"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">ROI</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.ROITotal < 1 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["ROITotal"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<b><span style="color: dimgray;">Wynik na inw.</span> <span style="display:inline-block;width:80px;color:' 
              + (params.data.IncomAfterSalesTotal < 0 ? 'red' : 'green') + ';">' 
              + formatNumber(params.data["IncomAfterSalesTotal"], locale,'1.2-2').replace(/[,]/g,' ') +'</span></b><br>'
            + '<span style="color: dimgray;">Koszty promocji</span> <span style="display:inline-block;width:80px;">' + formatNumber(params.data["SalesPromotionCost"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
        },
        cellStyle: {'line-height': '1.5em', 'padding-top': '.3em'}   
      },

    ]

  }

  hideSummary(){
    if (!this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter')) { return }
    else return(this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter').showSummary == 1 ? false : true);
  }

  hideROIFilter(){
    if (!this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter')) { return }
    else return(this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter').showByROITotal == 1 ? false : true);
  }

  hidePremiereOnlyFilter(){
    if (!this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter')) { return }
    else return(this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter').useReleaseDate == 1 ? false : true);
  }  
  
  hideDaysFromReleaseFilter(){
    if (!this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter')) { return }
    else return(this.dictContainer?.activeRow('sitProductsProfitabilityInPeriodFilter').useReleaseDate == 0 ? false : true);
  }
}

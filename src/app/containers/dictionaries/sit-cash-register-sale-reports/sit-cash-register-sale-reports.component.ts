import { Component} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-cash-register-sale-reports',
  templateUrl: './sit-cash-register-sale-reports.component.html',
  styleUrls: ['./sit-cash-register-sale-reports.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCashRegisterSaleReportsComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitCashRegisterSaleReportsHeaders"] = [
      { headerName: 'ID', field: 'sitCashRegisterSaleReportsHeadersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCashRegisterSaleReportsHeadersG', width: 100, defaultVisibility: false },
      { headerName: 'Kasa', field: 'CashRegisterIdent', width: 120 },
      { headerName: 'Magazyn', field: 'WarehouseIdent', width: 100 },
      { headerName: 'Nazwa magazynu', field: 'WarehouseName', width: 200 },
      { headerName: 'Data raportu', field: 'ReportDate', filter: 'agDateColumnFilter', width: 120, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd"},   
      { headerName: 'Sprzedaż od', field: 'SaleDateFrom', filter: 'agDateColumnFilter', width: 120, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd"},   
      { headerName: 'Sprzedaż do', field: 'SaleDateTo', filter: 'agDateColumnFilter', width: 120, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd"},   
    ];    

    this.gridColumnsDefinition["sitCashRegisterSaleReportsPositions"] = [
      { headerName: 'ID', field: 'sitCashRegisterSaleReportsPositionsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCashRegisterSaleReportsPositionsG', width: 100, defaultVisibility: false },
      { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 60, sort: 'asc' },
      { headerName: 'Produkt', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, },
      { headerName: 'Nazwa produktu', field: 'ProductName', filter: 'agTextColumnFilter', width: 200,},
      { headerName: 'Ilość', field: 'Quantity', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
      { headerName: 'Cena', field: 'Price', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
      { headerName: 'Netto', field: 'Net', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', agr: 'sum' },
      { headerName: 'Vat', field: 'VAT', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number', agr: 'sum' },
      { headerName: 'Brutto', field: 'Gross', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', agr: 'sum' },
    ];

    this.gridColumnsDefinition["sitCashRegisterSaleWithStock"] = [
      { headerName: 'ID', field: 'sitProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProductsG', width: 100, defaultVisibility: false },
      { headerName: 'Produkt', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, },
      { headerName: 'Nazwa produktu', field: 'ProductName', filter: 'agTextColumnFilter', },
      { headerName: 'Stan aktualny', field: 'QuantityStock', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number' },
      { headerName: 'Sprzedaż', field: 'QuantityReport', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number' },
      { headerName: 'Dostępne', field: 'StockAvailable4Sale', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number' },
      { headerName: 'Cena brutto', field: 'GrossPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, 
        renderType: 'number', headerTooltip: 'Średnia cena brutto',
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} }},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, 
        renderType: 'number', headerTooltip: 'Wartość brutto sprzedaży',
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} }},
      { headerName: 'Stan początkowy', field: 'StockOfDateFrom', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, 
        renderType: 'number', headerTooltip: 'Stan na pierwszy dzień sprzedaży',
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} }},
      { headerName: 'Przych. w okresie', field: 'IncomeInPeriod', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, 
        width: 120, renderType: 'number',
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },
      { headerName: 'Stan dost. w okresie', field: 'QuantityAvailableInPeriod', filter: 'agNumberColumnFilter', type: 'numericColumn', 
        suppressMenu: true, width: 120, renderType: 'number', headerTooltip: 'Suma stanu początkowego i przychodów',
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },
      { headerName: 'Sprzedaż_', field: 'QuantityReport', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, 
        renderType: 'number',
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },
      { headerName: 'Dostępne_', field: 'StockAvailable4Sale2', filter: 'agNumberColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, 
        renderType: 'number', headerTooltip: 'Różnica stanu dostępnego w okresie i sprzedaży',
        cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} } },
    ]; 

  }
}
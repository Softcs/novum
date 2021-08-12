import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-royalties',
  templateUrl: './sit-royalties.component.html',
  styleUrls: ['./sit-royalties.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRoyaltiesComponent extends SitDictBaseComponent {

  detailCellRendererParamsBenef;

  public prepareColumnsDefinitnion() {

    this.gridColumnsDefinition["sitRoyaltiesHeaders"] = [
      { headerName: 'GUID', field: 'sitRoyaltiesHeadersG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Publikacja', field: 'PublicationIdent', tooltipField: 'PublicationIdent', filter: 'agTextColumnFilter', width: 200, sort: 'asc', cellRenderer: 'agGroupCellRenderer' },
      { headerName: 'Od', field: 'DateFrom', width: 90, renderType: 'date', renderFormat: 'yyyy-MM-dd', sort: 'asc' },
      { headerName: 'Do', field: 'DateTo', width: 90, renderType: 'date', renderFormat: 'yyyy-MM-dd' },
      { headerName: 'Wart. PLN', field: 'Amount', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true, agr: 'sum'},
      { headerName: 'Wal.', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 60, suppressMenu: true },
      { headerName: 'Kurs wal.', field: 'ExRate', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.4-4', width: 80, suppressMenu: true},
      { headerName: 'Wart. wal.', field: 'AmountCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true, agr: 'sum'},
      { headerName: 'Zaliczka', field: 'Advance', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true},
      { headerName: 'Należność', field: 'RoyDue', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true},
      { headerName: 'Do zapłaty', field: 'Payable', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true, agr: 'sum'},
      { headerName: 'Beneficjenci', field: 'Benef', tooltipField: 'Benef', filter: 'agTextColumnFilter', width: 200,}

    ],

    this.gridColumnsDefinition["sitRoyalties"] = [
      { headerName: 'GUID', field: 'sitRoyaltiesG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      // { headerName: 'Publikacja', field: 'PublicationIdent', tooltipField: 'PublicationIdent', filter: 'agTextColumnFilter', width: 150, sort: 'asc'},
      { headerName: 'Produkt.', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150, sort: 'asc' },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nakład', field: 'PrintRun', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Stan', field: 'Stock', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Sprzed.', field: 'Sale', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 80, suppressMenu: true},
      { headerName: 'Z kompl.', field: 'SaleInSets', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 80, suppressMenu: true},
      { headerName: 'Gratisy', field: 'Free', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Defekty', field: 'Damaged', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 70, suppressMenu: true},
      { headerName: 'Ilość', field: 'Quantity', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.0-0', width: 80, suppressMenu: true},
      { headerName: 'Cena', field: 'UnitPrice', tooltipField: 'PriceTypeIdent', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 60, suppressMenu: true},
      { headerName: 'Stawka', field: 'RoyRate', tooltipField: 'BillingTypeIdent', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 80, suppressMenu: true},
      { headerName: 'Rodzaj', field: 'BillingTypeIdent', filter: 'agTextColumnFilter', width: 100, suppressMenu: true, defaultVisibility: false },
      { headerName: 'Wart. PLN', field: 'Amount', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true, agr: 'sum'},
      { headerName: 'Wal.', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 60, suppressMenu: true },
      { headerName: 'Kurs wal.', field: 'ExRate', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', renderFormat: '1.4-4', width: 80, suppressMenu: true},
      { headerName: 'Wart. wal.', field: 'AmountCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', renderType: 'number', width: 90, suppressMenu: true, agr: 'sum'},

    ],

    this.gridColumnsDefinition["sitRoyaltiesBenef"] = [
      { headerName: 'Ident.', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 250, },
      { headerName: 'Udział %', field: 'PercentShare', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, },
      { headerName: 'Wart. wal.', field: 'AmountCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},
      { headerName: 'Zaliczka', field: 'Advance', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},
      { headerName: 'Należność', field: 'RoyDue', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},
      { headerName: 'Do zapłaty', field: 'Payable', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},


    ];

    this.detailCellRendererParamsBenef = {
      detailGridOptions: {
        columnDefs: [
          { headerName: 'Ident.', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100, },
          { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 250, },
          { headerName: 'Udział %', field: 'PercentShare', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, },
          { headerName: 'Wart. wal.', field: 'AmountCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},
          { headerName: 'Zaliczka', field: 'Advance', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},
          { headerName: 'Należność', field: 'RoyDue', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},
          { headerName: 'Do zapłaty', field: 'Payable', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number'},
          ],
      },

      getDetailRowData: function (params) {
          params.successCallback(params.data.Det);
      },
    }
  }


}
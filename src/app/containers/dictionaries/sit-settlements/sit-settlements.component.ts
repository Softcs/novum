import { DataSetDefinitionWrapper } from '@app/_models/dataSetDefinitionWrapper';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { DataSetWrapper } from '@app/_models';

@Component({
  selector: 'app-sit-settlements',
  templateUrl: './sit-settlements.component.html',
  styleUrls: ['./sit-settlements.component.scss'],
  host: {class: 'router-flex'}
})
export class SitSettlementsComponent extends SitDictBaseComponent {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitSettlements"] = [
      { headerName: 'Ident.', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Numer', field: 'DocumentNumber', tooltipField: 'DocumentNumber', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data', field: 'SettlementDate', width: 100, renderType: 'date', },
      { headerName: 'Data płat.', field: 'PaymentDate', width: 100, renderType: 'date', },
      { headerName: 'Dni sp.', field: 'Days', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 70, suppressMenu: true, renderType: 'number', renderFormat: '1.0-0'},
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true },
      { headerName: 'Nal. w wal.', field: 'ReceivablesCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', agr: "sum"},
      { headerName: 'Zob. w wal.', field: 'PayablesCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', agr: "sum" },
      { headerName: 'Nal. w PLN', field: 'Receivables', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', agr: "sum" },
      { headerName: 'Zob. w PLN', field: 'Payables', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', agr: "sum" }
    ];

    this.gridColumnsDefinition["sitSettlementsDet"] = [
      { headerName: 'Typ dok.', field: 'DocumentIdent', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Numer', field: 'DocumentNo', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80 },
      { headerName: 'Numer pełny', field: 'DocumentNumber', tooltipField: 'DocumentNumber', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Data', field: 'Date', width: 100, renderType: 'date' },
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true },
      { headerName: 'Kwota w wal.', field: 'AmountCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', agr: "sum"  },
      { headerName: 'Kwota w PLN', field: 'Amount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', agr: "sum" },
      { headerName: 'Opis', field: 'Description', tooltipField: 'Description', filter: 'agTextColumnFilter', width: 300 }
    ];

    this.gridColumnsDefinition["sitSettlementsByAge"] = [
      { headerName: 'Ident.', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nierozl.', field: 'SumAll', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'Nieozn.', field: 'NoPaymentDate', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'Przed term.', field: 'BeforePaymentDate', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'P01', field: 'pr01', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'P02', field: 'pr02', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'P03', field: 'pr03', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'P04', field: 'pr04', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'P05', field: 'pr05', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'P06', field: 'pr06', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'Po term.', field: 'AfterPaymentDate', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},
      { headerName: 'Wpłaty', field: 'DepositAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum"},

    ];
  }

  }

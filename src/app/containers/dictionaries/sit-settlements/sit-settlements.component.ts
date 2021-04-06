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

  pinnedBottomRowData;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitSettlements"] = [
      { headerName: 'Ident.', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Numer', field: 'DocumentNumber', tooltipField: 'DocumentNumber', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Data', field: 'SettlementDate', width: 100, renderType: 'date', },
      { headerName: 'Data płat.', field: 'PaymentDate', width: 100, renderType: 'date', },
      { headerName: 'Dni sp.', field: 'Days', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 70, suppressMenu: true, renderType: 'number', renderFormat: '1.0-0' },
      { headerName: 'Waluta', field: 'CurrencyIdent', filter: 'agTextColumnFilter', width: 70, suppressMenu: true },
      { headerName: 'Nal. w wal.', field: 'ReceivablesCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', },
      { headerName: 'Zob. w wal.', field: 'PayablesCurr', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', },
      { headerName: 'Nal. w PLN', field: 'Receivables', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', },
      { headerName: 'Zob. w PLN', field: 'Payables', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130, renderType: 'number', },
    ];
  }

  calcSum() {
    var result = [];
    var receivablesCurr = 0;
    var payablesCurr = 0;
    var receivables = 0;
    var payables = 0;

    if (this.dictContainer) {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper("sitSettlements");
      if (dataSourceResponseWrapper.rows) {
        dataSourceResponseWrapper.rows.forEach(function(row){
          receivablesCurr = receivablesCurr + row['ReceivablesCurr'];
          payablesCurr = payablesCurr + row['PayablesCurr'];
          receivables = receivables + row['Receivables'];
          payables = payables + row['Payables'];
        })
      }
    }

    result.push({
      ReceivablesCurr: receivablesCurr,
      PayablesCurr: payablesCurr,
      Receivables: receivables,
      Payables: payables,
      SettlementDate: null,
      PaymentDate: null,
      Days: null
    }
    );

    return result;
  }

  refreshAfter(dataSourceManager) {
    this.pinnedBottomRowData = this.calcSum();
  }
}

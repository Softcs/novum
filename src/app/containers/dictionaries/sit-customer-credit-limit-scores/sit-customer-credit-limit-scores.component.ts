import { Component} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-customer-credit-limit-scores',
  templateUrl: './sit-customer-credit-limit-scores.component.html',
  styleUrls: ['./sit-customer-credit-limit-scores.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomerCreditLimitScoresComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitCustomerCreditLimitScores"] = [
      { headerName: 'ID', field: 'sitCustomerCreditLimitScoresId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomerCreditLimitScoresG', width: 100, defaultVisibility: false },
      { headerName: 'Data oceny', field: 'ScoreDate', filter: 'agDateColumnFilter',width: 110, floatingFilter: false, 
        cellRenderer: function(params) {
          return '<table style="width:100%"><tr><td style="width:50%">' + params.data["ScoreDate"] + '</td></tr>'
            + '<tr><td>' + params.data["AcceptanceDesc"] + '</td></tr></table>'
        }
      },     
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', flex: 1,
        cellRenderer: function(params) {
          return '<table style="width:100%"><tr>'
              + '<td style="width:50%">ID: ' + params.data["CustIdent"] + '</td>'
              + (params.data["VATId"] === '' ? '' : '<td style="width:25%">NIP: ' + params.data["VATId"] +'</td>')
              + '<td style="text-align:right">' + params.data["ExportedDescription"] + '</td>'
            + '</tr>'
            + '<tr><td colspan="3"><b>' + params.data["CustName"] + '</b></td></tr></table>'
        }
      },
    ];

   this.gridColumnsDefinition["sitCustomerCreditLimitScoresSalesAndPays"] =  [
      { headerName: 'Okres', field: 'description', width: 150,
        cellStyle: function(params) { return params.data["Period"] === 'Q5' ? {"font-weight":"bold"} : null; }, sortable: false,
      },
      { headerName: 'Wartość faktur', field: 'Sale', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, renderType: 'number',
        cellStyle: function(params) { return params.data["Period"] === 'Q5' ? {"font-weight":"bold"} : null; }, sortable: false,
      },
      { headerName: 'Wartość korekt', field: 'SaleCor', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, renderType: 'number',
        cellStyle: function(params) { return params.data["Period"] === 'Q5' ? {"font-weight":"bold"} : null; }, sortable: false,
      },
      { headerName: 'Sprzedaż', field: 'SaleNoCor', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, renderType: 'number',
        cellStyle: function(params) { return params.data["Period"] === 'Q5' ? {"font-weight":"bold"} : null; }, sortable: false,
      },
      { headerName: 'Marża', field: 'Margin', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120, renderType: 'number',
        cellStyle: function(params) { return params.data["Period"] === 'Q5' ? {"font-weight":"bold"} : null; }, sortable: false,
      },
      { headerName: 'Marża %', field: 'MarginPercent', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'percent', renderFormat: '1.0-0',
        cellStyle: function(params) { return params.data["Period"] === 'Q5' ? {"font-weight":"bold"} : null; }, sortable: false,
      },
      { headerName: 'Wpłat', field: 'Payment', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number',
        cellStyle: function(params) { return params.data["Period"] === 'Q5' ? {"font-weight":"bold"} : null; }, sortable: false,
      },
    ];

    this.gridColumnsDefinition["sitAcceptances"] = [
      { headerName: 'ID', field: 'sitAcceptancesG', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAcceptancesId', width: 100, defaultVisibility: false },
      { headerName: 'Data wstawienia', field: 'InsertDate', filter: 'agDateColumnFilter',width: 140, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd H:mm:ss", sort: 'asc'},     
      { headerName: 'Poziom akceptacji', field: 'AcceptanceStepName', width: 200 },
      { headerName: 'Akceptujący', field: 'UserName', width: 200 },
      { headerName: 'Status akceptacji', field: 'AcceptedDesc', width: 150,
        cellStyle: function(params) {
          if (params.value === 'Do akceptacji') { return { color: 'orange', 'font-weight': 600 }; }
          else if (params.value === 'Zaakceptowane') { return { color: 'green', 'font-weight': 600 }; }
          else if (params.value === 'Odrzucone') { return { color: 'red', 'font-weight': 600 }; }
          else { return null; }
        }
      },
      { headerName: 'Data akceptacji', field: 'AcceptanceDate', filter: 'agDateColumnFilter',width: 140, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd H:mm:ss"},     
      { headerName: 'Komentarz', field: 'Comment', width: 300 },
    ];

    this.gridColumnsDefinition["sitCustomerCreditLimitScoresStatus"] = [
      { headerName: 'ID', field: 'sitCustomersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitCustomersG', width: 100, defaultVisibility: false },
      { headerName: 'Kontrahent', field: 'CustIdent', width: 120 },
      { headerName: 'Nazwa', field: 'CustName', width: 300 },
      { headerName: 'Data obowiązywania', field: 'CreditLimitDateTo', filter: 'agDateColumnFilter', width: 160, floatingFilter: false, renderType: "date", 
        renderFormat: "yyyy-MM-dd"},   
      { headerName: 'Status', field: 'LimitDescription', width: 150 },
    ];    

  }
}


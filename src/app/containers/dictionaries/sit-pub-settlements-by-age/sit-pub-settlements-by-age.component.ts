import { Component, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-pub-settlements-by-age',
  templateUrl: './sit-pub-settlements-by-age.component.html',
  styleUrls: ['./sit-pub-settlements-by-age.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'router-flex sit-pub-settlements-by-age-component'}
})
export class SitPubSettlementsByAgeComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitSettlementsByAge"] = [
      { headerName: 'Ident.', field: 'CustIdent', filter: 'agTextColumnFilter', width: 100,
        cellClass: ['font11','textFormat'] 
      },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nierozl.', field: 'SumAll', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum", sort: "desc",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: 'Nieozn.', field: 'NoPaymentDate', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: 'Przed term.', field: 'BeforePaymentDate', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '1-14', field: 'pr01', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '15-30', field: 'pr02', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '31-45', field: 'pr03', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '46-60', field: 'pr04', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '61-90', field: 'pr05', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '91-180', field: 'pr06', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '181-360', field: 'pr07', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: '>360', field: 'pr08', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: 'Po term.', field: 'AfterPaymentDate', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: 'Wpłaty', field: 'DepositAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, renderType: 'number', agr: "sum",
        cellClass: ['font11','numberFormat2Dec']
      },
      { headerName: 'Grupa', field: 'CustomersGroupIdent', filter: 'agTextColumnFilter', width: 100,defaultVisibility: false },
      { headerName: 'Nazwa grupy', field: 'CustomersGroupName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Handlowiec', field: 'AccountManager', filter: 'agTextColumnFilter', width: 200 },
    ];
    
  }


}

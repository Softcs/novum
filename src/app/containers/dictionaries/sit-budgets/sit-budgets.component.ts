import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-budgets',
  templateUrl: './sit-budgets.component.html',
  styleUrls: ['./sit-budgets.component.scss'],
  host: {class: 'router-flex sit-budgets-component'},
  encapsulation : ViewEncapsulation.None,

})
export class SitBudgetsComponent extends SitDictBaseComponent {
  groupDefaultExpanded;
  getDataPath;
  autoGroupColumnDef;

  public prepareColumnsDefinitnion(){
    this.autoGroupColumnDef = {
      headerName: 'Pozycja',
      minWidth: 200,
      cellRendererParams: { suppressCount: true },
    };
    this.groupDefaultExpanded = 0;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

    this.gridColumnsDefinition["sitBudgets"] = [
      { headerName: 'Rok', field: 'FiscalYear', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false},
      // { headerName: 'Pozycja', field: 'BudgetItem', width: 100},
      { headerName: 'Opis', field: 'BudgetItemDesc', width: 200},
      { headerName: '1 Plan', field: 'P01Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '1 Wyk.', field: 'P01Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '2 Plan', field: 'P02Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '2 Wyk.', field: 'P02Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '3 Plan', field: 'P03Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '3 Wyk.', field: 'P03Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '4 Plan', field: 'P04Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '4 Wyk.', field: 'P04Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '5 Plan', field: 'P05Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '5 Wyk.', field: 'P05Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '6 Plan', field: 'P06Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '6 Wyk.', field: 'P06Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '7 Plan', field: 'P07Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '7 Wyk.', field: 'P07Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '8 Plan', field: 'P08Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '8 Wyk.', field: 'P08Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '9 Plan', field: 'P09Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '9 Wyk.', field: 'P09Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '10 Plan', field: 'P010Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '10 Wyk.', field: 'P010Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '11 Plan', field: 'P011Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '11 Wyk.', field: 'P011Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '12 Plan', field: 'P012Plan', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },
      { headerName: '12 Wyk.', field: 'P012Exec', filter: 'agNumberColumnFilter', type: 'numericColumn', renderType:'number', width: 100, },

    ];
  }
}

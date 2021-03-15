import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-payroll-components',
  templateUrl: './sit-payroll-components.component.html',
  styleUrls: ['./sit-payroll-components.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPayrollComponentsComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitPayrollComponents"] = [
      { headerName: 'ID', field: 'sitPayrollComponentsId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollComponentsG' },
      { headerName: 'Lp', field: 'OrdId', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60, sort: 'asc',suppressMenu: true},
      { headerName: 'Identyfikator', field: 'PayrollComponentIdent', width: 150 },
      { headerName: 'Opis', field: 'PayrollComponentDesc', width: 300 },
      { headerName: 'Ident.zew.', field: 'ExtIdent01', width: 200 },
      { headerName: 'Kolumna w rozliczeniu', field: 'SettlementsColumnName', width: 200 },
    ];

    this.gridColumnsDefinition["sitPayrollComponentsAccountingDef"] = [
      { headerName: 'ID', field: 'sitPayrollComponentsAccountingDefId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollComponentsAccountingDefG' },
      { headerName: 'Ident.typu listy płac', field: 'PayrollTypeIdent', width: 100 },
      { headerName: 'Typ listy płac', field: 'PayrollTypeName', width: 200 },
      { headerName: 'Konto WN', field: 'CAccount', width: 150 },
      { headerName: 'Konto MA', field: 'DAccount', width: 150 },
      { headerName: 'Odwr. znak', field: 'RevSign', cellRenderer: 'gridCheckboxRenderer',width: 90 },
      { headerName: 'Opis w księgowaniu', field: 'PosDesc', width: 150 },
    ]

   }

  onFirstDataRendered(params) {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitPayrollComponentsG')) {
      params.columnApi.setColumnsVisible(['sitPayrollComponentsId','sitPayrollComponentsG'], false)
    }

    if (params.columnApi.getColumn('sitPayrollComponentsAccountingDefG')) {
      params.columnApi.setColumnsVisible(['sitPayrollComponentsAccountingDefId','sitPayrollComponentsAccountingDefG','PayrollTypeIdent'], false)
    }
  }


}

import { Component, OnInit, ViewChild, ViewChildren, QueryList, LOCALE_ID, Inject } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GridService } from '@app/_services/grid.service';
import { sitGlobalConfig } from '@app/_consts/sit-global-config'
@Component({
  selector: 'app-sit-payroll-components',
  templateUrl: './sit-payroll-components.component.html',
  styleUrls: ['./sit-payroll-components.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPayrollComponentsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  popupParent;
  frameworkComponents;
  columnDefs;
  columnDefsAccountingDef;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.frameworkComponents = sitGlobalConfig.frameworkComponents;

    this.columnDefs = [
      { headerName: 'ID', field: 'sitPayrollComponentsId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollComponentsG' },
      { headerName: 'Lp', field: 'OrdId', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60, sort: 'asc',suppressMenu: true},
      { headerName: 'Identyfikator', field: 'PayrollComponentIdent', width: 150 },
      { headerName: 'Opis', field: 'PayrollComponentDesc', width: 300 },
      { headerName: 'Ident.zew.', field: 'ExtIdent01', width: 200 },
      { headerName: 'Kolumna w rozliczeniu', field: 'SettlementsColumnName', width: 200 },
    ];

    this.columnDefsAccountingDef = [
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

  ngOnInit(): void {
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

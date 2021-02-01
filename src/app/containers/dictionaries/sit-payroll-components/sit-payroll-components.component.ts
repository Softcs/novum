import { Component, OnInit, ViewChild, ViewChildren, QueryList, LOCALE_ID, Inject } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GridService } from '@app/_services/grid.service';
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
  columnDefs;
  columnDefsAccountingDef;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'ID', field: 'sitPayrollComponentsId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollComponentsG', filter: 'agTextColumnFilter' },
      { headerName: 'Identyfikator', field: 'PayrollComponentIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'PayrollComponentDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Ident.zew.', field: 'ExtIdent01', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Kolumna w rozliczeniu', field: 'SettlementsColumnName', filter: 'agTextColumnFilter', width: 200 },
    ];

    this.columnDefsAccountingDef = [
      { headerName: 'ID', field: 'sitPayrollComponentsAccountingDefId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollComponentsAccountingDefG', filter: 'agTextColumnFilter' },
      { headerName: 'Ident.typu listy płac', field: 'PayrollTypeIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Typ listy płac', field: 'PayrollTypeName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Konto WN', field: 'CAccount', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Konto MA', field: 'DAccount', filter: 'agTextColumnFilter', width: 150 },
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

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
  rowSelection;
  popupParent;
  defaultColDef;

  gridApi;
  gridColumnApi;
  columnDefs;

  gridApiAccountingDef;
  gridColumnApiAccountingDef;
  columnDefsAccountingDef;

  constructor(
    private gatewayService: GatewayService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: false,
      floatingFilter: false,
      resizable: true
    };

    this.columnDefs = [
      { headerName: 'ID', field: 'sitPayrollComponentsId', filter: 'agNumericColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollComponentsG', filter: 'agTextColumnFilter' },
      { headerName: 'Identyfikator', field: 'PayrollComponentIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'PayrollComponentDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Ident.zew.', field: 'ExtIdent01', filter: 'agTextColumnFilter', width: 200 },
    ];

    this.columnDefsAccountingDef = [
      { headerName: 'ID', field: 'sitPayrollComponentsAccountingDefId', filter: 'agNumericColumnFilter' },
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
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitPayrollComponentsId','sitPayrollComponentsG'], false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitPayrollComponents');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyAccountingDef(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitPayrollComponentsAccountingDefId','sitPayrollComponentsAccountingDefG','PayrollTypeIdent'], false)
  }

  onRowClickedAccountingDef(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitPayrollComponents');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }


}

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
  selector: 'app-sit-company-departments',
  templateUrl: './sit-company-departments.component.html',
  styleUrls: ['./sit-company-departments.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCompanyDepartmentsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  rowSelection;
  popupParent;
  defaultColDef;
  getDataPath;
  autoGroupColumnDef;
  groupDefaultExpanded;

  gridApi;
  gridColumnApi;
  columnDefs;

  constructor(
    private gatewayService: GatewayService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'multi';

    this.autoGroupColumnDef = {
      headerName: 'Działy firmy',
      minWidth: 200,
      cellRendererParams: { suppressCount: true },
    };
    this.groupDefaultExpanded = -1;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

    this.defaultColDef = {
      sortable: true,
      filter: false,
      floatingFilter: false,
      resizable: true,
      autoHeight: true
    };

    this.columnDefs = [
      { headerName: 'ID', field: 'sitCompanyDepartmentsId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitCompanyDepartmentsG', filter: 'agTextColumnFilter' },
      // { headerName: 'Identyfikator', field: 'CompanyDepartmentIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Opis', field: 'CompanyDepartmentDesc', filter: 'agTextColumnFilter', width: 300 },
      // { headerName: 'dataPath', field: 'dataPath', filter: 'agTextColumnFilter' },
    ];

  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitCompanyDepartmentsId','sitCompanyDepartmentsG'], false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitCompanyDepartments');
      dataSourceResponseWrapper.SetActiveRow(event.data);

  }

  onFirstDataRendered(params) {
  }
}

import { Component, OnInit, ViewChild, ContentChild, Input, ComponentFactoryResolver } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'sit-jobs',
  templateUrl: './sit-jobs.component.html',
  styleUrls: ['./sit-jobs.component.scss'],
  host: {class: 'router-flex'}
})
export class SitJobsComponent implements OnInit {
  @ViewChild(SitDataSetContainerComponent, { static: true }) dataSourceContainer: SitDataSetContainerComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;
  pinnedBottomRowData;

  gridApiJobSteps;
  gridColumnApiJobSteps;
  columnDefsJobSteps;
  pinnedBottomRowDataJobSteps;

  constructor() {
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      autoHeight: true
    };

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Id', field: 'sitJobsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitJobsG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'JobIdent', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'JobName', sortable: true, filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'Int.rodz.', field: 'IntervalKind', sortable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Int.czas', field: 'IntervalCounter', sortable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Data rozpoczęcia', field: 'StartDate', sortable: true, filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'LastActiveDate', field: 'LastActiveDate', sortable: true, filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'LastActiveCorrectDate', field: 'LastActiveCorrectDate', sortable: true, filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'LastActiveStatus', field: 'LastActiveStatus', type: 'numericColumn', sortable: true, filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Uruchom natychmiast', field: 'RunImmediately', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'CompanyIdent', field: 'CompanyIdent', sortable: true, filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Id firmy', field: 'sitCompaniesId', type:"numericColumn", sortable: true, filter: 'agTextColumnFilter', width: 100 },

    ];


    this.columnDefsJobSteps = [
      { headerName: 'Id', field: 'sitJobStepsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitJobStepsG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Kolejność', field: 'StepOrder', type: 'numericColumn', sortable: true, filter: 'agTextColumnFilter', width: 100, sort: 'asc' },
      { headerName: 'Identyfikator', field: 'JobStepIdent', sortable: true, filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'JobStepName', sortable: true, filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'Nazwa procedury', field: 'ProcedureName', sortable: true, filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Akcja po błędzie', field: 'ActionAfterError', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'LastActiveStatus', field: 'LastActiveStatus', sortable: true, filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Parametry', field: 'Params', sortable: true, filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'TimeOut', field: 'TimeOut', sortable: true, filter: 'agTextColumnFilter', width: 100 },
    ];


  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitJobsId','sitJobsG'],false)
  }
  onGridReadyJobSteps(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitJobStepsId','sitJobStepsG'],false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJobs');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedJobSteps(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJobSteps');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(event) { }
}

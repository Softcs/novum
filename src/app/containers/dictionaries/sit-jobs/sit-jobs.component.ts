import { Component, OnInit, ViewChild, ContentChild, Input, ComponentFactoryResolver } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { GridService } from '@app/_services/grid.service';
@Component({
  selector: 'sit-jobs',
  templateUrl: './sit-jobs.component.html',
  styleUrls: ['./sit-jobs.component.scss'],
  host: {class: 'router-flex'}
})
export class SitJobsComponent implements OnInit {
  @ViewChild(SitDataSetContainerComponent, { static: true }) dataSourceContainer: SitDataSetContainerComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  popupParent;
  frameworkComponents;
  columnDefs;
  columnDefsJobSteps;

  constructor(
    private gridService: GridService
  ) {
    this.popupParent = document.querySelector('body');

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Id', field: 'sitJobsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitJobsG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'JobIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'JobName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'Int.rodz.', field: 'IntervalKind', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Int.czas', field: 'IntervalCounter', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Data rozpoczęcia', field: 'StartDate', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'LastActiveDate', field: 'LastActiveDate', filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'LastActiveCorrectDate', field: 'LastActiveCorrectDate', filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'LastActiveStatus', field: 'LastActiveStatus', type: 'numericColumn', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Uruchom natychmiast', field: 'RunImmediately', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'CompanyIdent', field: 'CompanyIdent', filter: 'agTextColumnFilter', width: 150 },

    ];


    this.columnDefsJobSteps = [
      { headerName: 'Id', field: 'sitJobStepsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitJobStepsG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Kolejność', field: 'StepOrder', type: 'numericColumn', filter: 'agTextColumnFilter', width: 100, sort: 'asc' },
      { headerName: 'Identyfikator', field: 'JobStepIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'JobStepName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter',  suppressMenu: true, width: 80,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'Nazwa procedury', field: 'ProcedureName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Akcja po błędzie', field: 'ActionAfterError', filter: 'agSetColumnFilter', suppressMenu: true, width: 120,cellRenderer: 'gridCheckboxRenderer' },
      { headerName: 'LastActiveStatus', field: 'LastActiveStatus', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Parametry', field: 'Params', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'TimeOut', field: 'TimeOut', filter: 'agTextColumnFilter', width: 100 },
    ];


  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitJobsG')) {
      params.columnApi.setColumnsVisible(['sitJobsId','sitJobsG'],false)
    }

    if (params.columnApi.getColumn('sitJobStepsG')) {
      params.columnApi.setColumnsVisible(['sitJobStepsId','sitJobStepsG'],false)
    }
  }

  onRowClicked(event) {
    if (event.data['sitJobsG']) {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJobs');
      dataSourceResponseWrapper.SetActiveRow(event.data);
    }

    if (event.data['sitJobStepsG']) {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJobSteps');
      dataSourceResponseWrapper.SetActiveRow(event.data);  }
    }

  onFirstDataRendered(event) { }
}

import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-jobs',
  templateUrl: './sit-jobs.component.html',
  styleUrls: ['./sit-jobs.component.scss'],
  host: {class: 'router-flex'}
})
export class SitJobsComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitJobs"] = [
      { headerName: 'Id', field: 'sitJobsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitJobsG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'JobIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'JobName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', suppressMenu: true, width: 80,renderType: "checkbox" },
      { headerName: 'Int.rodz.', field: 'IntervalKind', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Int.czas', field: 'IntervalCounter', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Data rozpoczęcia', field: 'StartDate', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'LastActiveDate', field: 'LastActiveDate', filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'LastActiveCorrectDate', field: 'LastActiveCorrectDate', filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'LastActiveStatus', field: 'LastActiveStatus', type: 'numericColumn', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Uruchom natychmiast', field: 'RunImmediately', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 120,renderType: "checkbox" },
      { headerName: 'CompanyIdent', field: 'CompanyIdent', filter: 'agTextColumnFilter', width: 150 },

    ];


    this.gridColumnsDefinition["sitJobSteps"] = [
      { headerName: 'Id', field: 'sitJobStepsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitJobStepsG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Kolejność', field: 'StepOrder', type: 'numericColumn', filter: 'agTextColumnFilter', width: 100, sort: 'asc' },
      { headerName: 'Identyfikator', field: 'JobStepIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'JobStepName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter',  suppressMenu: true, width: 80,renderType: "checkbox" },
      { headerName: 'Nazwa procedury', field: 'ProcedureName', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Akcja po błędzie', field: 'ActionAfterError', filter: 'agSetColumnFilter', suppressMenu: true, width: 120,renderType: "checkbox" },
      { headerName: 'LastActiveStatus', field: 'LastActiveStatus', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Parametry', field: 'Params', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'TimeOut', field: 'TimeOut', filter: 'agTextColumnFilter', width: 100 },
    ];


  }
}

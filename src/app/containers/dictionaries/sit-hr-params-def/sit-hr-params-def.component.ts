import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  //selector: 'app-sit-hr-working-hours',
  selector: 'app-sit-hr-params-def',
  templateUrl: './sit-hr-params-def.component.html',
  styleUrls: ['./sit-hr-params-def.component.scss'],
  host: {class: 'router-flex'}
})
export class SitHRParamsDefComponent extends SitDictBaseComponent {

  sitHRCompanyHierarchyGroupDefaultExpanded;
  sitHRCompanyHierarchyGetDataPath;
  sitHRCompanyHierarchyAutoGroupColumnDef;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitAbsenceReasons"] = [
      { headerName: 'Id', field: 'sitAbsenceReasonsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAbsenceReasonsG', width: 100, defaultVisibility: false },
      { headerName: 'Rodzic', field: 'AbsenceIdent_Parent', filter: 'agTextColumnFilter', width: 180, sort: 'asc' },
      { headerName: 'Identyfikator', field: 'AbsenceIdent', filter: 'agTextColumnFilter', width: 180, sort: 'asc' },
      { headerName: 'Opis', field: 'AbsenceName', filter: 'agTextColumnFilter', width: 350 },
      { headerName: 'Skrót', field: 'ShortAbsenceIdent', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Typ', field: 'AbsenceType', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Wniosek', field: 'Is4VacReq', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Limit', field: 'IsYearLimit', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Limit następny rok', field: 'IsYearLimitMove4Next', width: 120, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Id zew 01', field: 'ExtAppIdent01', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Id zew 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
    ];

    this.gridColumnsDefinition["sitHRWorkingHours"] = [
      { headerName: 'Id', field: 'sitHRWorkingHoursId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitHRWorkingHoursG', width: 100, defaultVisibility: false },
      { headerName: 'Rok', field: 'Year', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, sort: 'asc', suppressMenu: true },
      { headerName: 'Miesiąc', field: 'Month', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, sort: 'asc', suppressMenu: true },
      { headerName: 'Godz. prac.', field: 'WorkingHours', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true},
      { headerName: 'Dni prac.', field: 'WorkingDays', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true},
      { headerName: 'Dni wolne', field: 'NonWorkingDays', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, suppressMenu: true},
      { headerName: 'Przec. wynagr.', field: 'AverageSalary', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130,renderType: 'number', renderFormat: '1.2-2',},
    ];

    this.gridColumnsDefinition["sitJobTimes"] = [
      { headerName: 'GUID', field: 'sitJobTimesG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'JobTimeIdent', filter: 'agNumberColumnFilter', width: 100, sort: 'asc'},
      { headerName: 'Opis', field: 'JobTimeDesc', filter: 'agNumberColumnFilter', width: 200, suppressMenu: true },
      { headerName: 'Mnożnik', field: 'Multiplier', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, renderType: 'number', 
        renderFormat: '1.4-4', suppressMenu: true },
    ];

    this.gridColumnsDefinition["sitHRDepartments"] = [
      { headerName: 'Id', field: 'sitHRDepartmentsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitHRDepartmentsG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'HRDepartmentIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'HRDepartmentName', filter: 'agTextColumnFilter' },
      { headerName: 'Branch', field: 'Branch', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Wewnętrzny', field: 'IsInternal', width: 100, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Id zew. 01', field: 'ExtIdent01', filter: 'agTextColumnFilter', defaultVisibility: false  },
      { headerName: 'Id zew. 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', defaultVisibility: false  },
    ];

// * * * * * sitHRCompanyHierarchy * * * * *

    this.sitHRCompanyHierarchyAutoGroupColumnDef = {
      headerName: 'Struktura',
      minWidth: 400,
      cellRendererParams: { suppressCount: true },
    };
    this.sitHRCompanyHierarchyGroupDefaultExpanded = -1;

    this.sitHRCompanyHierarchyGetDataPath = function (data) {
      return data.dataPath;
    };

    this.gridColumnsDefinition["sitHRCompanyHierarchy"] = [
      { headerName: 'Opis', field: 'HRCompanyHierarchyDesc', filter: 'agTextColumnFilter', width: 300 },
    ];

// * * * * * sitHRCompanyHierarchy * * * * *

  }
}

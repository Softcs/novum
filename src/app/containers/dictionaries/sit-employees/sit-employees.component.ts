import { Component,  } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-employees',
  templateUrl: './sit-employees.component.html',
  styleUrls: ['./sit-employees.component.scss'],
  host: {class: 'router-flex'}
})
export class SitEmployeesComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitEmployees"] = [
      { headerName: 'Id', field: 'sitEmployeesId',width: 90, defaultVisibility: false},
      { headerName: 'Identyfikator', field: 'EmployeeIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Imię', field: 'FirstName', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwisko', field: 'LastName', filter: 'agTextColumnFilter' },
      { headerName: 'PESEL', field: 'PESEL', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Cudzoziemiec', field: 'Foreigner', filter: 'agNumberColumnFilter', renderType: 'checkbox', width: 100, suppressMenu: true },
      { headerName: 'Stanowisko', field: 'HRCompanyHierarchyDesc', filter: 'agTextColumnFilter' },
      { headerName: 'Konto księg.', field: 'AccountNo', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Dział', field: 'CompanyDepartmentIdent', tooltipField: 'CompanyDepartmentDesc', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Kanał dystr.', field: 'DistributionChannelIdent', tooltipField: 'DistributionChannelDesc', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Typ prod.', field: 'ProductsTypeIdent', tooltipField: 'ProductsTypeDesc', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator zewnętrzny', field: 'ExtIdent01', filter: 'agTextColumnFilter' },
      { headerName: 'Osoba akceptująca urlop', field: 'VacationRequestAcceptEmployeeName', filter: 'agTextColumnFilter', width: 200, defaultVisibility: false },
    ];

    this.gridColumnsDefinition["sitEmployeeContracts"] = [
      { headerName: 'Id', field: 'sitEmploymentContractsTypeId',width: 90, defaultVisibility: false},
      { headerName: 'Typ umowy', field: 'EmploymentContractIdent', filter: 'agTextColumnFilter', width: 200},
      { headerName: 'Numer umowy', field: 'ContractNumber', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Data od', field: 'DateFrom', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, sort: 'desc', suppressMenu: true },
      { headerName: 'Data do', field: 'DateTo', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, suppressMenu: true },
      { headerName: 'Stanowisko', field: 'Position', width: 250,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Etat', field: 'WorkingHours',  width: 70,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Stawka', field: 'rate', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true,
        renderType: 'number', renderFormat: '1.2-2',
        cellClass: ['font11','numberFormat2Dec'],
      },
      { headerName: 'Rodzaj st.', field: 'RateTypeName', width: 100,
        cellClass: ['font11','textFormat']
      }
    ];

    this.gridColumnsDefinition["sitEmployeeVacationLimits"] = [
      { headerName: 'Id', field: 'ssitEmployeeVacationLimitsId',width: 90, defaultVisibility: false},
      { headerName: 'Data od', field: 'DateFrom', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, sort: 'desc', suppressMenu: true },
      { headerName: 'Data do', field: 'DateTo', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, suppressMenu: true },
      { headerName: 'Limit', field: 'VacationLimit', filter: 'agTextColumnFilter', width: 100 },
    ];

    this.gridColumnsDefinition["sitEmployeeVacationLimitsUsed"] = [
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100, sort: 'desc'},
      { headerName: 'Data od', field: 'DateFrom', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, sort: 'desc', suppressMenu: true },
      { headerName: 'Data do', field: 'DateTo', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, suppressMenu: true },
      { headerName: 'Limit', field: 'VacationLimit', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Wyliczony', field: 'CalculatedLimit', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Wykorzystany', field: 'ActualLimitUsed', filter: 'agTextColumnFilter', width: 120 },            
    ];  
  }

}

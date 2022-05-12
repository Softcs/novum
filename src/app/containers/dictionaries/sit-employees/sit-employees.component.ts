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
      { headerName: 'Cudzoziemiec', field: 'Foreigner', filter: 'agNumberColumnFilter', renderType: 'checkbox', width: 100, suppressMenu: true, cellClass: "grid-cell-centered" },
      { headerName: 'Stanowisko', field: 'HRCompanyHierarchyDesc', filter: 'agTextColumnFilter' },
      { headerName: 'Konto księg.', field: 'AccountNo', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Dział', field: 'CompanyDepartmentIdent', tooltipField: 'CompanyDepartmentDesc', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Kanał dystr.', field: 'DistributionChannelIdent', tooltipField: 'DistributionChannelDesc', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Typ prod.', field: 'ProductsTypeIdent', tooltipField: 'ProductsTypeDesc', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator zewnętrzny', field: 'ExtIdent01', filter: 'agTextColumnFilter' },
      { headerName: 'Osoba akceptująca urlop', field: 'VacationRequestAcceptEmployeeName', filter: 'agTextColumnFilter', width: 200, defaultVisibility: false },
      { headerName: 'Telefon', field: 'PhoneNumber', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Komórka', field: 'MobileNumber', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
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
      { headerName: 'Id', field: 'sitEmployeeVacationLimitsId',width: 90, defaultVisibility: false},
      { headerName: 'Typ urlopu', field: 'AbsenceIdent', filter: 'agTextColumnFilter', width: 220 },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 90, sort: 'desc' },
      { headerName: 'Aktualny', field: 'VacationLimit', filter: 'agTextColumnFilter', width: 130 },
      { headerName: 'Zaległy', field: 'VacationOverdue', filter: 'agTextColumnFilter', width: 130 },
      { headerName: 'Do wykorzystania', field: 'ActualLimit', filter: 'agTextColumnFilter', width: 130 },            
      { headerName: 'Wykorzystany', field: 'ActualLimitUsed', filter: 'agTextColumnFilter', width: 130 },            
      { headerName: 'Planowany', field: 'VacationPlanned', filter: 'agTextColumnFilter', width: 130 },            
      { headerName: 'Pozostało', field: 'VacationForUse', filter: 'agTextColumnFilter', width: 130 },            
    ];

    this.gridColumnsDefinition["sitEmployeeVacationLimitsUsed"] = [
      { headerName: 'Id', field: 'sitEmployeeVacationLimitsId',width: 90, defaultVisibility: false},      
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 100, sort: 'desc'},
      { headerName: 'Limit', field: 'ActualLimit', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Wyliczony', field: 'CalculatedLimit', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Wykorzystany', field: 'ActualLimitUsed', filter: 'agTextColumnFilter', width: 120 },            
    ];

    this.gridColumnsDefinition["sitEmployeesCust"] = [
      { headerName: 'Klient', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', width: 200,},
      { headerName: 'ID u klienta', field: 'EmployeeIdent', filter: 'agTextColumnFilter', width: 110,},            
    ];  
  }

}

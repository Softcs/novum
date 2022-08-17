import { Component,  } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-employees',
  templateUrl: './sit-employees.component.html',
  styleUrls: ['./sit-employees.component.scss'],
  host: {class: 'router-flex'}
})
export class SitEmployeesComponent extends SitDictBaseComponent {

  json;

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
      { headerName: 'GUID', field: 'sitEmployeeVacationLimitsG', width: 100, defaultVisibility: false },
      { headerName: 'Typ urlopu', field: 'AbsenceIdent', filter: 'agTextColumnFilter', width: 220 },
      { headerName: 'Rok', field: 'Year', filter: 'agTextColumnFilter', width: 90, sort: 'desc' },
      { headerName: 'Aktualny', field: 'VacationLimit', filter: 'agTextColumnFilter', width: 130 },
      { headerName: 'Zaległy', field: 'VacationOverdue', filter: 'agTextColumnFilter', width: 130 },
      { headerName: 'Do wykorzystania', field: 'ActualLimit', filter: 'agTextColumnFilter', width: 130 },            
      { headerName: 'Wykorzystany', field: 'ActualLimitUsed', filter: 'agTextColumnFilter', width: 130 },            
      { headerName: 'Planowany', field: 'VacationPlanned', filter: 'agTextColumnFilter', width: 130 },            
      { headerName: 'Pozostało', field: 'VacationForUse', filter: 'agTextColumnFilter', width: 130 },            
    ];

    this.gridColumnsDefinition["sitEmployeeAbsences"] = [
      { headerName: 'Id', field: 'sitEmployeeAbsencesId',width: 90, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitEmployeeAbsencesG', width: 100, defaultVisibility: false },
      { headerName: 'Typ urlopu', field: 'AbsenceName', filter: 'agTextColumnFilter', width: 220 },
      { headerName: 'Data od', field: 'DateFrom', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, sort: 'desc', suppressMenu: true },
      { headerName: 'Data do', field: 'DateTo', filter: 'agDateColumnFilter',width: 90, floatingFilter: false, suppressMenu: true },
    ];    

    this.gridColumnsDefinition["sitEmployeesExtAppExport"] = [
      { headerName: 'Id', field: 'sitEmployeesId',width: 90, defaultVisibility: false},      
      { headerName: 'Identyfikator', field: 'EmployeeIdent', filter: 'agTextColumnFilter', width: 110 },
      { headerName: 'Imię', field: 'FirstName', filter: 'agTextColumnFilter', width: 120  },
      { headerName: 'Nazwisko', field: 'LastName', filter: 'agTextColumnFilter', width: 120  },
      { headerName: 'PESEL', field: 'PESEL', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Cudzoziemiec', field: 'Foreigner', filter: 'agNumberColumnFilter', renderType: 'checkbox', width: 100, suppressMenu: true, cellClass: "grid-cell-centered", defaultVisibility: false },
      { headerName: 'Id zew. 01', field: 'ExtIdent01', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Id zew. 02', field: 'ExtAppIdent02', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Id statusu', field: 'StatusValueIdent_ExtAppExport', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa statusu', field: 'StatusValueName_ExtAppExport', filter: 'agTextColumnFilter', width: 150 },
    ];

    this.gridColumnsDefinition["sitEmployeesCust"] = [
      { headerName: 'Klient', field: 'CustName', tooltipField: 'CustName', filter: 'agTextColumnFilter', width: 200,},
      { headerName: 'ID u klienta', field: 'EmployeeIdent', filter: 'agTextColumnFilter', width: 110,},            
    ];  

    this.gridColumnsDefinition["sitEmployeesExtAppExportStatusChange"] = [
      { headerName: 'Id', field: 'sitEmployeesHistoryId',width: 90, defaultVisibility: false},      
      { headerName: 'Data modyfikacji', field: 'ChangeDate', filter: 'agDateColumnFilter', width: 140, renderType: "date", 
        renderFormat: "yyyy-MM-dd H:mm:ss", sort: 'desc' },
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter', width: 120, defaultVisibility: false },
      { headerName: 'Status z', field: 'StatusValueIdentFrom', filter: 'agTextColumnFilter', width: 90 },
      { headerName: 'Status na', field: 'StatusValueIdentTo', filter: 'agTextColumnFilter', width: 90 },
      { headerName: 'Komentarz', field: '__HistoryComments__', filter: 'agNumberColumnFilter', flex: 1},
    ];

  }

  activeRowChanged(activeRow) {
    this.json = activeRow?.DataForExport == null ? JSON.parse('{}') :  JSON.parse(activeRow.DataForExport) ;
  }
}

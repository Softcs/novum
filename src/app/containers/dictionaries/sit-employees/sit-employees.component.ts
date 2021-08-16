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
  }

}

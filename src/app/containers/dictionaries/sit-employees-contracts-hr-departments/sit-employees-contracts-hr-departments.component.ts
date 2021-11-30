import { Component, OnInit } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { DataSetWrapper } from '@app/_models';

@Component({
  selector: 'app-sit-employees-contracts-hr-departments',
  templateUrl: './sit-employees-contracts-hr-departments.component.html',
  styleUrls: ['./sit-employees-contracts-hr-departments.component.scss'],
  host: {class: 'router-flex'}
})
export class SitEmployeesContractsHRDepartmentsComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition['sitEmployeesContractsHRDepartment'] = [
      { headerName: 'Pracownik',
        children: [
          { headerName: 'Nazwisko', field: 'EmployeeName', tooltipField: 'EmployeeName', sort: 'asc', width: 180, pinned: 'left',
            checkboxSelection: true, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,
            cellClass: ['font11','textFormat']
          },
          { headerName: 'Ident.', field: 'EmployeeIdent', tooltipField: 'EmployeeIdent', width: 100, pinned: 'left',
            cellClass: ['font11','textFormat']
          },
        ]
      },
      { headerName: 'Cudzoziemiec', field: 'Foreigner', filter: 'agNumberColumnFilter', renderType: 'checkbox', width: 100, suppressMenu: true },
      { headerName: 'Stanowisko', field: 'Position', tooltipField: 'Position',  width: 250,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Umowa od', field: 'ContractFrom',  width: 100,
        cellClass: ['font11','dateFormat']
      },
      { headerName: 'Umowa do', field: 'ContractTo',  width: 100,
        cellClass: ['font11','dateFormat']
      },
      { headerName: 'Etat', field: 'WorkingHours',  width: 70,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Dni um.', field: 'ContractDays', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font11','numberFormat2Dec'],
      },
      { headerName: 'Stawka', field: 'Rate', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true,
        renderType: 'number', renderFormat: '1.2-2',
        cellClass: ['font11','numberFormat2Dec'],
      },
      { headerName: 'Rodzaj st.', field: 'RateTypeName', width: 100,
        cellClass: ['font11','textFormat']
      },
    ],

    this.gridColumnsDefinition['sitEmployeesContractsHRDepartmentDet'] = [
      { headerName: 'Typ umowy', field: 'EmploymentContractName', filter: 'agTextColumnFilter', width: 200,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Nr umowy', field: 'ContractNumber', width: 150,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Umowa od', field: 'DateFrom',  width: 100, sort: 'asc',
        cellClass: ['font11','dateFormat']
      },
      { headerName: 'Umowa do', field: 'DateTo',  width: 100,
        cellClass: ['font11','dateFormat']
      },
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
  ]
  }

  refreshAfter(dataSourceManager) {}

}

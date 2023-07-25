import { Component, OnInit } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-employment-stats',
  templateUrl: './sit-employment-stats.component.html',
  styleUrls: ['./sit-employment-stats.component.scss'],
  host: {class: 'router-flex sit-employment-stats-component'},
})
export class SitEmploymentStatsComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition['sitEmploymentStats'] = [
      { headerName: 'Okres', field: 'WorkPeriod', width: '100'},
      { headerName: 'Firma', field: 'CompanyName', width: '100' },
      { headerName: 'Dział', field: 'HRDepartmentIdent',  width: '100'},
      { headerName: 'Nazwa', field: 'HRDepartmentName',  width: '150'},
      { headerName: 'Produkt', field: 'ProductsTypeIdent',  width: '100'},
      { headerName: 'Nazwa', field: 'ProductsTypeDesc',  width: '150'},
      { headerName: 'Oddział', field: 'CompanyDepartmentIdent',  width: '100'},
      { headerName: 'Nazwa', field: 'CompanyDepartmentDesc',  width: '150'},
      { headerName: 'Ilość prac.', field: 'EmployeesNo',  width: '100', type: 'numericColumn', renderType:'number'},
      { headerName: 'Suma godz.', field: 'H_Sum',  width: '100', type: 'numericColumn', renderType:'number'},
      { headerName: 'Ilość etatów', field: 'JobsNo',  width: '100', type: 'numericColumn', renderType:'number'},
      { headerName: 'Śr. etat', field: 'Average',  width: '100', type: 'numericColumn', renderType:'number'},

    ]
  }

}

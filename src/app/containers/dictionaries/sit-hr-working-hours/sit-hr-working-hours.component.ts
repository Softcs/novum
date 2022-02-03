import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';


@Component({
  selector: 'app-sit-hr-working-hours',
  templateUrl: './sit-hr-working-hours.component.html',
  styleUrls: ['./sit-hr-working-hours.component.scss'],
  host: {class: 'router-flex'}
})
export class SitHRWorkingHoursComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
   this.gridColumnsDefinition["sitHRWorkingHours"] = [
     { headerName: 'Rok', field: 'Year', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, sort: 'asc' },
     { headerName: 'Mieisąc', field: 'Month', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, sort: 'asc' },
     { headerName: 'Godz. prac.', field: 'WorkingHours', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100},
     { headerName: 'Dni prac.', field: 'WorkingDays', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100},
     { headerName: 'Dni wolne', field: 'NonWorkingDays', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100},
     { headerName: 'Przec. wynagr.', field: 'AverageSalary', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 130,renderType: 'number', renderFormat: '1.2-2',},
   ];
  }
}

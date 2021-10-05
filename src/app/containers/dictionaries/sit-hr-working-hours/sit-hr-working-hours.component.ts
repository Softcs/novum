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
     { headerName: 'Rok', field: 'Year', filter: 'agNumberColumnFilter', width: 100, sort: 'asc' },
     { headerName: 'Mieisąc', field: 'Month', filter: 'agNumberColumnFilter', width: 100, sort: 'asc' },
     { headerName: 'Godz. prac.', field: 'WorkingHours', filter: 'agNumberColumnFilter', width: 100},
     { headerName: 'Dni prac.', field: 'WorkingDays', filter: 'agNumberColumnFilter', width: 100},
     { headerName: 'Dni wolne', field: 'NonWorkingDays', filter: 'agNumberColumnFilter', width: 100},
   ];
  }
}

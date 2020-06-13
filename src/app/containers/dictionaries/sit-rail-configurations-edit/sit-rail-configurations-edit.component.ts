import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sit-rail-configurations-edit',
  templateUrl: './sit-rail-configurations-edit.component.html',
  styleUrls: ['./sit-rail-configurations-edit.component.scss']
})
export class SitRailConfigurationsEditComponent implements OnInit {

  isChecked: boolean;
  activeRow: any;

  constructor(
  ) { }

  ngOnInit(): void {

  }

  get activeRowRailConfigurations() {
    return this.activeRow;
  }


  onChange(field, value) {
    this.activeRow[field] = value;
    console.log(this.activeRow)
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sit-rail-configurations-edit',
  templateUrl: './sit-rail-configurations-edit.component.html',
  styleUrls: ['./sit-rail-configurations-edit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRailConfigurationsEditComponent implements OnInit {

  isChecked: boolean;
  activeRow: any;
  senderObject: any;
  guid: any;

  constructor(
    private activateRoute: ActivatedRoute
    ) {
      activateRoute.params.subscribe(params => {
        this.setupComponent(params['guid']);
      })
  }

  setupComponent(guid) {
    this.guid = guid;
  }

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

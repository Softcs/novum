import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sit-rail-configurations-edit',
  templateUrl: './sit-rail-configurations-edit.component.html',
  styleUrls: ['./sit-rail-configurations-edit.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRailConfigurationsEditComponent implements OnInit {
  senderObject: any;
  activeRow: any;

  constructor() {}

  ngOnInit(): void {}

}

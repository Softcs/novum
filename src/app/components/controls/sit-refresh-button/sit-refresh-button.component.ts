import { Component, Input, OnInit } from '@angular/core';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { SitButtonBaseComponent } from '../sit-button-base/sit-button-base.component';

@Component({
  selector: 'sit-refresh-button',
  templateUrl: './sit-refresh-button.component.html',
  styleUrls: ['./sit-refresh-button.component.scss']
})
export class SitRefreshButtonComponent extends SitButtonBaseComponent {

  constructor() {
    super();
    this.icon = 'refresh';
    this.color = 'primary';
  }
  @Input() dataSetsToRefresh: string[];

  onClick($event) {
      this.changeExecutingState(true);
      this.dataSetWrapper?.Refresh();
  }
}

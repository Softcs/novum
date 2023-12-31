import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { DataSetManager, DataSetWrapper } from '@app/_models';
import { SitButtonBaseComponent } from '../sit-button-base/sit-button-base.component';

@Component({
  selector: 'sit-refresh-button',
  templateUrl: './sit-refresh-button.component.html',
  styleUrls: ['./sit-refresh-button.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-refresh-button-component'}
})
export class SitRefreshButtonComponent extends SitButtonBaseComponent {

  constructor() {
    super();
    this.icon = 'refresh';
    this.color = 'accent';
  }
  @Input() dataSetsToRefresh: string[];

  onClick($event) {
      this.changeExecutingState(true);
      this.dataSetWrapper?.Refresh();
  }
}

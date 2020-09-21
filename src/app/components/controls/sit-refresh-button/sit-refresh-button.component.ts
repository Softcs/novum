import { Component, Input, OnInit } from '@angular/core';
import { DataSetManager, DataSetWrapper } from '@app/_models';

@Component({
  selector: 'sit-refresh-button',
  templateUrl: './sit-refresh-button.component.html',
  styleUrls: ['./sit-refresh-button.component.scss']
})
export class SitRefreshButtonComponent{
  executing = false;
  constructor() {
    this.icon = 'refresh';
    this.color = 'primary';
  }
  @Input() color: string;
  @Input() caption: string;
  @Input() icon: string;
  @Input() tooltip: string;
  @Input() dataSetsToRefresh: string[];

  public dataSetWrapper: DataSetWrapper;

  onClick($event) {
      this.changeExecutingState(true);
      this.dataSetWrapper?.Refresh();
  }

  private afterPropagte(ident: string) {
    this.changeExecutingState(false);
  }

  private changeExecutingState(state: boolean) {
    this.executing = state;
  }

  public setDataSetWrapper(dataSetWrapper: DataSetWrapper) {
    this.dataSetWrapper = dataSetWrapper;
    this.dataSetWrapper?.afterPropagte.subscribe(ident => this.afterPropagte(ident));
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { DataSetWrapper } from '@app/_models';

@Component({
  selector: 'sit-button-base',
  templateUrl: './sit-button-base.component.html',
  styleUrls: ['./sit-button-base.component.scss']
})
export class SitButtonBaseComponent {

  constructor() { }

  public dataSetWrapper: DataSetWrapper;
  public executing = false;

  @Input() color: string;
  @Input() caption: string;
  @Input() icon: string;
  @Input() tooltip: string;

  protected changeExecutingState(state: boolean) {
    this.executing = state;
  }

  protected afterPropagte(ident: string) {
    this.changeExecutingState(false);
  }

  public setDataSetWrapper(dataSetWrapper: DataSetWrapper) {
    this.dataSetWrapper = dataSetWrapper;
    this.dataSetWrapper?.afterPropagte.subscribe(ident => this.afterPropagte(ident));
  }
}

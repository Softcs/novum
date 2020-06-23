import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, Output, EventEmitter } from '@angular/core';

import { GatewayService } from '@app/_services/gateway.service';
import { DataSetWrapper } from '@app/_models';
import { SitDataBaseComponent } from '../controls/sit-data-base/sit-data-base.component';
import { sitSetDataSourceDirective } from '@app/_directives/sitSetDataSourceDirective';
import { connect } from 'http2';

@Component({
  selector: 'sit-data-set-container',
  templateUrl: './sit-data-set-container.component.html',
  // template: '<ng-container></ng-container>',
  styleUrls: ['./sit-data-set-container.component.scss'],
  host: {class: 'router-flex'}
})

export class SitDataSetContainerComponent implements OnInit {
  @ContentChildren('sitSetDataSource', { descendants: true}) datasSourcesInterface: QueryList<sitSetDataSourceDirective>;
  @ContentChildren('sitControl', { descendants: true })
  dsControlsInterface!: QueryList<SitDataBaseComponent>;

  @Input() ident: string;
  dataSetResponseWrapper: DataSetWrapper;
  @Output()
  activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

  clearErrors() {
    this.errors?.splice(0,this.errors?.length);
  }

  private _errors: any[];

  constructor(private gatewayService: GatewayService) { }

  get activeRecord(): any {
    return this.dataSetResponseWrapper?.activeRow;
  }

  ngOnInit() {

  }
  ngAfterContentInit() {

  }
  ngAfterViewInit() {

  }
  public SetActiveRow(row: any) {
      this.dataSetResponseWrapper.SetActiveRow(row);
  }
  public setErrors(errors: any[]) {
    this.errors = errors;
  }
  public setDataSource(dataSetWrapper: DataSetWrapper) {
    this.dataSetResponseWrapper = dataSetWrapper;
    this.dataSetResponseWrapper.activeRowChanged = this.activeRowChanged;
    this.errors = dataSetWrapper.errors;
    this.datasSourcesInterface.forEach(element => {
      element.rows = this.dataSetResponseWrapper.rows;
      element.selected = [this.dataSetResponseWrapper.activeRow];
    });
    if (this.dsControlsInterface != null) {
        this.dsControlsInterface.forEach(element => {
          this.dataSetResponseWrapper.refreshFieldValueInControl(element);
        });
     }
  }

  public deleteData() {

  }
  set errors(value: any[]) {
    this._errors = value;
  }
  get errors(): any[] {
    return this._errors;
  }
  closeError(error: any) {
    const index = this._errors?.indexOf(error);
    this.errors?.splice(index, 1);
  }
}





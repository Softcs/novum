import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, ViewChild, ViewChildren, ElementRef, ContentChild, HostListener, ComponentFactoryResolver } from '@angular/core';

import { GatewayService } from '@app/_services/gateway.service';
import { DataSourceResponseWrapper } from '@app/_models';
import { SitDataBaseComponent } from '../controls/sit-data-base/sit-data-base.component';
import { sitSetDataSourceDirective } from '@app/_directives/sitSetDataSourceDirective';

@Component({
  selector: 'sit-data-source-container',
  templateUrl: './sit-data-source-container.component.html',
  // template: '<ng-container></ng-container>',
  styleUrls: ['./sit-data-source-container.component.scss']
})

export class SitDataSourceContainerComponent implements OnInit {
  @ContentChildren('sitSetDataSource', { descendants: true}) datasSourcesInterface: QueryList<sitSetDataSourceDirective>;
  @ContentChildren('sitControl', { descendants: true })
  dsControlsInterface!: QueryList<SitDataBaseComponent>;

  @Input() ident: string;
  dataSourceResponseWrapper: DataSourceResponseWrapper;

    constructor(private gatewayService: GatewayService) { }


  ngOnInit() {

  }
  ngAfterContentInit() {

  }
  ngAfterViewInit() {

  }
  public SetActiveRow(row: any) {
    this.dataSourceResponseWrapper.SetActiveRow(row);
  }
  public setDataSource(dataSourceResponseWrapper: DataSourceResponseWrapper) {
    this.dataSourceResponseWrapper = dataSourceResponseWrapper;

    this.datasSourcesInterface.forEach(element => {
      element.rows = this.dataSourceResponseWrapper.rows;
    });
    if (this.dsControlsInterface != null) {
        this.dsControlsInterface.forEach(element => {
          const fieldValue = this.dataSourceResponseWrapper.activeRow[element.field];
          element.dataSourceResponseWrapper = this.dataSourceResponseWrapper;
          element.setValue(fieldValue);
        });
     }
  }
  public deleteData() {

  }
  get errors() {
    return this.dataSourceResponseWrapper != null ? this.dataSourceResponseWrapper.errors : null;
  }

}





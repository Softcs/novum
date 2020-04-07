import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, ViewChild, ViewChildren, ElementRef, ContentChild, HostListener, ComponentFactoryResolver } from '@angular/core';

import { GatewayService } from '../../_services/gateway.service';
import { first } from 'rxjs/operators';
import { Operation, DataSourceResponseWrapper } from '@app/_models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';


@Directive({
  selector: 'sitSetDataSource',
})
export class sitSetDataSourceDirective {
  constructor(private el: ElementRef) {
  }
  @Input() rows;
}

@Directive({
  selector: 'sitDSControl',
})
export class sitDSControlDirective {
  constructor(private el: ElementRef) {
  }
  @Input() name;
  @Input() value;

}


interface LooseObject {
  [key: string]: any;
}


@Component({
  selector: 'app-data-source-container',
  templateUrl: './data-source-container.component.html',
  // template: '<ng-container></ng-container>',
  styleUrls: ['./data-source-container.component.scss']
})
@Directive({ selector: 'app-data-source-container' })
export class DataSourceContainerComponent implements OnInit {
  @ContentChildren('sitSetDataSource', { descendants: true}) datasSourcesInterface: QueryList<sitSetDataSourceDirective>;
  @ContentChildren('sitDSControl', { descendants: true }) dsControlsInterface: QueryList<sitDSControlDirective>;

  @Input() ident: string;
  dataSourceResponseWrapper: DataSourceResponseWrapper;

  obj: LooseObject = {};
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
          console.log("el", element)
              // const fieldValue = this.dataSourceResponseWrapper.activeRow["searchText"];
              // element.value(fieldValue);

        });
     }
  }
  public deleteData() {

  }
  get errors() {
    return this.dataSourceResponseWrapper != null ? this.dataSourceResponseWrapper.errors : null;
  }

}


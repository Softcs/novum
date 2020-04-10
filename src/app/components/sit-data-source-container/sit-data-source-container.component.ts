import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, ViewChild, ViewChildren, ElementRef, ContentChild, HostListener, ComponentFactoryResolver } from '@angular/core';

import { GatewayService } from '@app/_services/gateway.service';
import { first } from 'rxjs/operators';
import { Operation, DataSourceResponseWrapper } from '@app/_models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { sitDSControlDirective } from '@app/_directives';

@Directive({
  selector: 'sitSetDataSource',
})
export class sitSetDataSourceDirective {
  constructor(private el: ElementRef) {
  }
  @Input() rows;
}


@Component({
  selector: 'sit-data-source-container',
  templateUrl: './sit-data-source-container.component.html',
  // template: '<ng-container></ng-container>',
  styleUrls: ['./sit-data-source-container.component.scss']
})
@Directive({ selector: 'sit-data-source-container' })
export class SitDataSourceContainerComponent implements OnInit {
  @ContentChildren('sitSetDataSource', { descendants: true}) datasSourcesInterface: QueryList<sitSetDataSourceDirective>;
  @ContentChildren('sitDSControl', { descendants: true, read: ElementRef }) dsControlsInterface: QueryList<sitDSControlDirective>;

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
          console.log("el", element);
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





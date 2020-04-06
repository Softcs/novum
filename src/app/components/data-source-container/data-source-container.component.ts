import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, ViewChild, ViewChildren, ElementRef, ContentChild, HostListener, ComponentFactoryResolver } from '@angular/core';

import { GatewayService } from '../../_services/gateway.service';
import { first } from 'rxjs/operators';
import { Operation, DataSourceWrapper } from '@app/_models';
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
  @Input() sitDataSource;
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
  @ContentChildren('sitSetDataSource', { descendants:true}) datasSourcesInterface: QueryList<sitSetDataSourceDirective>;
  @ContentChild(MatSort, { static: true }) sort: MatSort;
  @ContentChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() ident: string;
  dataSourceWrapper: DataSourceWrapper;

  obj: LooseObject = {};
  constructor(private gatewayService: GatewayService) { }


  ngOnInit() {

  }
  ngAfterContentInit() {

  }
  ngAfterViewInit() {

  }
  public SetAvtiveRow(row: any) {
    this.dataSourceWrapper.SetAvtiveRow(row);
  }
  public setDataSource(dataSourceWrapper: DataSourceWrapper) {
    this.dataSourceWrapper = dataSourceWrapper;
    console.log("setDataSource",this);
    this.datasSourcesInterface.forEach(element => {
      element.rows = this.dataSourceWrapper.rows;
      element.sitDataSource = this;
    });
  }
  public deleteData() {

  }
  get errors() {
    return this.dataSourceWrapper != null ? this.dataSourceWrapper.errors : null;
  }

}


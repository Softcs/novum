import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, ViewChild, ViewChildren, ElementRef, ContentChild, HostListener, ComponentFactoryResolver } from '@angular/core';

import { GatewayService } from '../../_services/gateway.service';
import { first } from 'rxjs/operators';
import { Operation } from '@app/_models';
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
  @Input() dataSource;
  @Input() context;
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
  dataSource: any;

  obj: LooseObject = {};
  constructor(private gatewayService: GatewayService) { }
  public rows: MatTableDataSource<any>;

  ngOnInit() {

  }
  ngAfterContentInit() {

  }
  ngAfterViewInit() {

  }
  public setDataSource(dataSource: any) {
    this.dataSource = dataSource;
    this.rows = new MatTableDataSource(this.dataSource && this.dataSource.rows ? JSON.parse(this.dataSource.rows) : []);
    this.rows.sort = this.sort;
    this.rows.paginator = this.paginator;
    this.datasSourcesInterface.forEach(element => {
        element.dataSource = this.rows;
        element.context = this.rows;
    });
  }
  public deleteData() {

  }
  get errors() {
    return this.dataSource != null ? this.dataSource.errors : null;
  }

}


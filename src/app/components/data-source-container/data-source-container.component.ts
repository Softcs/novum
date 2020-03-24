import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, ViewChild, ViewChildren, ElementRef, ContentChild, HostListener, ComponentFactoryResolver } from '@angular/core';

import { GatewayService } from '../../_services/gateway.service';
import { first } from 'rxjs/operators';
import { Operation } from '@app/_models';
import { MatTable, MatTableDataSource } from '@angular/material';
import { JsonPipe } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-data-source-container',
  templateUrl: './data-source-container.component.html',
  // template: '<ng-container></ng-container>',
  styleUrls: ['./data-source-container.component.scss']
})
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



@Directive({ selector: 'app-data-source-container' })
export class DataSourceContainerComponent implements OnInit {
  @ContentChildren('sitSetDataSource', { descendants:true}) datasSourcesInterface: QueryList<sitSetDataSourceDirective>;
  @ViewChildren(sitSetDataSourceDirective) dd: QueryList<sitSetDataSourceDirective>;

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
    this.rows = new MatTableDataSource(this.dataSource ? JSON.parse(this.dataSource.rows) : []);
    this.datasSourcesInterface.forEach(element => {
        element.dataSource = this.rows;
        element.context = this.rows;

    });
  }
  public deleteData() {

  }

}


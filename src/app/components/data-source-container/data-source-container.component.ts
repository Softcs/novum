import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, ViewChild, ViewChildren, ElementRef, ContentChild, HostListener, ComponentFactoryResolver } from '@angular/core';

import { GatewayService } from '../../_services/gateway.service';
import { first } from 'rxjs/operators';
import { Operation } from '@app/_models';
import { MatTable } from '@angular/material';
import { JsonPipe } from '@angular/common';



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
  @Input("let-context") context;
}



@Directive({ selector: 'app-data-source-container' })
export class DataSourceContainerComponent implements OnInit {
  @ContentChildren('sitSetDataSource', { descendants:true}) datasSourcesInterface: QueryList<sitSetDataSourceDirective>;
  @ViewChildren(sitSetDataSourceDirective) dd: QueryList<sitSetDataSourceDirective>;

  @Input() ident: string;
  dataSource: any;

  constructor(private gatewayService: GatewayService) { }
  public rows: any[];

  ngOnInit() {

  }
  ngAfterContentInit() {

  }
  ngAfterViewInit() {

  }
  public setDataSource(dataSource: any) {
    this.dataSource = dataSource;
    this.rows = this.dataSource ? JSON.parse(this.dataSource.rows) : [];
    this.datasSourcesInterface.forEach(element => {
        console.log("element", element);
        element.dataSource = this.rows;
        element.context = this.rows;
    });

  }

}


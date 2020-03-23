import { Component, OnInit, Input, ViewChildren, QueryList, ViewChild, ContentChildren, Directive, ElementRef } from '@angular/core';
import { GatewayService } from '../../_services/gateway.service';
import { Operation } from '@app/_models';
import { first } from 'rxjs/operators';
import { DataSourceContainerComponent } from '../../components/data-source-container';
@Component({
  selector: 'app-dict-container',
  templateUrl: './dict-container.component.html',
  styleUrls: ['./dict-container.component.scss']
})



export class DictContainerComponent implements OnInit {
  @ContentChildren(DataSourceContainerComponent) dataSourceChildren !: QueryList<DataSourceContainerComponent>;

  @Input() ident: string;
  private dictInfo: any;
  private dataSourcesResponse: any;
  constructor(private gatewayService: GatewayService) { }

  ngOnInit() {
    this.loadData();
  }
  ngAfterViewInit() {
    // console.log("dataSourceChildren", this.dataSourceChildren)
  }
  loadData() {
    const oprDictInfo: Operation =  this.gatewayService.operationGetDictInfo(this.ident);
    this.gatewayService.executeOperation(oprDictInfo)
      .pipe(first())
      .subscribe(
        data => {
          if (data.length === 1) {
            this.dictInfo = data[0].dictInfo;
            this.dataSourcesResponse = data[0].dataSourcesResponse;
            this.propagateDataSources();
          }
        },
        error => {
          console.log("error", error);
        });
  }

  get caption() {
    return this.dictInfo ? this.dictInfo.caption : null;
  }
  public getDataSource(ident: string): any {
    const dataSource = this.dataSourcesResponse.filter(item => item.ident === ident)[0];
    return dataSource;
  }
  public getRows(ident: string): any {
    if (!this.dataSourcesResponse) {
      return null;
    }

    const dataSource = this.getDataSource(ident);
    if (dataSource != null) {
      if (!dataSource.records) {
        dataSource.records = dataSource ? JSON.parse(dataSource.rows) : null;
      }
      return dataSource.records;
    }
    return null;
  }
  private propagateDataSources() {
    if (!this.dataSourceChildren) {
      return;
    }
    this.dataSourceChildren.forEach(dataSourceContainer => {
      const dataSource = this.getDataSource(dataSourceContainer.ident);
      dataSourceContainer.setDataSource(dataSource);
    });

  }

}

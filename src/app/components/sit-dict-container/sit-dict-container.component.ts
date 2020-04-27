import { Component, OnInit, Input, ViewChildren, QueryList, ViewChild, ContentChildren, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { GatewayService } from '../../_services/gateway.service';
import { Operation, DataSourceResponseWrapper, DictInfoWrapper, DataSourceManager } from '@app/_models';
import { first } from 'rxjs/operators';
import { SitDataSourceContainerComponent } from '../sit-data-source-container';
@Component({
  selector: 'sit-dict-container',
  templateUrl: './sit-dict-container.component.html',
  styleUrls: ['./sit-dict-container.component.scss'],
  host: {class: 'router-flex'}
})


export class SitDictContainerComponent implements OnInit {
  @ContentChildren(SitDataSourceContainerComponent) dataSourceComponents !: QueryList<SitDataSourceContainerComponent>;

  @Input() ident: string;
  private dictInfo: DictInfoWrapper;
  private dataSourcesResponse: any;
  public DataSourceManager: DataSourceManager;

  @Output()
  refreshAfter: EventEmitter<DataSourceManager> = new EventEmitter<DataSourceManager>();

  constructor(private gatewayService: GatewayService) {
    this.DataSourceManager = new DataSourceManager(gatewayService);

  }

  ngOnInit() {
    this.DataSourceManager.refreshAfter = this.refreshAfter;
    this.loadData();
  }
  ngAfterViewInit() {

  }
  loadData() {
    const oprDictInfo: Operation =  this.gatewayService.operationGetDictInfo(this.ident);
    this.gatewayService.executeOperation(oprDictInfo)
      .pipe(first())
      .subscribe(
        data => {
          if (data.length === 1) {
            this.dictInfo = new DictInfoWrapper(data[0].dictInfo);
            this.DataSourceManager.dictInfo = this.dictInfo;
            this.DataSourceManager.dataSourceComponents = this.dataSourceComponents;
            this.DataSourceManager.dataSourcesResponse = data[0].dataSourcesResponse;
            this.DataSourceManager.setRefreshDataSources(this.DataSourceManager.dataSourcesResponse);
            this.DataSourceManager.PropagateDataSources();
          }
        },
        error => {
          console.error("error", error);
        });
  }

  get caption() {
    return this.dictInfo ? this.dictInfo.caption : null;
  }
}

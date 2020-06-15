import { Component, OnInit, Input, ViewChildren, QueryList, ViewChild, ContentChildren, Directive, ElementRef,
          EventEmitter, Output } from '@angular/core';
import { GatewayService } from '../../_services/gateway.service';
import { Operation, DataSetWrapper, DictInfoWrapper, DataSourceManager } from '@app/_models';
import { first } from 'rxjs/operators';
import { SitDataSetContainerComponent } from '../sit-data-set-container';
@Component({
  selector: 'sit-dict-container',
  templateUrl: './sit-dict-container.component.html',
  styleUrls: ['./sit-dict-container.component.scss'],
  host: {class: 'router-flex'}
})


export class SitDictContainerComponent implements OnInit {
  @ContentChildren(SitDataSetContainerComponent, { descendants: true })
  dataSetContainers !: QueryList<SitDataSetContainerComponent>;

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

  }
  ngAfterViewInit() {
    this.loadData();
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
            this.DataSourceManager.dataSetContainers = this.dataSetContainers;
            console.log(data[0],"data[0]")
            this.DataSourceManager.dataSetsResponse = data[0].dataSourcesResponse;
            this.DataSourceManager.setRefreshDataSources(this.DataSourceManager.dataSetsResponse);
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

  public activeRow(ident: string) {
    const wrapper = this.DataSourceManager.getDateSourceWrapper(ident);
    return wrapper?.activeRow;
  }
}

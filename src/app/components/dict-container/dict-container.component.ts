import { Component, OnInit, Input, ViewChildren, QueryList, ViewChild, ContentChildren, Directive, ElementRef } from '@angular/core';
import { GatewayService } from '../../_services/gateway.service';
import { Operation, DataSourceResponseWrapper, DictInfoWrapper, DataSourceManager } from '@app/_models';
import { first } from 'rxjs/operators';
import { DataSourceContainerComponent } from '../../components/data-source-container';
@Component({
  selector: 'app-dict-container',
  templateUrl: './dict-container.component.html',
  styleUrls: ['./dict-container.component.scss']
})


export class DictContainerComponent implements OnInit {
  @ContentChildren(DataSourceContainerComponent) dataSourceComponents !: QueryList<DataSourceContainerComponent>;

  @Input() ident: string;
  private dictInfo: DictInfoWrapper;
  private dataSourcesResponse: any;
  public DataSourceManager: DataSourceManager;
  constructor(private gatewayService: GatewayService) {
    this.DataSourceManager = new DataSourceManager(gatewayService);
  }

  ngOnInit() {
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

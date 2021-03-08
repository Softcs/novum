import { Component, OnInit, Input, ViewChildren, QueryList, ViewChild, ContentChildren, Directive, ElementRef,
          EventEmitter, Output, AfterContentInit, AfterViewInit } from '@angular/core';
import { GatewayService } from '../../_services/gateway.service';
import { Operation, DictInfoWrapper, DataSetManager } from '@app/_models';
import { first } from 'rxjs/operators';
import { SitDataSetContainerComponent } from '../sit-data-set-container';
import { SitProcExpanderComponent } from '../controls/sit-proc-expander/sit-proc-expander.component';
@Component({
  selector: 'sit-dict-container',
  templateUrl: './sit-dict-container.component.html',
  styleUrls: ['./sit-dict-container.component.scss'],
  host: {class: 'router-flex'}
})


export class SitDictContainerComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChildren(SitDataSetContainerComponent, { descendants: true })
  dataSetContainers !: QueryList<SitDataSetContainerComponent>;
  @ViewChild(SitProcExpanderComponent) procExpander: SitProcExpanderComponent;

  @Input() ident: string;
  private dictInfo: DictInfoWrapper;
  public DataSetManager: DataSetManager;

  @Output() refreshAfter: EventEmitter<DataSetManager> = new EventEmitter<DataSetManager>();

  constructor(private gatewayService: GatewayService) {
    this.DataSetManager =   new DataSetManager(gatewayService);
  }

  ngAfterViewInit(): void {
    this.DataSetManager.procExpander = this.procExpander;
  }

  ngOnInit() {
    this.DataSetManager.refreshAfter = this.refreshAfter;
  }

  ngAfterContentInit() {
    this.DataSetManager.dataSetContainers = this.dataSetContainers;
    this.DataSetManager.afterContentInit();    
    this.loadData();
  }

  private prepareControls() {
    this.DataSetManager.prepareControls();
  }

  loadData() {
    const oprDictInfo: Operation =  this.gatewayService.operationGetDictInfo(this.ident);
    this.gatewayService.executeOperation(oprDictInfo)
      .pipe(first())
      .subscribe(
        data => {
          if (data.length === 1) {
            this.dictInfo = new DictInfoWrapper(data[0].dictInfo);
            if (this.dictInfo != null && !this.dictInfo.hasRights) {
              console.warn(this.dictInfo.ident + " no rights!");
              return;
            }
            this.DataSetManager.dictInfo = this.dictInfo;
            this.DataSetManager.dataSetsResponse = data[0].dataSourcesResponse;
            this.DataSetManager.setRefreshDataSources(this.DataSetManager.dataSetsResponse);
            this.DataSetManager.PropagateDataSources();
            this.prepareControls();
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
    const wrapper = this.DataSetManager.getDateSourceWrapper(ident);
    return wrapper?.activeRow;
  }
}

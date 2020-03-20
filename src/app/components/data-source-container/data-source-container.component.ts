import { Component, OnInit, Input } from '@angular/core';
import { GatewayService } from '@app/_services';
import { first } from 'rxjs/operators';
import { Operation } from '@app/_models';

@Component({
  selector: 'app-data-source-container',
  // templateUrl: './data-source-container.component.html',
  template: '<ng-container></ng-container>',
  styleUrls: ['./data-source-container.component.scss']
})
export class DataSourceContainerComponent implements OnInit {
  @Input() ident: string;
  @Input() dictIdent: string;
  dictInfo: any;
  dataSourcesResponse: any;
  dataSource: any;
  rows: any;

  constructor(private gatewayService: GatewayService) { }
  get records(): any {
    if (this.rows) {
      return this.rows;
    }

    return [];
  }
  ngOnInit() {
    this.loadData();
  }
  parseRows() {
    if (!this.dataSourcesResponse) {
      this.rows = null;
    }
    this.dataSource = this.dataSourcesResponse.filter( item => item.ident === this.ident)[0];
    this.rows = this.dataSource ? JSON.parse(this.dataSource.rows) : null;
  }
  loadData() {

    const oprDictInfo: Operation = this.gatewayService.operationGetDictInfo(this.dictIdent);
    this.gatewayService.executeOperation(oprDictInfo)
      .pipe(first())
      .subscribe(
        data => {
          if (data.length === 1) {
            this.dictInfo = data[0].dictInfo;
            this.dataSourcesResponse = data[0].dataSourcesResponse;
            this.parseRows();
          }
        },
        error => {
          console.log("error", error);
        });
  }
}

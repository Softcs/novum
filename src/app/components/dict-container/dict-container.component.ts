import { Component, OnInit, Input } from '@angular/core';
import { GatewayService } from '@app/_services';
import { Operation } from '@app/_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dict-container',
  templateUrl: './dict-container.component.html',
  styleUrls: ['./dict-container.component.scss']
})
export class DictContainerComponent implements OnInit {
  @Input() ident: string;
  private _dictInfo: any;
  private _dataSourcesResponse: any;
  private _rows:any;

  constructor(private gatewayService: GatewayService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    const oprDictInfo: Operation =  this.gatewayService.operationGetDictInfo(this.ident);
    this.gatewayService.executeOperation(oprDictInfo)
      .pipe(first())
      .subscribe(
        data => {
          if (data.length === 1) {
            this._dictInfo = data[0].dictInfo;
            this._dataSourcesResponse = data[0].dataSourcesResponse;
            this._rows = this._dataSourcesResponse ? JSON.parse(this._dataSourcesResponse[0].rows) : null;
            console.log("this._rows", this._rows)
          }
        },
        error => {
          console.log("error", error);
        });
  }
  get rows(): any {
    if (this._rows) {
      return this._rows;
    }

    return [];
  }
  get caption() {
    return this._dictInfo ? this._dictInfo.caption : null;
  }

}

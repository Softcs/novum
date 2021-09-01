import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-rail-log',
  templateUrl: './sit-rail-log.component.html',
  styleUrls: ['./sit-rail-log.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRailLogComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitRailLog"] = [
      { headerName: 'MaxLogId', field: 'MaxLogId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100},
      { headerName: 'MinLogId', field: 'MinLogId', type: 'numericColumn', filter: 'agNumberColumnFilter', sort: 'desc', width: 120 },
      { headerName: 'MaxLogDate', field: 'MaxLogDate', type: 'numericColumn', filter: 'agDateColumnFilter', width: 130,
      renderType: "date", renderFormat: "yyyy-MM-dd H:mm:ss" },
      { headerName: 'MinLogDate', field: 'MinLogDate', type: 'numericColumn', filter: 'agDateColumnFilter', width: 130,
      renderType: "date", renderFormat: "yyyy-MM-dd H:mm:ss"},
      { headerName: 'ClientGuid', field: 'ClientGuid', type: 'numericColumn', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'TransportGuid', field: 'TransportGuid', type: 'numericColumn', filter: 'agTextColumnFilter', width: 255 },
      { headerName: 'CompanyIdent', field: 'CompanyIdent', type: 'numericColumn', filter: 'agTextColumnFilter', width: 140 },
      { headerName: 'OperationIdent', field: 'OperationIdent', type: 'numericColumn', filter: 'agTextColumnFilter', width: 170},
      { headerName: 'Status', field: 'Status', type: 'numericColumn', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'DetailStatus', field: 'DetailStatus', type: 'numericColumn', filter: 'agTextColumnFilter', width: 110 }
    ];

    this.gridColumnsDefinition["sitRailLogDetails"] = [
      { headerName: 'LogId', field: 'LogId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'LogDate', field: 'LogDate', type: 'numericColumn', filter: 'agDateColumnFilter', width: 130, sort: 'desc',
      renderType: "date", renderFormat: "yyyy-MM-dd H:mm:ss" },
      { headerName: 'LogMessage', field: 'LogMessage', type: 'numericColumn', filter: 'agTextColumnFilter' },
      { headerName: 'Operation', field: 'Operation', type: 'numericColumn', filter: 'agTextColumnFilter' },
      { headerName: 'ClientGuid', field: 'ClientGuid', type: 'numericColumn', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'TransportGuid', field: 'TransportGuid', type: 'numericColumn', filter: 'agTextColumnFilter', width: 255 },
      { headerName: 'CompanyIdent', field: 'CompanyIdent', type: 'numericColumn', filter: 'agTextColumnFilter', width: 140 },
      { headerName: 'OperationIdent', field: 'OperationIdent', type: 'numericColumn', filter: 'agTextColumnFilter', width: 170 },
      { headerName: 'DetailStatus', field: 'DetailStatus', type: 'numericColumn', filter: 'agTextColumnFilter', width: 110 },
      { headerName: 'ExecBatch', field: 'ExecBatch', type: 'numericColumn', filter: 'agNumberColumnFilter' , width: 110},
    ];
  }
}

import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { GridService } from '@app/_services/grid.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sit-rail-log',
  templateUrl: './sit-rail-log.component.html',
  styleUrls: ['./sit-rail-log.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRailLogComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  popupParent;
  columnDefs;
  columnDefsDetails;

  constructor(
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string,
  ) {
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'MaxLogId', field: 'MaxLogId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100},
      { headerName: 'MinLogId', field: 'MinLogId', type: 'numericColumn', filter: 'agNumberColumnFilter', sort: 'desc', width: 120 },
      { headerName: 'MaxLogDate', field: 'MaxLogDate', type: 'numericColumn', filter: 'agDateColumnFilter', width: 130,
        cellRenderer: (data) => formatDate(data.value, 'yyyy-MM-dd H:mm', this.locale)
      },
      { headerName: 'MinLogDate', field: 'MinLogDate', type: 'numericColumn', filter: 'agDateColumnFilter', width: 130,
        cellRenderer: (data) => formatDate(data.value, 'yyyy-MM-dd H:mm', this.locale)
      },
      { headerName: 'ClientGuid', field: 'ClientGuid', type: 'numericColumn', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'TransportGuid', field: 'TransportGuid', type: 'numericColumn', filter: 'agTextColumnFilter', width: 255 },
      { headerName: 'CompanyIdent', field: 'CompanyIdent', type: 'numericColumn', filter: 'agTextColumnFilter', width: 140 },
      { headerName: 'OperationIdent', field: 'OperationIdent', type: 'numericColumn', filter: 'agTextColumnFilter', width: 170},
      { headerName: 'Status', field: 'Status', type: 'numericColumn', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'DetailStatus', field: 'DetailStatus', type: 'numericColumn', filter: 'agTextColumnFilter', width: 110 }
    ];

    this.columnDefsDetails = [
      { headerName: 'LogId', field: 'LogId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'LogDate', field: 'LogDate', type: 'numericColumn', filter: 'agDateColumnFilter', width: 130, sort: 'desc',
        cellRenderer: (data) => formatDate(data.value, 'yyyy-MM-dd H:mm', this.locale) },
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

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
  }

}

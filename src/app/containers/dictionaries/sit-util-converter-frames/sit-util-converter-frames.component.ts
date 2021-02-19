import { Component, OnInit, ViewChild, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sit-util-converter-frames',
  templateUrl: './sit-util-converter-frames.component.html',
  styleUrls: ['./sit-util-converter-frames.component.scss'],
  host: {class: 'router-flex'}
})
export class SitUtilConverterFramesComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  popupParent;
  columnDefs;
  columnDefsDB;

  constructor(
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string,
  ) {
    this.popupParent = document.querySelector('body');
      
    this.columnDefs = [
      { headerName: 'Number', field: 'FrameNumber', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100, sort: 'desc' },
      { headerName: 'Date', field: 'FrameDate', filter: 'agTextColumnFilter', width: 120 ,
        cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd HH:mm', this.locale) }
      },
      { headerName: 'Name', field: 'LoginName', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Status', field: 'FrameStatus',type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
        ];
    
    this.columnDefsDB = [          
      { headerName: 'database_id', field: 'database_id', type: "numericColumn", filter: 'agNumberColumnFilter', width: 120 },
      { headerName: 'DBName', field: 'DBName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'DBVersion', field: 'DBVersion',type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
         ]
       }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

  }
}

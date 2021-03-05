import { Component, OnInit, ViewChild, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sit-statuses',
  templateUrl: './sit-statuses.component.html',
  styleUrls: ['./sit-statuses.component.scss'],
  host: {class: 'router-flex'}
})
export class SitStatusesComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;


  popupParent;
  columnDefs;
  columnDefsStatusValues;
  columnDefsStatusValuesTransitions;


  constructor(
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string,
  ) {
    this.popupParent = document.querySelector('body');


    this.columnDefs = [

      { headerName: 'sitStatusesG', field: 'sitStatusesG', flex: 1 },
      { headerName: 'StatusIdent', field: 'StatusIdent', flex: 1},
      { headerName: 'StatusName', field: 'StatusName',toolTip: 'StatusName', flex: 1 },
      { headerName: 'TableName', field: 'TableName', flex: 1 },
      { headerName: 'ColumnName', field: 'ColumnName', flex: 1 },
    ];

    this.columnDefsStatusValues= [

      { headerName: 'ValueIdent', field: 'ValueIdent', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'ValueName', field: 'ValueName', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Order', field: 'Order', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'IsDefault', field: 'IsDefault', filter: 'agTextColumnFilter', width: 100 },

    ];
    this.columnDefsStatusValuesTransitions = [

      { headerName: 'sitStatusValuesId_From', field: 'sitStatusValuesId_From', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'sitStatusValuesId_To', field: 'sitStatusValuesId_To', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'IsActive', field: 'IsActive', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'ValueIdent as ValueIdent_From', field: 'ValueIdent as ValueIdent_From', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'ValueName as ValueName_From', field: 'ValueName as ValueName_From', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'ValueIdent as ValueIdent_To', field: 'ValueIdent as ValueIdent_To', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'ValueName as ValueName_To', field: 'ValueName as ValueName_To', filter: 'agTextColumnFilter', width: 100 },

    ];



   }

  ngOnInit(): void {
  }
  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

  }
}

import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, LOCALE_ID, Inject  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper, User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { GridService } from '@app/_services/grid.service';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';

@Component({
  selector: 'app-sit-attendance-list',
  templateUrl: './sit-attendance-list.component.html',
  styleUrls: ['./sit-attendance-list.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAttendanceListComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  frameworkComponents;
  excelStyles;
  popupParent;
  columnDefs;
  autoGroupColumnDef;
  gridApi: any;
  gridColumnApi: any;
  dataSourceResponseWrapper: DataSetWrapper;

  constructor(
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.excelStyles = sitGlobalConfig.excelStyles;
    this.frameworkComponents = sitGlobalConfig.frameworkComponents;
    this.autoGroupColumnDef = {
      flex: 3,
      suppressMenu: true,
      headerName: 'Pracownik',
      suppressCount: true,
      cellRendererParams: {
        suppressCount: true,
      },
    };

    this.columnDefs = [
      { headerName: 'Nazwisko', field: 'EmployeeName', flex: 4, suppressMenu: true, rowGroup: true,},
      // { headerName: '__Identity__', field: '__Identity__',  flex: 4, suppressMenu: true, rowGroup: true, hide: true},
      { headerName: 'Dzień', field: 'Day', suppressMenu: true, pivot: true  },
      { headerName: 'Obecny', field: 'Present',  flex: 1, suppressMenu: true,cellRenderer: 'gridCheckboxRenderer', aggFunc: 'sum',},
    ]
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  refreshAfter(dataSourceManager) {
    this.dataSourceResponseWrapper = dataSourceManager?.getDateSourceWrapper("sitAttendanceList");
    console.log(this.dataSourceResponseWrapper.activeRow)
  }

  onCellClicked(e){
  }
}

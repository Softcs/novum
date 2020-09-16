import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
//import { AllModules } from '@ag-grid-enterprise/all-modules';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'app-sit-params',
  templateUrl: './sit-params.component.html',
  styleUrls: ['./sit-params.component.scss'],
  host: {class: 'router-flex'}
})
export class SitParamsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;

  //modules: any[] = AllModules;
  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;
  pinnedBottomRowData;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
    };

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Identyfikator', field: 'ParamIdent', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, flex: 1 },
      { headerName: 'Wartość', field: 'ParamValue', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, flex: 2 },
    ];
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitParams');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];

    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
  }

}

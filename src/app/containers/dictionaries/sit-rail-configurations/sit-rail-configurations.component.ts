import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { GridService } from '@app/_services/grid.service';
@Component({
    selector: 'sit-rail-configurations',
    templateUrl: 'sit-rail-configurations.component.html',
    styleUrls: ['sit-rail-configurations.component.scss'],
    host: {class: 'router-flex'}
})
export class SitRailConfigurationsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChild('sitRailConfigurations') table: any;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  popupParent;
  frameworkComponents;
  columnDefs;

  constructor(
    private gridService: GridService
  ) {
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'CompanyIdent', field: 'CompanyIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'OperationIdent', field: 'OperationIdent', sortable: true, flex: 2, filter: 'agTextColumnFilter', autoHeight: true },
      { headerName: 'IsActive', field: 'IsActive', sortable: true, flex: 1, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered"  },
    ];

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
  }



}

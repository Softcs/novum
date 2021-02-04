import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'sit-locations',
  templateUrl: './sit-locations.component.html',
  styleUrls: ['./sit-locations.component.scss'],
  host: {class: 'router-flex'}
})
export class SitLocationsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  frameworkComponents;

  popupParent;
  columnDefs;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'Id', field: 'sitLocationsId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitLocationsG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'LocationIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwa', field: 'LocationName', filter: 'agTextColumnFilter', width: 300 },
      //{ headerName: 'Aktywny', field: 'IsActive', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100  },

    ];

  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    params.columnApi.setColumnsVisible(['sitLocationsId','sitLocationsG'], false)
  }

}

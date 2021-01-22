import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'sit-agreements-types',
  templateUrl: './sit-agreements-types.component.html',
  styleUrls: ['./sit-agreements-types.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAgreementsTypesComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  frameworkComponents;
  popupParent;

  gridApi;
  gridColumnApi;
  columnDefs;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');


    this.columnDefs = [
      { headerName: 'Id', field: 'sitAgreementsTypesId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50 },
      { headerName: 'GUID', field: 'sitAgreementsTypesG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'AgreementsTypeIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwa', field: 'AgreementsTypeName', filter: 'agTextColumnFilter', width: 300 },
      //{ headerName: 'Aktywny', field: 'IsActive', sortable: true, filter: 'agTextColumnFilter', autoHeight: true, cellRenderer: 'gridCheckboxRenderer', cellClass: "grid-cell-centered", width: 100  },

    ];

   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitAgreementsTypesId','sitAgreementsTypesG'], false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitAgreementsTypes');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(event) {}

}

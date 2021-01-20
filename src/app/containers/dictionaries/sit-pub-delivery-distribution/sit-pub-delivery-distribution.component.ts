import { Component, OnInit, ViewChild, ViewChildren, QueryList, LOCALE_ID, Inject } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'sit-pub-delivery-distribution',
  templateUrl: './sit-pub-delivery-distribution.component.html',
  styleUrls: ['./sit-pub-delivery-distribution.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubDeliveryDistributionComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  rowSelection;
  popupParent;
  defaultColDef;

  gridApi;
  gridColumnApi;
  columnDefs;

  constructor(
    private gatewayService: GatewayService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'multi';

    this.defaultColDef = {
      sortable: true,
      filter: false,
      floatingFilter: false,
      resizable: true,
      autoHeight: true
    };

    this.columnDefs = [
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter' },
      { headerName: 'Status', field: 'ProjectStatus', filter: 'agTextColumnFilter' },
    ]
   }

  ngOnInit(): void {
  }

  onFirstDataRendered(params) {
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitPubDeliveryDistrybution');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }


}

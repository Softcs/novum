import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, SystemJsNgModuleLoader  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { StylesheetMap } from '@angular/flex-layout';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'app-sit-customers',
  templateUrl: './sit-customers.component.html',
  styleUrls: ['./sit-customers.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomersComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;

  columnDefsCustomers;
  popupParent;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');

    this.columnDefsCustomers = [
      { headerName: 'ID', field: 'sitCustomersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'GUID', field: 'sitCustomersG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'CustIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', width: 300 },
      { headerName: 'NIP', field: 'VATId', width: 100 },
      { headerName: 'Miasto', field: 'City', width: 100 },
      { headerName: 'Kraj', field: 'CountrySymbol', width: 80 },
      { headerName: 'Status WMS', field: 'Status_WMS', width: 100 },
    ];
   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitCustomersId')) {
      params.columnApi.setColumnsVisible(['sitCustomersId','sitCustomersG'], false);
    }
  }

  onRowClicked(event) {
    if (event.data['sitCustomersId']) {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitCustomers');
      dataSourceResponseWrapper.SetActiveRow(event.data);
    }
  }

  onFirstDataRendered(params) {}

}

import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { AllModules } from '@ag-grid-enterprise/all-modules';

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
  modules: any[] = AllModules;
  gridApiCustomers;
  gridColumnApiCustomers;
  columnDefsCustomers;
  defaultColDef;
  rowSelection;
  popupParent;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true
    };

    this.columnDefsCustomers = [
      { headerName: 'Identyfikator', field: 'CustIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter' },
      { headerName: 'NIP', field: 'VATId', filter: 'agTextColumnFilter' },
      { headerName: 'Miasto', field: 'City', filter: 'agTextColumnFilter' },
      { headerName: 'Kraj', field: 'CountrySymbol', filter: 'agTextColumnFilter' },
    ];


   }

  ngOnInit(): void {
  }

  onGridReadyCustomers(params) {
    this.gridApiCustomers = params.api;
    this.gridColumnApiCustomers = params.columnApi;
  }

  onRowClickedCustomers(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitCustomers');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];
    this.gridColumnApiCustomers.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiCustomers.autoSizeColumns(allColumnIds, false);
  }

}

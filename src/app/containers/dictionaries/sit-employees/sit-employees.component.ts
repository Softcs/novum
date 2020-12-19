import { Component, OnInit, ViewChild, ViewChildren, QueryList, ComponentFactoryResolver } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';

@Component({
  selector: 'sit-employees',
  templateUrl: './sit-employees.component.html',
  styleUrls: ['./sit-employees.component.scss'],
  host: {class: 'router-flex'}
})
export class SitEmployeesComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;

  gridApi;
  gridColumnApi;
  columnDefs;
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
      sortable: true,
      filter: false,
      floatingFilter: false,
      resizable: true
    };

    this.columnDefs = [
      { headerName: 'Identyfikator', field: 'EmployeeIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Imię', field: 'FirstName', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwisko', field: 'LastName', filter: 'agTextColumnFilter' },
      { headerName: 'PESEL', field: 'PESEL', filter: 'agTextColumnFilter' },
      { headerName: 'Kraj', field: 'CountrySymbol', filter: 'agTextColumnFilter' },
      { headerName: 'Identyfikator zewnętrzny', field: 'ExtIdent01', filter: 'agTextColumnFilter' },
    ];


  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitEmployees');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
  }

}

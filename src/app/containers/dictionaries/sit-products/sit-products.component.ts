import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
//import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-sit-products',
  templateUrl: './sit-products.component.html',
  styleUrls: ['./sit-products.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProductsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;
  @ViewChild('sitProducts') table: any;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  currentUser: User;
  activeRow: any;
  sitProductsSelected = [];

  //public modules: Module[] = [ClientSideRowModelModule];
  public columnDefs;
  public defaultColDef;


  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.columnDefs = [
      { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true,
      filter: 'agTextColumnFilter',
      filterParams: {
        filterOptions: ['contains', 'notContains']
      },
      checkboxSelection: true },
      {headerName: 'Nazwa', field: 'ProductName', sortable: true, filter: true, resizable: true },
      {headerName: 'JM', field: 'UnitIdent', sortable: true, filter: true, resizable: true },
      {headerName: 'Vat', field: 'VATRateIdent', sortable: true, filter: true, resizable: true },
      {headerName: 'EAN', field: 'EAN', sortable: true, filter: true, resizable: true },
      {headerName: 'Kraj', field: 'CountrySymbol', sortable: true, filter: true, resizable: true },
      {headerName: 'PKWIU', field: 'PKWIU', sortable: true, filter: true, resizable: true },
    ];
    this.defaultColDef = {
      flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: true,
    };

}

  ngOnInit(): void {

  }
  onActivateProducts(event) {
    if (event.type === 'click') {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitCustomers');
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }
}

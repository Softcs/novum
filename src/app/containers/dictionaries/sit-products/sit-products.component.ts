import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';

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

  columnDefs = [
    {headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'Nazwa', field: 'ProductName', sortable: true, filter: true }
  ];

  rowData = [
    { ProductIdent: 'Toyota', ProductName: 'Celica' },
    { ProductIdent: 'Ford', ProductName: 'Mondeo' },
    { ProductIdent: 'Porsche', ProductName: 'Boxter' }
  ];

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
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

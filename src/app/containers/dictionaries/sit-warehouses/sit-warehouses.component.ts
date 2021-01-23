import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
@Component({
  selector: 'app-sit-warehouses',
  templateUrl: './sit-warehouses.component.html',
  styleUrls: ['./sit-warehouses.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWarehousesComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  popupParent;
  columnDefs;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'sitWarehousesId', field: 'sitWarehousesId', type: 'numericColumn', sortable: true, filter: 'agNumberColumnFilter'},
      { headerName: 'sitWarehousesG', field: 'sitWarehousesG', filter: 'agTextColumnFilter' },
      { headerName: 'Identyfikator', field: 'WarehouseIdent', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'WarehouseName', filter: 'agTextColumnFilter', width: 200 },
    ]

   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    params.columnApi.setColumnsVisible(['sitWarehousesId', 'sitWarehousesG'], false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitWarehouses');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) { }
}

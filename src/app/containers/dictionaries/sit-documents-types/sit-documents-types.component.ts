import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'app-sit-documents-types',
  templateUrl: './sit-documents-types.component.html',
  styleUrls: ['./sit-documents-types.component.scss'],
  host: {class: 'router-flex'}
})
export class SitDocumentsTypesComponent {
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
      { headerName: 'Identyfikator', field: 'DocumentIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'DocumentName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Opis', field: 'DocumentDescription', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Wpływ na magazyn', field: 'StockEffect', type: "numericColumn" },
    ]

   }

   onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
  }

}

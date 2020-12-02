import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'app-sit-products',
  templateUrl: './sit-products.component.html',
  styleUrls: ['./sit-products.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProductsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  link;
  ean;
  frameworkComponents;

  //modules: any[] = AllModules;
  gridApiProducts;
  gridColumnApiProducts;
  columnDefsProducts;
  defaultColDefProducts;
  rowSelection;
  popupParent;


  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.defaultColDefProducts = {
      flex: 1,
      sortable: true,
      filter: true,
      floatingFilter: false,
      resizable: true
    };

    this.columnDefsProducts = [
      { headerName: 'Identyfikator', field: 'ProductIdent', sortable: true, resizable: true, filter: 'agTextColumnFilter',
      // filterParams: {
      //   filterOptions: ['contains', 'notContains']
      // },
      checkboxSelection: false },
      { headerName: 'Nazwa', field: 'ProductName', filter: 'agTextColumnFilter' },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Vat', field: 'VATRateIdent', filter: 'agTextColumnFilter' },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter' },
      { headerName: 'PKWIU', field: 'PKWIU', filter: 'agTextColumnFilter' },
      { headerName: 'Waga', field: 'Weight', filter: 'agTextColumnFilter' },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', type: 'numericColumn', width: 80, cellRenderer: 'gridCheckboxRenderer', floatingFilter: false }

    ];

}

  ngOnInit(): void {

  }

  onGridReadyProducts(params) {
    this.gridApiProducts = params.api;
    this.gridColumnApiProducts = params.columnApi;
  }

  onRowClickedProducts(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitProducts');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    var allColumnIds = [];
    this.gridColumnApiProducts.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiProducts.autoSizeColumns(allColumnIds, false);
  }

  activeRowProductsChanged(activeRow) {
    this.link = activeRow == null || activeRow.sitImagesG == null
      ? environment.apiUrl +'/service/attachments/get/' + this.currentUser.token + '/noimage/noimage.jpg' : // kiedy brak rekordu
        environment.apiUrl +'/service/attachments/get/' + this.currentUser.token + '/' + activeRow.sitImagesG + '/' + activeRow.FileName;

    this.ean = activeRow !== null ? activeRow.EAN : '';

  }
}

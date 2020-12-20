import { Component, OnInit, ViewChild, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { AttachmentsService } from '@app/_services/attachments.service';
import { formatNumber } from '@angular/common';
import { formatDate } from '@angular/common';


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
    private gatewayService: GatewayService,
    private attachmentsService: AttachmentsService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.defaultColDefProducts = {
      sortable: true,
      filter: true,
      floatingFilter: false,
      resizable: true
    };

    this.columnDefsProducts = [
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150,
      // filterParams: {
      //   filterOptions: ['contains', 'notContains']
      // },
      checkboxSelection: false },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'Vat', field: 'VATRateIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'PKWIU', field: 'PKWIU', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Waga', field: 'Weight', filter: 'agTextColumnFilter', type: 'numericColumn', width: 80,
        cellRenderer: function(params) {
        return formatNumber(params.data["Weight"], locale,'1.3-3')
        }

      },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', type: 'numericColumn', width: 100, cellRenderer: 'gridCheckboxRenderer', floatingFilter: false }

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
    // this.gridColumnApiProducts.getAllColumns().forEach(function(column) {
    //   allColumnIds.push(column.colId);
    // });
    // this.gridColumnApiProducts.autoSizeColumns(allColumnIds, false);
  }

  activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.attachmentsService.getUrl(this.currentUser, "noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.attachmentsService.getUrl(this.currentUser, activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }
}

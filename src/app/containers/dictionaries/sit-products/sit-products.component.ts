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
import { GridService } from '@app/_services/grid.service';

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
  contentColor;
  popupParent;
  columnDefsProducts;
  columnDefsSaleStatusIntervals;

  constructor(
    private gatewayService: GatewayService,
    private attachmentsService: AttachmentsService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.contentColor = document.documentElement.style.getPropertyValue('$content-background-color');
    this.popupParent = document.querySelector('body');
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefsProducts = [
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'Vat', field: 'VATRateIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'PKWIU', field: 'PKWIU', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Waga kg', field: 'Weight', filter: 'agTextColumnFilter', type: 'numericColumn', width: 90,
        cellRenderer: function(params) {
        return formatNumber(params.data["Weight"], locale,'1.3-3')
        }

      },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', width: 80, cellRenderer: 'gridCheckboxRenderer', suppressMenu: true },
      { headerName: 'Status sprz.', field: 'SaleStatus', tooltipField: 'SaleStatusDescription', width: 80, suppressMenu: true},


    ];

    this.columnDefsSaleStatusIntervals = [
      { headerName: 'Od dnia', field: 'DateFrom', width: 100,},
      { headerName: 'Status', field: 'SaleStatus', width: 80,},
      { headerName: 'Opis', field: 'SaleStatusDescription', width: 150,},
    ]
}

  ngOnInit(): void {

  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
  }


  activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.attachmentsService.getUrl(this.currentUser, "noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.attachmentsService.getUrl(this.currentUser, activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }
}

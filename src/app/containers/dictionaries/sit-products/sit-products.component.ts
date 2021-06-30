import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-products',
  templateUrl: './sit-products.component.html',
  styleUrls: ['./sit-products.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProductsComponent extends SitDictBaseComponent {

  link;
  ean;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitProducts"] = [
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'Vat', field: 'VATRateIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'PKWIU', field: 'PKWIU', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Waga kg', field: 'Weight', filter: 'agTextColumnFilter', type: 'numericColumn', width: 90, renderType: 'number', renderFormat: '1.3-3'
      },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true },
      { headerName: 'Status sprz.', field: 'SaleStatus', tooltipField: 'SaleStatusDescription', width: 80, suppressMenu: true},
    ];

    this.gridColumnsDefinition["sitProductSaleStatusIntervals"] = [
      { headerName: 'Od dnia', field: 'DateFrom', width: 100,},
      { headerName: 'Status', field: 'SaleStatus', width: 80,},
      { headerName: 'Opis', field: 'SaleStatusDescription', width: 150,},
    ];

    this.gridColumnsDefinition["sitProductSetHeaders"] = [
      { headerName: 'Od dnia', field: 'DateFrom', width: 100,},
    ];

    this.gridColumnsDefinition["sitProductSetPositions"] = [
      { headerName: 'Identyfikator', field: 'ProductIdent', width: 130,},
      { headerName: 'Nazwa', field: 'ProductName', width: 200,},
      { headerName: 'Ilość', field: 'Quantity', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, renderType: 'number', renderFormat: '1.2-2'}
    ];

  }

  activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getAttachmentUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getAttachmentUrl(activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }
}

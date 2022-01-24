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
      { headerName: 'Id', field: 'sitProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProductsG', width: 100, defaultVisibility: false },       
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'Vat', field: 'VATRatesIdent', filter: 'agTextColumnFilter', width: 60 },
      { headerName: 'PKWIU', field: 'PKWIU', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Waga kg', field: 'Weight', filter: 'agTextColumnFilter', type: 'numericColumn', width: 90, renderType: 'number', renderFormat: '1.3-3', 
        defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true },
      { headerName: 'B2B', field: 'IsB2B', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, defaultVisibility: false },
      { headerName: 'Ze stanem', field: 'ForStock', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, defaultVisibility: false },
      { headerName: 'Partie', field: 'UseBatch', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, defaultVisibility: false },
      { headerName: 'Status sprz.', field: 'SaleStatus', tooltipField: 'SaleStatusDescription', width: 80, suppressMenu: true},
      { headerName: 'Status', field: 'StatusValueName_Main', filter: 'agSetColumnFilter', width: 100, floatingFilter: false, 
        cellStyle: function(params) {
          if (params.value === 'W przygotowaniu') { return { color: 'violet', 'font-weight': 600 }; }
          else if (params.value === 'Zapowiedź') { return { color: 'orange', 'font-weight': 600 }; }
          else if (params.value === 'Nowość') { return { color: 'rgb(153, 0, 0)', 'font-weight': 600 }; }
          else if (params.value === 'Aktywna') { return { color: 'rgb(20, 152, 46)', 'font-weight': 600 }; }
          else if (params.value === 'Wyprzedaż') { return { color: 'rgb(11, 23, 255)', 'font-weight': 600 }; }
          else if (params.value === 'Wycofana') { return { color: 'black', 'font-weight': 600 }; }          
          else { return null; }
        }
      },       
    ];

    this.gridColumnsDefinition["sitProductSaleStatusIntervals"] = [
      { headerName: 'Id', field: 'sitProductSaleStatusIntervalsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProductSaleStatusIntervalsG', width: 100, defaultVisibility: false }, 
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

    this.gridColumnsDefinition["sitProductLock4DocumentsTypes"] = [
      { headerName: 'Id', field: 'sitProductLock4DocumentsTypesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProductLock4DocumentsTypesG', width: 100, defaultVisibility: false }, 
      { headerName: 'Od dnia', field: 'DateFrom', width: 100,},
      { headerName: 'Do dnia', field: 'DateFrom', width: 100,},
      { headerName: 'Dokument', field: 'DocumentIdent', width: 100,},
      { headerName: 'Opis', field: 'LockDescription', width: 300,},
    ];

    this.gridColumnsDefinition["sitProductWarehousesConfig"] = [
      { headerName: 'Id', field: 'sitProductWarehousesConfigId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProductWarehousesConfigG', width: 100, defaultVisibility: false }, 
      { headerName: 'Magazyn', field: 'WarehouseIdent', width: 100,},
      { headerName: 'Opis', field: 'WarehouseName', width: 200,},
      { headerName: 'Stan min', field: 'MinimumLevel', width: 90, renderType: 'number'},
    ];
  }

  activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getAttachmentUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getAttachmentUrl(activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }
}

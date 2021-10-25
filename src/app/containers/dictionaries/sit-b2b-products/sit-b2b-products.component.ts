import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-b2b-products',
  templateUrl: './sit-b2b-products.component.html',
  styleUrls: ['./sit-b2b-products.component.scss'],
  host: {class: 'router-flex'}
})
export class SitB2bProductsComponent extends SitDictBaseComponent {

  link;
  ean;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitB2BProducts"] = [
      { headerName: 'Id', field: 'sitProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProductsG', width: 100, defaultVisibility: false },      
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, defaultVisibility: false },
      { headerName: 'Wydawnictwo', field: 'GroupIdent', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'St. VAT', field: 'VATRatesIdent', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Tytuł', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Autor', field: 'Author', tooltipField: 'Author', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Forma', field: 'FormOfReleaseDesc', tooltipField: 'Author', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Stan', field: 'QuantityQuantityString', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Cena netto', field: 'NetPrice', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
      { headerName: 'Cena brutto', field: 'GrossPrice', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
      { headerName: 'Status', field: 'ValueName_Main', filter: 'agSetColumnFilter', width: 100, floatingFilter: false, 
        cellStyle: function(params) {
          if (params.value === 'Zapowiedź') { return { color: 'orange', 'font-weight': 600 }; }
          else if (params.value === 'Nowość') { return { color: 'rgb(153, 0, 0)', 'font-weight': 600 }; }
          else if (params.value === 'Aktywna') { return { color: 'rgb(20, 152, 46)', 'font-weight': 600 }; }
          else if (params.value === 'Wyprzedaż') { return { color: 'rgb(11, 23, 255)', 'font-weight': 600 }; }
          else { return null; }
        }
      },      
    ];

  }

  activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getAttachmentUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getAttachmentUrl(activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }
}

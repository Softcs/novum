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
      { 
        headerName: 'Status', field: 'ValueName_Main', filter: 'agSetColumnFilter', width: 67, floatingFilter: false, 
        suppressMenu: true,
        cellRenderer: (params:any) => {
          return (params.data.ValueIdent_Main ? '<span title="' + params.data.ValueName_Main + '">' + params.data.ValueIdent_Main + '</span>' : '')
        },
        cellClass: (params:any) => [(params.data.ValueIdent_Main ? params.data.ValueIdent_Main : '')],
      },      
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, defaultVisibility: false },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300, defaultVisibility: false },
      { headerName: 'Wydawnictwo', field: 'ProductsTypeDesc', filter: 'agTextColumnFilter', width: 80, suppressMenu: true },
      { headerName: 'Data premiery', field: 'PremiereDate', width: 100, renderType: 'date', suppressMenu: true },
      { headerName: 'Data wydania', field: 'RegisterDate', width: 100, renderType: 'date', suppressMenu: true, defaultVisibility: false  },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'ISBN', field: 'ISBN', filter: 'agTextColumnFilter', width: 120, defaultVisibility: false },
      { headerName: 'PKWIU', field: 'PKWIU', filter: 'agTextColumnFilter', width: 120, defaultVisibility: false },
      { headerName: 'St. VAT', field: 'VATRatesIdent', filter: 'agTextColumnFilter', width: 80, defaultVisibility: false  },
      { headerName: 'Tytuł', field: 'Title', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Autor', field: 'Author', tooltipField: 'Author', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Forma', field: 'FormOfReleaseDesc', tooltipField: 'Author', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Ilość stron', field: 'NumberOfPages', width: 90, suppressMenu: true, defaultVisibility: false},
      { headerName: 'Podst.', field: 'FormatBase', suppressMenu: true, type: 'numericColumn', width: 90, defaultVisibility: false},
      { headerName: 'Wys.', field: 'FormatHeight', suppressMenu: true, type: 'numericColumn', width: 90, defaultVisibility: false},
      { headerName: 'Stan', field: 'QuantityString', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Cena netto', field: 'NetPrice', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
      { headerName: 'Cena brutto', field: 'GrossPrice', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80, renderType: 'number' },
      { headerName: 'Opis na WWW', field: 'MarketingDesc4WWW', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300, defaultVisibility: false },     
    ];

  }

  activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getImageUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getImageUrl(activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }
}

import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-wms-products',
  templateUrl: './sit-wms-products.component.html',
  styleUrls: ['./sit-wms-products.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWmsProductsComponent extends SitDictBaseComponent {

  link;
  ean;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitProducts"] = [
      { headerName: 'Produkt / Towar',
        children: [
          { headerName: 'Id', field: 'sitProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, columnGroupShow: 'open', sortable: true, resizable: true},
          { headerName: 'GUID', field: 'sitProductsG', width: 100, columnGroupShow: 'open', sortable: true, resizable: true },       
          { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, sortable: true, resizable: true },
          { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, sortable: true, resizable: true },
          { headerName: 'Tytuł', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300, sortable: true, resizable: true },
          { headerName: 'Autor', field: 'Author', tooltipField: 'Author', filter: 'agTextColumnFilter', width: 200, columnGroupShow: 'open', sortable: true, resizable: true },      
          { headerName: 'JM', field: 'UnitIdent', filter: 'agTextColumnFilter', width: 60, columnGroupShow: 'open', sortable: true, resizable: true },
          { headerName: 'Vat', field: 'VATRateIdent', filter: 'agTextColumnFilter', width: 60, sortable: true, resizable: true},
          { headerName: 'PKWIU', field: 'PKWIU', filter: 'agTextColumnFilter', width: 100, columnGroupShow: 'open', sortable: true, resizable: true },
        ]
      },
      { headerName: 'Waga kg', field: 'Weight', filter: 'agTextColumnFilter', type: 'numericColumn', width: 90, renderType: 'number', renderFormat: '1.3-3' },
      { headerName: 'Wymiary mm',
        children: [
          { headerName: 'Podst.', field: 'FormatBase', filter: 'agTextColumnFilter', type: 'numericColumn', width: 90, sortable: true, resizable: true },
          { headerName: 'Wys.', field: 'FormatHeight', filter: 'agTextColumnFilter', type: 'numericColumn', width: 90 , sortable: true, resizable: true},
          { headerName: 'Grzbiet', field: 'BindingSpineThickness', filter: 'agTextColumnFilter', type: 'numericColumn', width: 90, sortable: true, resizable: true },
        ]
      },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, sortable: true, resizable: true },
      { headerName: 'Status',
        children: [
          { headerName: 'Produktu', field: 'StatusValueName_Main', filter: 'agSetColumnFilter', width: 100, floatingFilter: false, sortable: true, resizable: true,
            cellStyle: function(params) {
              if (params.value === 'Zapowiedź') { return { color: 'orange', 'font-weight': 600 }; }
              else if (params.value === 'Nowość') { return { color: 'rgb(153, 0, 0)', 'font-weight': 600 }; }
              else if (params.value === 'Aktywna') { return { color: 'rgb(20, 152, 46)', 'font-weight': 600 }; }
              else if (params.value === 'Wyprzedaż') { return { color: 'rgb(11, 23, 255)', 'font-weight': 600 }; }
              else if (params.value === 'Wycofana') { return { color: 'black', 'font-weight': 600 }; }
              else { return null; }
            }
          },     
          { headerName: 'WMS', field: 'StatusValueName_WMS', filter: 'agSetColumnFilter', width: 100, floatingFilter: false, sortable: true, resizable: true,
            cellStyle: function(params) {
              if (params.value === 'Do wysłania') { return { color: 'green', 'font-weight': 600 }; }
              else if (params.value === 'Wysłana') { return { color: 'blue', 'font-weight': 600 }; }
              else { return null; }
            }
          },          
        ]
    },
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
      ? this.urlService.getImageUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getImageUrl(activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }
}

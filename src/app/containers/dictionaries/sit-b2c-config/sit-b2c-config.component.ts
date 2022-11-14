import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-b2c-config',
  templateUrl: './sit-b2c-config.component.html',
  styleUrls: ['./sit-b2c-config.component.scss'],
  host: {class: 'router-flex'}
})
export class SitB2cConfigComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitB2CConfig"] = [
      { headerName: 'Id', field: 'sitB2CConfigId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CConfigG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'B2CConfigIdent', width: 200 },
      { headerName: 'Nazwa', field: 'B2CConfigName', width: 200 },
    ];

    this.gridColumnsDefinition["sitB2CProducts"] = [
      { headerName: 'sitB2CProductsId', field: 'sitAppUserCompaniesId', type: 'numericColumn', filter: 'agNumberColumnFilter', flex: 1, defaultVisibility: false },
      { headerName: 'sitB2CProductsG', field: 'sitAppUserCompaniesG', flex: 1, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status prod', field: 'ProductStatusValueName_Main', filter: 'agSetColumnFilter', width: 140, floatingFilter: false, 
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
      { headerName: 'Prod. akt.', field: 'IsActive_Product', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered" },
      { headerName: 'B2B', field: 'IsB2B', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered", defaultVisibility: true },
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 80, suppressMenu: true},
    ];

   }
}


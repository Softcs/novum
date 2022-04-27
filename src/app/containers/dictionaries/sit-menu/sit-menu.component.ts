import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';


@Component({
  selector: 'sit-menu',
  templateUrl: './sit-menu.component.html',
  styleUrls: ['./sit-menu.component.scss'],
  host: {class: 'router-flex'}
})
export class SitMenuComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {

    this.gridColumnsDefinition["sitMenu"] = [
      { headerName: 'Symbol', field: 'Symbol', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'Caption', filter: 'agTextColumnFilter' },
    ];
    this.gridColumnsDefinition["sitMenuItems"] = [
      { headerName: 'Id', field: 'sitMenuItemsId', filter: 'agTextColumnFilter', width: 60, type: 'numericColumn', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitMenuItemsG', filter: 'agTextColumnFilter', width: 60, defaultVisibility: false },
      { headerName: 'Grupa', field: 'ParentCaption', filter: 'agTextColumnFilter', width: 200, floatingFilter: true, sort: "asc" },
      { headerName: 'Kolejność', field: 'OrdId', filter: 'agTextColumnFilter', width: 80, type: 'numericColumn', sort: "asc" },
      { headerName: 'Nazwa', field: 'Caption', filter: 'agTextColumnFilter' },
      { headerName: 'Rodzaj', field: 'Kind', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Link', field: 'Link', filter: 'agTextColumnFilter' },
      { headerName: 'Ikona', field: 'Icon', filter: 'agTextColumnFilter' },
      { headerName: 'Ścieżka', field: 'MenuPath', filter: 'agTextColumnFilter', defaultVisibility: false },
    ];
    this.gridColumnsDefinition["sitAppUsers"] = [
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter' },
      { headerName: 'Imię', field: 'Name', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwisko', field: 'SurName', filter: 'agTextColumnFilter' },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agTextColumnFilter', renderType: "checkbox" },
    ];

   }

}

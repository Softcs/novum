import { Component, OnInit, ViewChild, ContentChild, Input, ComponentFactoryResolver } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
//import { AllModules } from '@ag-grid-enterprise/all-modules';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { GridService } from '@app/_services/grid.service';
@Component({
  selector: 'sit-menu',
  templateUrl: './sit-menu.component.html',
  styleUrls: ['./sit-menu.component.scss'],
  host: {class: 'router-flex'}
})
export class SitMenuComponent implements OnInit {
  @ViewChild(SitDataSetContainerComponent, { static: true }) dataSourceContainer: SitDataSetContainerComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  popupParent;
  frameworkComponents;
  columnDefs;
  columnDefsMenuItems;
  columnDefsAppUsers;

  constructor(
    private gridService: GridService
  ) {
    this.popupParent = document.querySelector('body');

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Symbol', field: 'Symbol', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'Caption', filter: 'agTextColumnFilter' },
    ];
    this.columnDefsMenuItems = [
      { headerName: 'Id', field: 'sitMenuItemsId', filter: 'agTextColumnFilter', width: 60, type: 'numericColumn' },
      { headerName: 'GUID', field: 'sitMenuItemsG', filter: 'agTextColumnFilter', width: 60, },
      { headerName: 'Grupa', field: 'ParentCaption', filter: 'agTextColumnFilter', width: 100, floatingFilter: true, sort: "asc" },
      { headerName: 'Kolejność', field: 'OrdId', filter: 'agTextColumnFilter', width: 80, type: 'numericColumn', sort: "asc" },
      { headerName: 'Nazwa', field: 'Caption', filter: 'agTextColumnFilter' },
      { headerName: 'Rodzaj', field: 'Kind', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Link', field: 'Link', filter: 'agTextColumnFilter' },
      { headerName: 'Ikona', field: 'Icon', filter: 'agTextColumnFilter' },
    ];
    this.columnDefsAppUsers = [
      { headerName: 'Login', field: 'UserLogin', filter: 'agTextColumnFilter' },
      { headerName: 'Imię', field: 'Name', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwisko', field: 'SurName', filter: 'agTextColumnFilter' },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agTextColumnFilter', cellRenderer: 'gridCheckboxRenderer' },
    ];

   }

  ngOnInit(): void {

  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitMenuItemsG')) {
     params.columnApi.setColumnsVisible(['sitMenuItemsId','sitMenuItemsG'],false)
    }
  }


}

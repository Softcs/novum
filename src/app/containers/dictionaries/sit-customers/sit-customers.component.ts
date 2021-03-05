import { Component, OnInit, ViewChild, LOCALE_ID, ViewChildren, QueryList, Inject } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { formatNumber } from '@angular/common';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-sit-customers',
  templateUrl: './sit-customers.component.html',
  styleUrls: ['./sit-customers.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomersComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;

  popupParent;
  frameworkComponents;
  columnDefs;
  columnDefsHRDepartments;
  columnDefsHRParams4Invoicing

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'ID', field: 'sitCustomersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100 },
      { headerName: 'GUID', field: 'sitCustomersG', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Identyfikator', field: 'CustIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwa', field: 'CustName', tooltipField: 'CustName', width: 300 },
      { headerName: 'NIP', field: 'VATId', width: 100 },
      { headerName: 'Miasto', field: 'City', width: 100 },
      { headerName: 'Kraj', field: 'CountrySymbol', width: 80 },
      { headerName: 'Status WMS', field: 'Status_WMS', width: 100 },
    ];
    this.columnDefsHRDepartments = [
      { headerName: 'Identyfikator', field: 'HRDepartmentIdent', width: 150 },
      { headerName: 'Nazwa', field: 'HRDepartmentName', width: 200 },
    ];
    this.columnDefsHRParams4Invoicing = [
      { headerName: 'Od dnia', field: 'DateFrom', filter: 'agTextColumnFilter', autoHeight: true, width: 100, sort: 'desc',suppressMenu: true,
        cellRenderer: function(params) {
          return formatDate(params.value, 'yyyy-MM-dd', locale)
        }
      },
      { headerName: 'Składnik', field: 'PayrollComponentName', width: 110, sort: 'asc',suppressMenu: true, },
      { headerName: 'Rodzaj', field: 'MarkupKindName', width: 100,suppressMenu: true },
      { headerName: 'Próg', field: 'Threshold', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, sort: 'asc',suppressMenu: true},
      { headerName: 'Wartość', field: 'Value', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,suppressMenu: true,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'ZUS', field: 'ZUS', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 60,
        cellRenderer: 'gridCheckboxRenderer',
      },
      { headerName: 'Rekr. klienta', field: 'CustRecr', filter: 'agSetColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100,
        cellRenderer: 'gridCheckboxRenderer',
      },
    ];
   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitCustomersId')) {
      params.columnApi.setColumnsVisible(['sitCustomersId','sitCustomersG'], false);
    }
  }

}

import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
// import { AllModules } from '@ag-grid-enterprise/all-modules';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'app-sit-jpk-vat',
  templateUrl: './sit-jpk-vat.component.html',
  styleUrls: ['./sit-jpk-vat.component.scss']
})
export class SitJPKVatComponent implements OnInit {
  @ViewChild(SitDataSetContainerComponent, { static: true }) dataSourceContainer: SitDataSetContainerComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  sitJPKVATZakupSelected = [];
  sitJPKVATSprzedazSelected = [];
  sitJPKVATZakupCustSelected = [];
  sitJPKVATSprzedazCustSelected = [];
  sitJPKVATZakupSumSelected = [];
  sitJPKVATSprzedazSumSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  currentUser: User;

  //modules: any[] = AllModules;
  defaultColDef;
  rowSelection;
  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;
  pinnedBottomRowData;

  gridApiZakupCust;
  gridColumnApiZakupCust;
  columnDefsZakupCust;

  gridApiZakup;
  gridColumnApiZakup;
  columnDefsZakup;

  gridApiSprzedazSum;
  gridColumnApiSprzedazSum;
  columnDefsSprzedazSum;

  gridApiSprzedazCust;
  gridColumnApiSprzedazCust;
  columnDefsSprzedazCust;

  gridApiSprzedaz;
  gridColumnApiSprzedaz;
  columnDefsSprzedaz;

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      autoHeight: true,
    };

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Pole', field: 'Field', sortable: true, filter: 'agTextColumnFilter',  width: 100 },
      { headerName: 'Typ', field: 'Typ', sortable: true, filter: 'agTextColumnFilter',  width: 80 },
      { headerName: 'Opis', field: 'Desc', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Netto', field: 'Netto', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
    ];

    this.columnDefsZakupCust = [
      { headerName: 'NIP', field: 'NR_ID_WYSTAWCY', sortable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'NAZWA_WYSTAWCY', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Status VAT', field: 'StatusVat', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Data spr.', field: 'requestDateTime', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Id spr.', field: 'requestId', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
    ];

    this.columnDefsZakup = [
      { headerName: 'Id', field: 'Id', sortable: true, filter: 'agTextColumnFilter', width: 80, type: 'numerciColumn' },
      { headerName: 'RD', field: 'RD', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Gr.klas.', field: 'GrupaKlas', sortable: true, filter: 'agTextColumnFilter', type: 'numerciColumn', width: 80 },
      { headerName: 'St.Vat', field: 'SymbolSV', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn', width: 80 },
      { headerName: 'Netto', field: 'Netto', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Data', field: 'Data', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data Vat', field: 'DataVat', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data zak.', field: 'DATA_ZAKUPU', sortable: true, filter: 'agTextColumnFilter'},
      { headerName: 'Data wpł,', field: 'DATA_WPLYWU', sortable: true, filter: 'agTextColumnFilter'},
      { headerName: 'Nazwa', field: 'NAZWA_WYSTAWCY', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Adres', field: 'ADRES_WYSTAWCY', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'NIP', field: 'NR_ID_WYSTAWCY', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Nr fakt.', field: 'NumerFa', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Typ', field: 'TYP', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'LogoP', field: 'LogoP', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Logo', field: 'Logo', sortable: true, filter: 'agTextColumnFilter' },
    ];

    this.columnDefsSprzedazSum = [
      { headerName: 'Pole', field: 'Field', sortable: true, filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Typ', field: 'Typ', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Opis', field: 'Desc', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Netto', field: 'Netto', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
    ];

    this.columnDefsSprzedazCust = [
      { headerName: 'NIP', field: 'NIP', sortable: true, filter: 'agTextColumnFilter', flex: 1 },
      { headerName: 'Nazwa', field: 'NAZWA_NABYWCY', sortable: true, filter: 'agTextColumnFilter', flex: 2},
    ];

    this.columnDefsSprzedaz = [
      { headerName: 'Id', field: 'Id', sortable: true, filter: 'agTextColumnFilter', width: 80, type: 'numerciColumn' },
      { headerName: 'RD', field: 'RD', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'ND', field: 'ND', sortable: true, filter: 'agTextColumnFilter', width: 80, type: 'numerciColumn' },
      { headerName: 'Numer', field: 'Numer', sortable: true, filter: 'agTextColumnFilter',},
      { headerName: 'St.Vat', field: 'SymbolSV', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn', width: 80 },
      { headerName: 'Netto', field: 'Netto', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Data', field: 'Data', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data Vat', field: 'DataVat', sortable: true, filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data sprz.', field: 'DATA_ZADATA_SPRZEDAZYKUPU', sortable: true, filter: 'agTextColumnFilter'},
      { headerName: 'Data wyst,', field: 'DATA_WYSTAWIENIA', sortable: true, filter: 'agTextColumnFilter'},
      { headerName: 'Nazwa', field: 'NAZWA_NABYWCY', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Adres', field: 'ADRES_NABYWCY', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'NIP', field: 'NIP', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Nr fakt.', field: 'NumerFa', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Typ', field: 'TYP', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'LogoP', field: 'LogoP', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Logo', field: 'Logo', sortable: true, filter: 'agTextColumnFilter' },
    ];

  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onGridReadyZakupCust(params) {
    this.gridApiZakupCust = params.api;
    this.gridColumnApiZakupCust = params.columnApi;
  }
  onGridReadyZakup(params) {
    this.gridApiZakup = params.api;
    this.gridColumnApiZakup = params.columnApi;
  }
  onGridReadySprzedazSum(params) {
    this.gridApiSprzedazSum = params.api;
    this.gridColumnApiSprzedazSum = params.columnApi;
  }
  onGridReadySprzedazCust(params) {
    this.gridApiSprzedazCust = params.api;
    this.gridColumnApiSprzedazCust = params.columnApi;
  }
  onGridReadySprzedaz(params) {
    this.gridApiSprzedaz = params.api;
    this.gridColumnApiSprzedaz = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJPKVATZakupSum');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedZakupCust(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJPKVATZakupCust');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedZakup(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJPKVATZakup');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedSprzedazSum(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJPKVATSprzedazSum');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedSprzedazCust(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJPKVATSprzedazCust');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }
  onRowClickedSprzedaz(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitJPKVATSprzedaz');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }


  onFirstDataRendered(params) {
    const allColumnIds = [];

    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiZakupCust.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiZakup.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiSprzedazSum.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiSprzedazCust.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApiSprzedaz.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });

  }

  calcZakupSum(name) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper("sitJPKVATZakupSum");
    return dataSourceResponseWrapper.rows.map(row => row[name] != null ? row[name] : 0).reduce((s,v) =>s += v,0);
    }

  calcSprzedazSum(name) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper("sitJPKVATSprzedazSum");
    return dataSourceResponseWrapper.rows.map(row => row[name] != null ? row[name] : 0).reduce((s,v) =>s += v,0);
    }

    noop() { return null; }

  onChange(e) {
    const dataSourceResponseWrapper: DataSetWrapper =
      this.dictContainer.DataSetManager.getDateSourceWrapper("sitProcGetJPKData");
    dataSourceResponseWrapper.activeRow[e.srcElement.id] = e.srcElement.value;
  }

  tabChanged(event) {
    window.dispatchEvent(new Event('resize'));
  }
}

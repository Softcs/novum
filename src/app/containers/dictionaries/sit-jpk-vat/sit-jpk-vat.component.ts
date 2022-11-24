import { Component } from '@angular/core';
import { DataSetWrapper } from '@app/_models';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';


@Component({
  selector: 'app-sit-jpk-vat',
  templateUrl: './sit-jpk-vat.component.html',
  styleUrls: ['./sit-jpk-vat.component.scss'],
  host: {class: 'sit-jpk-vat-component'}
})
export class SitJPKVatComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {

    this.gridColumnsDefinition["sitJPKVATZakupSum"] = [
      { headerName: 'Pole', field: 'Field', filter: 'agTextColumnFilter',  width: 100 },
      { headerName: 'Typ', field: 'Typ', filter: 'agTextColumnFilter',  width: 80 },
      { headerName: 'Opis', field: 'Desc', filter: 'agTextColumnFilter' },
      { headerName: 'Netto', field: 'Netto', filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', filter: 'agTextColumnFilter', type: 'numericColumn' },
    ];

    this.gridColumnsDefinition["sitJPKVATZakupCust"] = [
      { headerName: 'NIP', field: 'NR_ID_WYSTAWCY', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Nazwa', field: 'NAZWA_WYSTAWCY', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Status VAT', field: 'StatusVat', filter: 'agTextColumnFilter' },
      { headerName: 'Data spr.', field: 'requestDateTime', filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Id spr.', field: 'requestId', filter: 'agTextColumnFilter', type: 'numericColumn' },
    ];

    this.gridColumnsDefinition["sitJPKVATZakup"] = [
      { headerName: 'Id', field: 'Id', filter: 'agTextColumnFilter', width: 80, type: 'numericColumn' },
      { headerName: 'RD', field: 'RD', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Gr.klas.', field: 'GrupaKlas', filter: 'agTextColumnFilter', type: 'numericColumn', width: 80 },
      { headerName: 'St.Vat', field: 'SymbolSV', filter: 'agTextColumnFilter', type: 'numericColumn', width: 80 },
      { headerName: 'Netto', field: 'Netto', filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Data', field: 'Data', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data Vat', field: 'DataVat', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data zak.', field: 'DATA_ZAKUPU', filter: 'agTextColumnFilter'},
      { headerName: 'Data wpł,', field: 'DATA_WPLYWU', filter: 'agTextColumnFilter'},
      { headerName: 'Nazwa', field: 'NAZWA_WYSTAWCY', filter: 'agTextColumnFilter' },
      { headerName: 'Adres', field: 'ADRES_WYSTAWCY', filter: 'agTextColumnFilter' },
      { headerName: 'NIP', field: 'NR_ID_WYSTAWCY', filter: 'agTextColumnFilter' },
      { headerName: 'Nr fakt.', field: 'NumerFa', filter: 'agTextColumnFilter' },
      { headerName: 'Typ', field: 'TYP', filter: 'agTextColumnFilter' },
      { headerName: 'LogoP', field: 'LogoP', filter: 'agTextColumnFilter' },
      { headerName: 'Logo', field: 'Logo', filter: 'agTextColumnFilter' },
    ];

    this.gridColumnsDefinition["sitJPKVATSprzedazSum"] = [
      { headerName: 'Pole', field: 'Field', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Typ', field: 'Typ', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Opis', field: 'Desc', filter: 'agTextColumnFilter' },
      { headerName: 'Netto', field: 'Netto', filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', filter: 'agTextColumnFilter', type: 'numericColumn' },
    ];

    this.gridColumnsDefinition["sitJPKVATSprzedazCust"] = [
      { headerName: 'NIP', field: 'NIP', filter: 'agTextColumnFilter', flex: 1 },
      { headerName: 'Nazwa', field: 'NAZWA_NABYWCY', filter: 'agTextColumnFilter', flex: 2},
    ];

    this.gridColumnsDefinition["sitJPKVATSprzedaz"] = [
      { headerName: 'Id', field: 'Id', filter: 'agTextColumnFilter', width: 80, type: 'numericColumn' },
      { headerName: 'RD', field: 'RD', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'ND', field: 'ND', filter: 'agTextColumnFilter', width: 80, type: 'numericColumn' },
      { headerName: 'Numer', field: 'Numer', filter: 'agTextColumnFilter',},
      { headerName: 'St.Vat', field: 'SymbolSV', filter: 'agTextColumnFilter', type: 'numericColumn', width: 80 },
      { headerName: 'Netto', field: 'Netto', filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Vat', field: 'Vat', filter: 'agTextColumnFilter', type: 'numericColumn' },
      { headerName: 'Data', field: 'Data', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data Vat', field: 'DataVat', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Data sprz.', field: 'DATA_ZADATA_SPRZEDAZYKUPU', filter: 'agTextColumnFilter'},
      { headerName: 'Data wyst,', field: 'DATA_WYSTAWIENIA', filter: 'agTextColumnFilter'},
      { headerName: 'Nazwa', field: 'NAZWA_NABYWCY', filter: 'agTextColumnFilter' },
      { headerName: 'Adres', field: 'ADRES_NABYWCY', filter: 'agTextColumnFilter' },
      { headerName: 'NIP', field: 'NIP', filter: 'agTextColumnFilter' },
      { headerName: 'Nr fakt.', field: 'NumerFa', filter: 'agTextColumnFilter' },
      { headerName: 'Typ', field: 'TYP', filter: 'agTextColumnFilter' },
      { headerName: 'LogoP', field: 'LogoP', filter: 'agTextColumnFilter' },
      { headerName: 'Logo', field: 'Logo', filter: 'agTextColumnFilter' },
    ];

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

import { Component, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-fiscal-years',
  templateUrl: './sit-fiscal-years.component.html',
  styleUrls: ['./sit-fiscal-years.component.scss'],
  host: {class: 'router-flex sit-fiscal-years-component'},
  encapsulation : ViewEncapsulation.None,

})
export class SitFiscalYearsComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitFiscalYears"] = [
      { headerName: 'Id', field: 'sitFiscalYearsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitFiscalYearsG', width: 100, defaultVisibility: false},
      { headerName: 'Rok', field: 'FiscalYear', width: 60, },
      { headerName: 'Opis', field: 'FiscalYearDesc', sortable: true, filter: 'agTextColumnFilter', suppressMenu: true, width: 100},
      { headerName: 'Od', field: 'DateFrom', filter: 'agDateColumnFilter',width: 100, renderType: "date", renderFormat: "yyyy-MM-dd", floatingFilter: false  },
      { headerName: 'Do', field: 'DateTo', filter: 'agDateColumnFilter',width: 100, renderType: "date",  renderFormat: "yyyy-MM-dd", floatingFilter: false  },

    ];
    
    this.gridColumnsDefinition["sitFiscalPeriods"] = [
      { headerName: 'Id', field: 'sitFiscalPeriodsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitFiscalPeriodsG', width: 100, defaultVisibility: false},
      { headerName: 'Okres', field: 'FiscalPeriod', type: 'numericColumn', width: 50, },
      { headerName: 'Opis', field: 'FiscalPeriodDesc', sortable: true, filter: 'agTextColumnFilter', suppressMenu: true, width: 200},
      { headerName: 'Od', field: 'DateFrom', filter: 'agDateColumnFilter',width: 100, renderType: "date", renderFormat: "yyyy-MM-dd", floatingFilter: false  },
      { headerName: 'Do', field: 'DateTo', filter: 'agDateColumnFilter',width: 100, renderType: "date",  renderFormat: "yyyy-MM-dd", floatingFilter: false  },
      { headerName: 'Rodzaj', field: 'KindDesc', sortable: true, filter: 'agTextColumnFilter', suppressMenu: true, width: 120},

    ];
  };
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-general-ledger',
  templateUrl: './sit-general-ledger.component.html',
  styleUrls: ['./sit-general-ledger.component.scss'],
  host: {class: 'router-flex sit-general-ledger-component'},
  encapsulation : ViewEncapsulation.None,

})
export class SitGeneralLedgerComponent extends SitDictBaseComponent {
  groupDefaultExpanded;
  getDataPath;
  autoGroupColumnDef;

  public prepareColumnsDefinitnion(){
    this.autoGroupColumnDef = {
      headerName: 'Konto',
      minWidth: 300,
      cellRendererParams: { suppressCount: true },
    };
    this.groupDefaultExpanded = 0;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

    this.gridColumnsDefinition["sitGeneralLedger"] = [
      { headerName: 'Id', field: 'sitGeneralLedgerId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false},
      { headerName: 'GUID', field: 'sitGeneralLedgerG', width: 100, defaultVisibility: false},
      { headerName: 'Opis', field: 'AccountDesc',width: 300, },
      { headerName: 'C', headerTooltip: 'Czynne', field: 'Active', suppressMenu: true, width: 40,renderType: "checkbox", cellClass: "grid-cell-centered"  },
      { headerName: 'B', headerTooltip: 'Bilansowe', field: 'IsBalance',  suppressMenu: true, width: 40,renderType: "checkbox", cellClass: "grid-cell-centered"  },
      { headerName: 'R', headerTooltip: 'Rozrachunkowe', field: 'IsClearing', suppressMenu: true, width: 40,renderType: "checkbox", cellClass: "grid-cell-centered"  },
      { headerName: 'Kontrahent', field: 'CustName',width: 300, },
    ];
  };
}

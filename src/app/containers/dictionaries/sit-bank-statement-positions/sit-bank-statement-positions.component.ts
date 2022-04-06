import { Component} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-bank-statement-positions',
  templateUrl: './sit-bank-statement-positions.component.html',
  styleUrls: ['./sit-bank-statement-positions.component.scss'],
  host: {class: 'router-flex'}
})
export class SitBankStatementPositionsComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitBankStatementPositions"] = [
      { headerName: 'ID', field: 'sitBankStatementPositionsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitBankStatementPositionsG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'BankStatementIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Data wyciągu', field: 'BankStatementDate', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Kontrahent', field: 'CustIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'CustName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Wpłata', field: 'AmountIn', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', agr: 'sum' },
      { headerName: 'Wypłata', field: 'AmountOut', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', agr: 'sum' },
      { headerName: 'Opis pozycji', field: 'PositionDescription', filter: 'agTextColumnFilter', width: 400 },
    ];
   }
}

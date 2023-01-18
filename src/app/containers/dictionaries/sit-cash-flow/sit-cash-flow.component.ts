import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-cash-flow',
  templateUrl: './sit-cash-flow.component.html',
  styleUrls: ['./sit-cash-flow.component.scss'],
  host: {class: 'router-flex sit-cash-flow-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitCashFlowComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitCashFlowIncome"] = [
      { headerName: 'Tydzień 1',
        children: [
          { headerName: 'Od do', field: 'W1Days', width: "70", suppressMenu: "true",
            cellStyle: {'text-align': 'center'}
          },
          { headerName: 'Brutto', field: 'W1Gross', type: 'numericColumn', renderType:'number', width: "100", agr: 'sum', sortable: true, resizable: true,},
        ]
      },
      { headerName: 'Tydzień 2',
        children: [
          { headerName: 'Od do', field: 'W2Days', width: "70", suppressMenu: "true",
            cellStyle: {'text-align': 'center'}
          },
          { headerName: 'Brutto', field: 'W2Gross', type: 'numericColumn', renderType:'number', width: "100", agr: 'sum', sortable: true, resizable: true,},
        ]
      },
      { headerName: 'Tydzień 3',
        children: [
          { headerName: 'Od do', field: 'W3Days', width: "70", suppressMenu: "true",
            cellStyle: {'text-align': 'center'}
          },
          { headerName: 'Brutto', field: 'W3Gross', type: 'numericColumn', renderType:'number', width: "100", agr: 'sum', sortable: true, resizable: true,},
        ]
      },
      { headerName: 'Tydzień 4',
        children: [
          { headerName: 'Od do', field: 'W4Days', width: "70", suppressMenu: "true",
            cellStyle: {'text-align': 'center'}
          },
          { headerName: 'Brutto', field: 'W4Gross', type: 'numericColumn', renderType:'number', width: "100", agr: 'sum', sortable: true, resizable: true,},
        ]
      },
      { headerName: 'Tydzień 5',
        children: [
          { headerName: 'Od do', field: 'W5Days', width: "70", suppressMenu: "true",
            cellStyle: {'text-align': 'center'}
          },
          { headerName: 'Brutto', field: 'W5Gross', type: 'numericColumn', renderType:'number', width: "100", agr: 'sum', sortable: true, resizable: true,},
        ]
      },                        
      // { headerName: 'sitAttachmentsId', field: 'sitAttachmentsId', defaultVisibility: false},
      // { headerName: 'Data dodania', field: 'InsertDate', width: 120, renderType: 'date', renderFormat: "yyyy-MM-dd HH:mm" },
      // { headerName: 'Nazwa pliku', field: 'FileName', width: 250 },
      // { headerName: 'Opis', field: 'AttachmentDesc', width: 250 }
    ];  
  }
}

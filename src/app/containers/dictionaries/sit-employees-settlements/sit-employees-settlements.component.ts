import { Component, OnInit, ViewChild, ViewChildren, QueryList,LOCALE_ID, Inject } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-employees-settlements',
  templateUrl: './sit-employees-settlements.component.html',
  styleUrls: ['./sit-employees-settlements.component.scss'],
  host: {class: 'router-flex'}
})
export class SitEmployeesSettlementsComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition['sitEmployeesSettlements'] = [
      { headerName: 'Pracownik',
        children: [
          { headerName: 'Nazwisko', field: 'EmployeeName', tooltipField: 'EmployeeName', sort: 'asc', width: 180, pinned: 'left',
            checkboxSelection: true, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,
            cellClass: ['font12','textFormat']
          },
          { headerName: 'Ident.', field: 'EmployeeIdent', tooltipField: 'EmployeeIdent', width: 100, pinned: 'left',
            cellClass: ['font12','textFormat']
          },
        ]
      },
      { headerName: 'Okres', field: 'WorkPeriod',  width: 90,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Nr.listy', field: 'PayrollNo', tooltipField: 'PayrollNo', width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Rachunek', field: 'ReceiptNo', tooltipField: 'ReceiptNo',  width: 90,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Miejsce pracy', field: 'HRWorkPlaceName', tooltipField: 'HRWorkPlaceName',  width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Opis prac', field: 'WorkDesc', tooltipField: 'WorkDesc',  width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'MPK', field: 'CustomerCostCenterIdent', tooltipField: 'CustomerCostCenterIdent',  width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Statusy',
        children: [
          { headerName: 'ZUS', field: 'StatusZUSDesc',  width: 60, suppressMenu: true,
            cellClass: ['font12','textFormat']
          },
          { headerName: 'PPK', field: 'StatusPPK',  width: 60, renderType: 'checkbox', suppressMenu: true,
            cellClass: ['font12','textFormat']
          },
        ]
      },
      { headerName: 'Wynagrodzenie',
        children: [
          { headerName: 'Brutto', field: 'Gross', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, agr: 'sum',
            renderType: 'number',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','numberFormat2Dec','pinkBackground'],
            // pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Podstawa', field: 'Base', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 95, agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Premie', field: 'Bonus', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Dodatki', field: 'Additions', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Potr.', field: 'Deduction', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80, agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
        ]
      },
      { headerName: 'ZUS i PPK',
        children: [
          { headerName: 'ZUS', field: 'ZUSFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80, suppressMenu: true, agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'ZUS podst.', field: 'ZUSBase', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, columnGroupShow: "open", agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'ZUS prem.', field: 'ZUSBonus', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, columnGroupShow: "open", agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'PPK', field: 'PPK', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70,suppressMenu: true, agr: 'sum',
            renderType: 'number',
            cellClass: ['font12','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
        ]
      },
      { headerName: 'Koszt pracy', field: 'Cost',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellStyle: function(params) { return {backgroundColor: '#fcf59f'} },
        cellClass: ['font12','yellowBackground','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Dodatki kli.', field: 'AdditionsCust', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Narzut', field: 'Markup',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Koszt - klient', field: 'CustCost',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
        cellClass: ['font12','blueBackground','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },

    ];

    this.gridColumnsDefinition['sitEmployeesSettlementsComp'] = [
      { headerName: 'Lp', field: 'OrdId', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60, sort: 'asc',suppressMenu: true},
      { headerName: 'Składnik', field: 'PayrollComponentDesc', tooltipField:'PayrollComponentDesc',  width: 270},
      { headerName: 'Wartość', field: 'Value', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
      { headerName: 'Identyfikator', field: 'PayrollComponentIdent',  width: 130},
    ];

    this.gridColumnsDefinition['sitEmployeesSettlementsSumByPayroll'] = [
      { headerName: 'Rok', field: 'CostYear', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60,suppressMenu: true},
      { headerName: 'Miesiąc', field: 'CostMonth', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60,suppressMenu: true},
      { headerName: 'Dział', field: 'HRDepartmentIdent', tooltipField: 'HRDepartmentName', filter: 'agNumberColumnFilter', width: 120, sort: 'asc'},
      { headerName: 'Nr listy', field: 'PayrollNo', tooltipField:'PayrollNo',  width: 150, sort: 'asc'},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
      { headerName: 'Emerytalna', field: 'ZUSEmerFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
      { headerName: 'Rentowa', field: 'ZUSRentFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
      { headerName: 'Wypadkowa', field: 'ZUSWypFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
      { headerName: 'FP', field: 'ZUSFP', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
      { headerName: 'FGŚP', field: 'ZUSFGSP', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
      { headerName: 'PPK', field: 'PPKFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: 'number',
      },
    ];
  }

  refreshAfter(dataSourceManager) {}


}

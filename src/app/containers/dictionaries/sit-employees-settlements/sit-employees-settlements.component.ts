import { Component, OnInit, ViewChild, ViewChildren, QueryList,LOCALE_ID, Inject } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { DataSetWrapper } from '@app/_models';

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
            cellClass: ['font11','textFormat']
          },
          { headerName: 'Ident.', field: 'EmployeeIdent', tooltipField: 'EmployeeIdent', width: 100, pinned: 'left',
            cellClass: ['font11','textFormat']
          },
        ]
      },
      { headerName: 'Cudzoziemiec', field: 'Foreigner', filter: 'agNumberColumnFilter', renderType: 'checkbox', width: 100, suppressMenu: true },
      { headerName: 'Okres', field: 'WorkPeriod',  width: 90,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Nr.listy', field: 'PayrollNo', tooltipField: 'PayrollNo', width: 100,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Rachunek', field: 'ReceiptNo', tooltipField: 'ReceiptNo',  width: 90,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Miejsce pracy', field: 'HRWorkPlaceName', tooltipField: 'HRWorkPlaceName',  width: 100,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Opis prac', field: 'WorkDesc', tooltipField: 'WorkDesc',  width: 100,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'MPK', field: 'CustomerCostCenterIdent', tooltipField: 'CustomerCostCenterIdent',  width: 100,
        cellClass: ['font11','textFormat']
      },
      { headerName: 'Statusy',
        children: [
          { headerName: 'ZUS', field: 'StatusZUSDesc',  width: 60, suppressMenu: true,
            cellClass: ['font11','textFormat']
          },
          { headerName: 'PPK', field: 'StatusPPK',  width: 60, renderType: 'checkbox', suppressMenu: true,
            cellClass: ['font11','textFormat']
          },
        ]
      },
      { headerName: 'Wynagrodzenie',
        children: [
          { headerName: 'Brutto', field: 'Gross', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 90, agr: 'sum',
            renderType: 'number',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font11','numberFormat2Dec','pinkBackground'],
            // pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Podstawa', field: 'Base', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 95, agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Premie', field: 'Bonus', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Dodatki', field: 'Additions', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'Potr.', field: 'Deduction', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80, agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
        ]
      },
      { headerName: 'ZUS i PPK',
        children: [
          { headerName: 'ZUS', field: 'ZUSFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80, suppressMenu: true, agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'ZUS podst.', field: 'ZUSBase', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, columnGroupShow: "open", agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'ZUS prem.', field: 'ZUSBonus', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, columnGroupShow: "open", agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
          { headerName: 'PPK', field: 'PPK', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70,suppressMenu: true, agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
            pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
          },
        ]
      },
      { headerName: 'Koszt pracy', field: 'Cost',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellStyle: function(params) { return {backgroundColor: '#fcf59f'} },
        cellClass: ['font11','yellowBackground','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Dodatki kli.', field: 'AdditionsCust', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellClass: ['font11','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Godziny',
        children: [
          { headerName: 'Suma', field: 'H_Sum', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Godz.1', field: 'H01', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, agr: 'sum', columnGroupShow: "open",
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'St.kli. 1', field: 'CustRate01', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, columnGroupShow: "open",
            renderType: 'number',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font11','numberFormat2Dec','greenBackground'],
          },
          { headerName: 'Godz.2', field: 'H02', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, agr: 'sum',columnGroupShow: "open",
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'St.kli. 2', field: 'CustRate02', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, columnGroupShow: "open",
            renderType: 'number',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font11','numberFormat2Dec','greenBackground'],
          },
          { headerName: 'Godz.3', field: 'H03', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, agr: 'sum',columnGroupShow: "open",
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'St.kli. 3', field: 'CustRate03', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, columnGroupShow: "open",
            renderType: 'number',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font11','numberFormat2Dec','greenBackground'],
          },
          { headerName: 'Godz.4', field: 'H04', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, agr: 'sum',columnGroupShow: "open",
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'St.kli. 4', field: 'CustRate04', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, columnGroupShow: "open",
            renderType: 'number',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font11','numberFormat2Dec','greenBackground'],
          },
          { headerName: 'Godz.5', field: 'H05', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, agr: 'sum',columnGroupShow: "open",
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'St.kli. 5', field: 'CustRate05', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 70, suppressMenu: true, columnGroupShow: "open",
            renderType: 'number',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font11','numberFormat2Dec','greenBackground'],
          },
        ]
      },
      { headerName: 'Dod.koszty',
        children: [
          { headerName: 'Suma', field: 'AdditionCustSum', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'closed',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Ośw.i zezw.', field: 'AdditionCust01', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Odzież rob.', field: 'AdditionCust02', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Bad.lek.', field: 'AdditionCust03', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Szkol.BHP', field: 'AdditionCust04', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Transp.', field: 'AdditionCust05', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Posiłki', field: 'AdditionCust06', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Zakwat.', field: 'AdditionCust07', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
          { headerName: 'Inne', field: 'AdditionCustOther', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum', columnGroupShow: 'open',
            renderType: 'number',
            cellClass: ['font11','numberFormat2Dec'],
          },
        ]
      },
      { headerName: 'Koszt - klient', field: 'CustCost',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
        cellClass: ['font11','blueBackground','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Netto - klient', field: 'CustNet',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
        cellClass: ['font11','blueBackground','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Narzut', field: 'Markup',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90, suppressMenu: true, agr: 'sum',
        renderType: 'number',
        cellClass: ['font11','numberFormat2Dec'],
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Fakt.', field: 'InvoiceNo', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, suppressMenu: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font11','numberFormat2Dec','pinkBackground'],
      },
      { headerName: 'Poz.', field: 'InvoicePos', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, suppressMenu: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font11','numberFormat2Dec','pinkBackground'],
      },
      { headerName: 'Fakt.zew.ID', field: 'InvExtId', type: 'textColumn', filter: 'agTextColumnFilter', width: 80, suppressMenu: true,},

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


  getAttachment() {
    //generuje załącznik
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitEmployeesSettlements');
    const url = this.urlService.getGenXLSUrl(dataSourceResponseWrapper.activeRow);
    console.log(url);
    window.open(url, '_blank');

  }

  refreshAfter(dataSourceManager) {}


}

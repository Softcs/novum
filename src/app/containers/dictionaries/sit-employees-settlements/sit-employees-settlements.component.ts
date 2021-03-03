import { Component, OnInit, ViewChild, ViewChildren, QueryList,LOCALE_ID, Inject } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { environment } from '@environments/environment';
import { DataSetWrapper, User } from '@app/_models';
import { GridService } from '@app/_services/grid.service';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { sitGlobalConfig } from '@app/_consts/sit-global-config'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'sit-employees-settlements',
  templateUrl: './sit-employees-settlements.component.html',
  styleUrls: ['./sit-employees-settlements.component.scss'],
  host: {class: 'router-flex'}
})
export class SitEmployeesSettlementsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  popupParent;
  columnDefs;
  columnDefsDet;
  pinnedBottomRowData;
  columnDefsSumByPayroll;
  excelStyles;
  frameworkComponents;

  constructor(
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ){
    this.popupParent = document.querySelector('body');
    this.excelStyles = sitGlobalConfig.excelStyles;
    this.frameworkComponents = sitGlobalConfig.frameworkComponents;
    //this.pinnedBottomRowData = this.createData();

    this.columnDefs = [
      { headerName: 'Nazwisko', field: 'EmployeeName', tooltipField: 'EmployeeName', sort: 'asc', width: 150, pinned: 'left',
        checkboxSelection: true, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Ident.', field: 'EmployeeIdent', tooltipField: 'EmployeeIdent', width: 100, pinned: 'left',
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Nr.listy', field: 'PayrollNo', tooltipField: 'PayrollNo', width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Okres', field: 'WorkPeriod',  width: 90,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Miejsce pracy', field: 'HRWorkPlaceName', tooltipField: 'HRWorkPlaceName',  width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Rachunek', field: 'ReceiptNo', tooltipField: 'ReceiptNo',  width: 90,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Opis prac', field: 'WorkDesc', tooltipField: 'WorkDesc',  width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Status ZUS', field: 'StatusZUSDesc',  width: 100,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Status PPK', field: 'StatusPPK',  width: 100, cellRenderer: 'gridCheckboxRenderer',
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Brutto', field: 'Gross', type: ['numericColumn','money'], filter: 'agNumberColumnFilter', width: 90,
        cellRenderer: 'sitGridCellRenderer',
        cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
        cellClass: ['font12','numberFormat2Dec','pinkBackground'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Podstawa', field: 'Base', filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 95,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Premie', field: 'Bonus', filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 90,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Potr.', field: 'Deduction', filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 80,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'ZUS', field: 'ZUSFirma', filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 80, suppressMenu: true,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'ZUS podst.', field: 'ZUSBase', filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 90, suppressMenu: true,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'ZUS prem.', field: 'ZUSBonus', filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 90, suppressMenu: true,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'PPK', field: 'PPK', filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 70,suppressMenu: true,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Koszt pracy', field: 'Cost',  filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 100,suppressMenu: true,
        cellRenderer: 'sitGridCellRenderer',
        cellStyle: function(params) { return {backgroundColor: '#fcf59f'} },
        cellClass: ['font12','yellowBackground','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Narzut', field: 'Markup',  filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 90,suppressMenu: true,
        cellRenderer: 'sitGridCellRenderer',
        cellClass: ['font12','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },
      { headerName: 'Koszt - klient', field: 'CustCost',  filter: 'agNumberColumnFilter', type: ['numericColumn','money'], width: 100,suppressMenu: true,
        cellRenderer: 'sitGridCellRenderer',
        cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
        cellClass: ['font12','blueBackground','numberFormat2Dec'],
        pinnedRowCellRenderer: 'sitGridCellRenderer',
        pinnedRowCellRendererParams: { style: { 'font-weight': 'bold' } }
      },

    ];

    this.columnDefsDet = [
      { headerName: 'Lp', field: 'OrdId', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60, sort: 'asc',suppressMenu: true},
      { headerName: 'Składnik', field: 'PayrollComponentDesc', tooltipField:'PayrollComponentDesc',  width: 270},
      { headerName: 'Wartość', field: 'Value', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : '<b>'+formatNumber(params.value, locale,'1.2-2')+'</b>'
        }
      },
      { headerName: 'Identyfikator', field: 'PayrollComponentIdent',  width: 130},
    ];

    this.columnDefsSumByPayroll = [
      { headerName: 'Rok', field: 'CostYear', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60,suppressMenu: true},
      { headerName: 'Miesiąc', field: 'CostMonth', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60,suppressMenu: true},
      { headerName: 'Dział', field: 'HRDepartmentIdent', tooltipField: 'HRDepartmentName', filter: 'agNumberColumnFilter', width: 120, sort: 'asc'},
      { headerName: 'Nr listy', field: 'PayrollNo', tooltipField:'PayrollNo',  width: 150, sort: 'asc'},
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'Emerytalna', field: 'ZUSEmerFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'Rentowa', field: 'ZUSRentFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'Wypadkowa', field: 'ZUSWypFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'FP', field: 'ZUSFP', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'FGŚP', field: 'ZUSFGSP', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'PPK', field: 'PPKFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
    ];
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);


  }

  refreshAfter(dataSourceManager) {
    this.pinnedBottomRowData = this.createData();
  }

  createData() {
    var gross = 0;
    var cost = 0;
    var markup = 0;
    var custCost = 0;
    var base = 0;
    var zusBase = 0;
    var bonus = 0;
    var zusBonus = 0;
    var ppk = 0;
    var deduction = 0;
    var zusFirma = 0;
    var result = [];

    if (this.dictContainer) {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper("sitEmployeesSettlements");
      if (dataSourceResponseWrapper.rows) {
        dataSourceResponseWrapper.rows.forEach(function(row){
          gross = gross + row['Gross'];
          cost = cost + row['Cost'];
          markup = markup + row['Markup'];
          base = base + row['Base'];
          zusBase = zusBase + row['ZUSBase'];
          bonus = bonus + row['Bonus'];
          zusBonus = zusBonus + row['ZUSBonus'];
          ppk = ppk + row['PPK'];
          deduction = deduction + row['Deduction'];
          zusFirma = zusFirma + row['ZUSFirma'];
          custCost = custCost + row['CustCost'];
        })
      }
    }

    result.push({
      Gross: gross,
      Cost: cost,
      Markup: markup,
      CustCost: custCost,
      Base: base,
      ZUSBase: zusBase,
      Bonus: bonus,
      ZUSBonus: zusBonus,
      PPK: ppk,
      Deduction: deduction,
      ZUSFirma: zusFirma,
      StatusPPK: '',
    }
    );

    return result;
  }
}

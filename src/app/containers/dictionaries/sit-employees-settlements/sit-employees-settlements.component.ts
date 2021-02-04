import { Component, OnInit, ViewChild, ViewChildren, QueryList,LOCALE_ID, Inject } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GridService } from '@app/_services/grid.service';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { sitGlobalConfig } from '@app/_consts/sit-global-config'

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
  columnDefsSumByPayroll;
  excelStyles;

  constructor(
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ){
    this.popupParent = document.querySelector('body');
    this.excelStyles = sitGlobalConfig.excelStyles;

    this.columnDefs = [
      { headerName: 'Nazwisko', field: 'EmployeeName', tooltipField: 'EmployeeName', sort: 'asc', width: 150, pinned: 'left' },
      { headerName: 'Nr.listy', field: 'PayrollNo', tooltipField: 'PayrollNo', width: 100, },
      { headerName: 'Okres', field: 'WorkPeriod',  width: 90, },
      { headerName: 'Opis prac', field: 'WorkDesc', tooltipField: 'WorkDesc',  width: 100, },
      { headerName: 'Brutto', field: 'Gross', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellClass: ['font12','numberFormat2Dec'],
      },
      { headerName: 'Premie', field: 'BonusEmp', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellClass: ['font12','numberFormat2Dec'],
      },
      { headerName: 'Potrącenia', field: 'DeductionEmp', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellClass: ['font12','numberFormat2Dec'],
      },
      { headerName: 'ZUS', field: 'ZUSFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellClass: ['font12','numberFormat2Dec'],
      },
      { headerName: 'PPK', field: 'PPKFirma', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 80,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellClass: ['font12','numberFormat2Dec'],
      },
      { headerName: 'Koszt pracy', field: 'Cost',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 120,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellStyle: function(params) { return {backgroundColor: '#fcf59f'} },
        cellClass: ['font12','yellowBackground','numberFormat2Dec'],
      },
      { headerName: 'Narzut', field: 'Markup',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 90,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellClass: ['font12','numberFormat2Dec'],
      },
      { headerName: 'Koszt - klient', field: 'CustCost',  filter: 'agNumberColumnFilter', type: 'numericColumn', width: 120,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        },
        cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
        cellClass: ['font12','blueBackground','numberFormat2Dec'],
      },

    ];

    this.columnDefsDet = [
      { headerName: 'Lp', field: 'OrdId', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60, sort: 'asc',suppressMenu: true},
      { headerName: 'Składnik', field: 'PayrollComponentDesc', tooltipField:'PayrollComponentDesc',  width: 270},
      { headerName: 'Wartość', field: 'Value', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        cellRenderer: function(params) {
          return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
        }
      },
      { headerName: 'Identyfikator', field: 'PayrollComponentIdent',  width: 130},
    ];

    this.columnDefsSumByPayroll = [
      { headerName: 'Rok', field: 'CostYear', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60,suppressMenu: true},
      { headerName: 'Miesiąc', field: 'CostMonth', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 60,suppressMenu: true},
      { headerName: 'Dział', field: 'HRDepartmentIdent', tooltipField: 'HRDepartmentName', filter: 'agNumberColumnFilter', type: 'agTextColumnFilter', width: 120, sort: 'asc'},
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
}

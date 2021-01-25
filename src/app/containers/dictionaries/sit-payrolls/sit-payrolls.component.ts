import { Component, OnInit, ViewChild, ViewChildren, QueryList, LOCALE_ID, Inject } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'app-sit-payrolls',
  templateUrl: './sit-payrolls.component.html',
  styleUrls: ['./sit-payrolls.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPayrollsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  popupParent;
  columnDefs;
  columnDefsPayrollsCalc;
  columnDefsPayrollComponentsCalc;
  columnDefsPayrollsCalcAccounting;
  columnDefsPayrollsAccounting;
  columnDefsPayrollsCalcAccountingDim;
  gridApiPayrollComponentsCalc;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'ID', field: 'sitPayrollsId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollsG', filter: 'agTextColumnFilter' },
      { headerName: 'Nr listy', field: 'PayrollNo',tooltipField: 'PayrollNo', filter: 'agTextColumnFilter', width: 180,
        cellRenderer: function(params) {
          return '<b>' + params.data["PayrollNo"] +'</b><br>' + params.data["PayrollTypeName"] + '</br>'
        }
      },
      { headerName: 'Daty', field: 'Date', filter: 'agTextColumnFilter', autoHeight: true, width: 150,
        type: 'rightAligned',
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Listy:</span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["Date"], 'yyyy-MM-dd', locale) +'</span><br>'
               + '<span style="color: dimgray;">Wypłaty:</span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["PaymentDate"], 'yyyy-MM-dd', locale) +'</span><br>'
               + '<span style="color: dimgray;">Okres:</span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["DateFrom"], 'yyyy-MM-dd', locale) +'</span><br>'
               + '<span style="color: dimgray;"></span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["DateTo"], 'yyyy-MM-dd', locale) +'</span>'
        }
      },
      { headerName: 'Wynagrodzenie', field: 'Gross', filter: 'agTextColumnFilter', autoHeight: true, width: 160,
        type: 'rightAligned',
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Netto:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Net"], locale,'1.2-2') +'</span><br>'
          + '<span style="color: dimgray;">Brutto:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Gross"], locale,'1.2-2') +'</span><br>'
          + '<span style="color: dimgray;">Podatek:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Tax"], locale,'1.2-2') + '</span><br>'
          + '<span style="color: dimgray;">PPK prac.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["PPKPrac"], locale,'1.2-2') + '</span><br>'
          + '<span style="color: dimgray;">PPK firma:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["PPKFirma"], locale,'1.2-2') + '</span><br>'
          + '<b><span style="color: dimgray;">Koszty:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Costs"], locale,'1.2-2') + '</span></b>'
        }
      },
      { headerName: 'ZUS pracownika', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 160, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSEmerPrac"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSRentPrac"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Chorob.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSChorPrac"], locale,'1.2-2') + '</span><br>'
            + '<b><span style="color: dimgray;">Społeczne:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSSpolPrac"], locale,'1.2-2') + '</span></b><br>'
            + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSZdroPrac"], locale,'1.2-2') + '</span><br>'
            + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSPrac"], locale,'1.2-2') + '</span></b>'
        }
      },
      { headerName: 'ZUS pracodawcy', field: 'ZUSEmerFirma', filter: 'agNumberColumnFilter', width: 160, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSEmerFirma"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSRentFirma"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSWypFirma"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">FP:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSFP"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">FGŚP:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSFGSP"], locale,'1.2-2') + '</span><br>'
            + '<B><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSFirma"], locale,'1.2-2') + '</span></b>'
        }
      },


    ];

    this.columnDefsPayrollsCalc = [
      { headerName: 'ID', field: 'sitPayrollsCalcId', filter: 'agNumberColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollsCalcG', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwisko', field: 'LastName', filter: 'agTextColumnFilter', width: 150, autoHeight: true, sort: 'asc',
        cellRenderer: function(params) {
        return '<b>' + params.data["LastName"] +'</b><br>' + params.data["FirstName"]
        }
      },
      { headerName: 'Wynagrodzenie', field: 'Gross', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Netto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Net"], locale,'1.2-2') +'</span><br>'
             + '<span style="color: dimgray;">Brutto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Gross"], locale,'1.2-2') +'</span><br>'
             + '<span style="color: dimgray;">Podatek:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Tax"], locale,'1.2-2') + '</span>'
        }
      },
      { headerName: 'ZUS pracownika', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerPrac"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentPrac"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Chorob.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSChorPrac"], locale,'1.2-2') + '</span>'
        }
      },
      { headerName: '', field: 'ZUSWypPrac', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<b><span style="color: dimgray;">Społeczne:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSSpolPrac"], locale,'1.2-2') + '</span></b><br>'
             + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSZdroPrac"], locale,'1.2-2') + '</span><br>'
             + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSPrac"], locale,'1.2-2') + '</span></b>'

        }
      },
      { headerName: 'ZUS pracodawcy', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerFirma"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentFirma"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSWypFirma"], locale,'1.2-2') + '</span>'
        }
      },
      { headerName: '', field: 'ZUSFP', filter: 'agNumberColumnFilter', width: 130, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">FP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFP"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">FGSP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFGSP"], locale,'1.2-2') + '</span><br>'
            + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFirma"], locale,'1.2-2') + '</span></b>'
        }
      },
      { headerName: 'PPK', field: 'PPKFirma', filter: 'agNumberColumnFilter', width: 150, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Pracownik:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKPrac"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">Pracodawca:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKFirma"], locale,'1.2-2') + '</span>'
        }
      }
   ];

   this.columnDefsPayrollComponentsCalc = [
    { headerName: 'ID', field: 'sitPayrollComponentsCalcId', filter: 'agNumberColumnFilter' },
    { headerName: 'GUID', field: 'sitPayrollComponentsCalcG', filter: 'agTextColumnFilter' },
    { headerName: 'Składnik', field: 'PayrollComponentDesc', tooltipField: 'PayrollComponentDesc', filter: 'agTextColumnFilter' },
    { headerName: 'Wynagrodzenie', field: 'Gross', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Wartość:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Value"], locale,'1.2-2') +'</span><br>'
           + '<span style="color: dimgray;">Brutto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Gross"], locale,'1.2-2') +'</span><br>'
           + '<span style="color: dimgray;">Podatek:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Tax"], locale,'1.2-2') + '</span>'
      }
    },
    { headerName: 'ZUS pracownika', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerPrac"], locale,'1.2-2') +'</span><br>'
          + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentPrac"], locale,'1.2-2') +'</span><br>'
          + '<span style="color: dimgray;">Chorob.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSChorPrac"], locale,'1.2-2') + '</span>'
      }
    },
    { headerName: '', field: 'ZUSWypPrac', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<b><span style="color: dimgray;">Społeczne:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSSpolPrac"], locale,'1.2-2') + '</span></b><br>'
           + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSZdroPrac"], locale,'1.2-2') + '</span><br>'
           + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSPrac"], locale,'1.2-2') + '</span></b>'

      }
    },
    { headerName: 'ZUS pracodawcy', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140, autoHeight: true,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerFirma"], locale,'1.2-2') +'</span><br>'
          + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentFirma"], locale,'1.2-2') +'</span><br>'
          + '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSWypFirma"], locale,'1.2-2') + '</span>'
      }
    },
    { headerName: '', field: 'ZUSFP', filter: 'agNumberColumnFilter', width: 130, autoHeight: true,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">FP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFP"], locale,'1.2-2') + '</span><br>'
          + '<span style="color: dimgray;">FGSP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFGSP"], locale,'1.2-2') + '</span><br>'
          + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFirma"], locale,'1.2-2') + '</span></b>'
      }
    },
    { headerName: 'PPK', field: 'PPKFirma', filter: 'agNumberColumnFilter', width: 150, autoHeight: true,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Pracownik:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKPrac"], locale,'1.2-2') + '</span><br>'
          + '<span style="color: dimgray;">Pracodawca:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKFirma"], locale,'1.2-2') + '</span>'
      }
    }
  ];

  this.columnDefsPayrollsCalcAccounting = [
    { headerName: 'ID', field: 'sitPayrollsCalcAccountingId', filter: 'agNumberColumnFilter' },
    { headerName: 'GUID', field: 'sitPayrollsCalcAccountingG', filter: 'agTextColumnFilter' },
    { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true },
    { headerName: 'Konto', field: 'Account', filter: 'agTextColumnFilter', width: 150 },
    { headerName: 'Kwota WN', field: 'CAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100,
      cellRenderer: function(params) {
        return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
      }
    },
    { headerName: 'Kwota MA', field: 'DAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100,
      cellRenderer: function(params) {
        return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
      },
    },
    { headerName: 'Opis', field: 'PosDesc', filter: 'agTextColumnFilter', width: 250 },
];

this.columnDefsPayrollsAccounting = [
  { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true },
  { headerName: 'Konto', field: 'Account', filter: 'agTextColumnFilter', width: 150, floatingFilter: true },
  { headerName: 'Kwota WN', field: 'CAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, floatingFilter: true,
    cellRenderer: function(params) {
      return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
    }
  },
  { headerName: 'Kwota MA', field: 'DAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, floatingFilter: true,
    cellRenderer: function(params) {
      return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
    },
  },
  { headerName: 'Opis', field: 'PosDesc', filter: 'agTextColumnFilter', width: 250, floatingFilter: true },
];

this.columnDefsPayrollsCalcAccountingDim = [
  { headerName: 'ID', field: 'sitPayrollsCalcAccountingDimId', filter: 'agNumberColumnFilter' },
  { headerName: 'GUID', field: 'sitPayrollsCalcAccountingDimG', filter: 'agTextColumnFilter' },
  { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true,
    cellClass: 'grid-cell-center-right'
  },
  { headerName: 'Kwota', field: 'Amount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100,
    cellRenderer: function(params) {
      return params.value === null ? null : formatNumber(params.value, locale,'1.2-2')
    },
    cellClass: 'grid-cell-center-right'
  },
  { headerName: 'Dział', field: 'CompanyDepartmentIdent', filter: 'agTextColumnFilter',tooltipField: 'CompanyDepartmentDesc',
    cellRenderer: function(params) {
      var ident;
      var desc;
      ident = params.data["CompanyDepartmentIdent"] ? params.data["CompanyDepartmentIdent"] : ''
      desc = params.data["CompanyDepartmentDesc"] ? params.data["CompanyDepartmentDesc"] : ''
      return '<b>' + ident + '</b><br>' + desc
    }
  },
  { headerName: 'Projekt', field: 'ProjectIdent', filter: 'agTextColumnFilter', tooltipField: 'ProjectName',
    cellRenderer: function(params) {
      var ident;
      var desc;
      ident = params.data["ProjectIdent"] ? params.data["ProjectIdent"] : '';
      desc = params.data["ProjectName"] ? params.data["ProjectName"] : '';
      return '<b>' + ident + '</b><br>' + desc
    }
  },
  { headerName: 'Kanał dystrybucji', field: 'DistributionChannelIdent', filter: 'agTextColumnFilter', tooltipField: 'DistributionChannelDesc',
    cellRenderer: function(params) {
      var ident;
      var desc;
      ident = params.data["DistributionChannelIdent"] ? params.data["DistributionChannelIdent"] : '';
      desc = params.data["DistributionChannelDesc"] ? params.data["DistributionChannelDesc"] : '';
      return '<b>' + ident + '</b><br>' + desc
    }
  },
  { headerName: 'Typ produktu', field: 'ProductsTypeIdent', filter: 'agTextColumnFilter', tooltipField: 'ProductsTypeDesc',
    cellRenderer: function(params) {
      var ident;
      var desc;
      ident = params.data["ProductsTypeIdent"] ? params.data["ProductsTypeIdent"] : '';
      desc = params.data["ProductsTypeDesc"] ? params.data["ProductsTypeDesc"] : '';
      return '<b>' + ident + '</b><br>' + desc
    }
  },

];

}

  ngOnInit(): void {}

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitPayrollsG')) {
      params.columnApi.setColumnsVisible(['sitPayrollsId','sitPayrollsG'], false)
    }

    if (params.columnApi.getColumn('sitPayrollsCalcG')) {
      params.columnApi.setColumnsVisible(['sitPayrollsCalcId','sitPayrollsCalcG'], false)
    }

    if (params.columnApi.getColumn('sitPayrollComponentsCalcG')) {
      params.columnApi.setColumnsVisible(['sitPayrollComponentsCalcId','sitPayrollComponentsCalcG'], false)
      this.gridApiPayrollComponentsCalc = params.colummnApi
    }

    if (params.columnApi.getColumn('sitPayrollsCalcAccountingG')) {
      params.columnApi.setColumnsVisible(['sitPayrollsCalcAccountingId','sitPayrollsCalcAccountingG'], false)
    }

    if (params.columnApi.getColumn('sitPayrollsCalcAccountingDimG')) {
      params.columnApi.setColumnsVisible(['sitPayrollsCalcAccountingDimId','sitPayrollsCalcAccountingDimG'], false)
    }

  }

  onTabChanged (tab) {
    if (tab.index === 0) {
      this.gridApiPayrollComponentsCalc.resetRowHeights();
    }

  }
}

import { Component,LOCALE_ID,Inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-payrolls',
  templateUrl: './sit-payrolls.component.html',
  styleUrls: ['./sit-payrolls.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPayrollsComponent extends SitDictBaseComponent {
  gridApiPayrollComponentsCalc;
  gridApiPayrollsCalc;

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
    }

  public prepareColumnsDefinitnion() {
    var locale = this.locale;
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');

    this.gridColumnsDefinition['sitPayrolls'] = [
      { headerName: 'ID', field: 'sitPayrollsId', filter: 'agNumberColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPayrollsG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'Nr listy', field: 'PayrollNo',tooltipField: 'PayrollNo', filter: 'agTextColumnFilter', width: 180,
        cellRenderer: function(params) {
          return '<b>' + params.data["PayrollNo"] +'</b><br>' + params.data["PayrollTypeName"] + '</br>'
          + (params.data["Posted"] === 0 ? '<span style="display:inline-block;width:70px;color: red"><b>Niezaksięgowane'
            : '<span style="display:inline-block;width:70px;color: green"><b>Zaksięgowane<br>'+params.data["ExtAccountingNo"]+'</b></span><br>')

        }
      },
      { headerName: 'Daty', field: 'Date', filter: 'agTextColumnFilter', width: 150,
        type: 'rightAligned',
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Listy:</span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["Date"], 'yyyy-MM-dd', locale) +'</span><br>'
               + '<span style="color: dimgray;">Wypłaty:</span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["PaymentDate"], 'yyyy-MM-dd', locale) +'</span><br>'
               + '<span style="color: dimgray;">Okres:</span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["DateFrom"], 'yyyy-MM-dd', locale) +'</span><br>'
               + '<span style="color: dimgray;"></span> <span style="display:inline-block;width:70px;">' + formatDate(params.data["DateTo"], 'yyyy-MM-dd', locale) +'</span>'
        }
      },
      { headerName: 'Wynagrodzenie', field: 'Gross', filter: 'agTextColumnFilter', width: 160,
        type: 'rightAligned',
        cellRenderer: function(params) {
          return '<span style="color: dimgray;">Netto:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Net"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          + '<span style="color: dimgray;">Brutto:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Gross"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          + '<span style="color: dimgray;">Podatek:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Tax"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
          + '<span style="color: dimgray;">PPK prac.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["PPKPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
          + '<span style="color: dimgray;">PPK firma:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["PPKFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
          + '<b><span style="color: dimgray;">Koszty:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["Costs"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b>'
        }
      },
      { headerName: 'ZUS pracownika', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 160,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSEmerPrac"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSRentPrac"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Chorob.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSChorPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<b><span style="color: dimgray;">Społeczne:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSSpolPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b><br>'
            + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSZdroPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b>'
        }
      },
      { headerName: 'ZUS pracodawcy', field: 'ZUSEmerFirma', filter: 'agNumberColumnFilter', width: 160,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSEmerFirma"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSRentFirma"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSWypFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<span style="color: dimgray;">FP:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSFP"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<span style="color: dimgray;">FGŚP:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSFGSP"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<B><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:70px;">' + formatNumber(params.data["ZUSFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b>'
        }
      },


    ];

    this.gridColumnsDefinition['sitPayrollsCalc'] = [
      { headerName: 'ID', field: 'sitPayrollsCalcId', filter: 'agNumberColumnFilter', defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPayrollsCalcG', filter: 'agTextColumnFilter', defaultVisibility: false },
      { headerName: 'Nazwisko', field: 'LastName', tooltipField: 'LastName',filter: 'agTextColumnFilter', width: 150, sort: 'asc', pinned: 'left',
        cellRenderer: function(params) {
        return '<b>' + params.data["LastName"] +'</b><br>' + params.data["FirstName"]+'</b><br>' + params.data["PESEL"]
        }
      },
      { headerName: 'Wynagrodzenie', field: 'Gross', filter: 'agNumberColumnFilter', width: 140,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Netto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Net"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
             + '<span style="color: dimgray;">Brutto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Gross"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
             + '<span style="color: dimgray;">Podatek:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Tax"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
        }
      },
      { headerName: 'ZUS pracownika', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerPrac"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentPrac"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Chorob.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSChorPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
        }
      },
      { headerName: '', field: 'ZUSWypPrac', filter: 'agNumberColumnFilter', width: 140,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<b><span style="color: dimgray;">Społeczne:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSSpolPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b><br>'
             + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSZdroPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
             + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b>'

        }
      },
      { headerName: 'ZUS pracodawcy', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerFirma"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentFirma"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
            + '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSWypFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
        }
      },
      { headerName: '', field: 'ZUSFP', filter: 'agNumberColumnFilter', width: 130,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">FP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFP"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<span style="color: dimgray;">FGSP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFGSP"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b>'
        }
      },
      { headerName: 'PPK', field: 'PPKFirma', filter: 'agNumberColumnFilter', width: 150,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Pracownik:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
            + '<span style="color: dimgray;">Pracodawca:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
        }
      }
   ];

   this.gridColumnsDefinition['sitPayrollComponentsCalc'] = [
    { headerName: 'ID', field: 'sitPayrollComponentsCalcId', filter: 'agNumberColumnFilter', defaultVisibility: false },
    { headerName: 'GUID', field: 'sitPayrollComponentsCalcG', filter: 'agTextColumnFilter', defaultVisibility: false },
    { headerName: 'Składnik', field: 'PayrollComponentDesc', tooltipField: 'PayrollComponentDesc', filter: 'agTextColumnFilter', width: 150, pinned: 'left', },
    { headerName: 'Wynagrodzenie', field: 'Gross', filter: 'agNumberColumnFilter', width: 140,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Wartość:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Value"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
           + '<span style="color: dimgray;">Brutto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Gross"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
           + '<span style="color: dimgray;">Podatek:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Tax"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
      }
    },
    { headerName: 'ZUS pracownika', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerPrac"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentPrac"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          + '<span style="color: dimgray;">Chorob.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSChorPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
      }
    },
    { headerName: '', field: 'ZUSWypPrac', filter: 'agNumberColumnFilter', width: 140,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<b><span style="color: dimgray;">Społeczne:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSSpolPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b><br>'
           + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSZdroPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
           + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b>'

      }
    },
    { headerName: 'ZUS pracodawcy', field: 'ZUSEmerPrac', filter: 'agNumberColumnFilter', width: 140,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerFirma"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentFirma"], locale,'1.2-2').replace(/[,]/g,' ') +'</span><br>'
          + '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSWypFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
      }
    },
    { headerName: '', field: 'ZUSFP', filter: 'agNumberColumnFilter', width: 130,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">FP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFP"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
          + '<span style="color: dimgray;">FGSP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFGSP"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
          + '<b><span style="color: dimgray;">Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span></b>'
      }
    },
    { headerName: 'PPK', field: 'PPKFirma', filter: 'agNumberColumnFilter', width: 150,
      type: 'rightAligned',
      cellRenderer: function(params) {
      return '<span style="color: dimgray;">Pracownik:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKPrac"], locale,'1.2-2').replace(/[,]/g,' ') + '</span><br>'
          + '<span style="color: dimgray;">Pracodawca:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKFirma"], locale,'1.2-2').replace(/[,]/g,' ') + '</span>'
      }
    }
  ];

  this.gridColumnsDefinition['sitPayrollsCalcAccounting'] = [
    { headerName: 'ID', field: 'sitPayrollsCalcAccountingId', filter: 'agNumberColumnFilter', defaultVisibility: false },
    { headerName: 'GUID', field: 'sitPayrollsCalcAccountingG', filter: 'agTextColumnFilter', defaultVisibility: false },
    { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true },
    { headerName: 'Konto', field: 'Account', tooltipField: 'AccountDesc', filter: 'agTextColumnFilter', width: 150 },
    { headerName: 'Kwota WN', field: 'CAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, agr: 'sum',
      cellRenderer: function(params) {
        return params.value === null ? null : formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ')
      }
    },
    { headerName: 'Kwota MA', field: 'DAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, agr: 'sum',
      cellRenderer: function(params) {
        return params.value === null ? null : formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ')
      },
    },
    { headerName: 'Opis', field: 'PosDesc', filter: 'agTextColumnFilter', width: 250 },
  ];

  this.gridColumnsDefinition['sitPayrollsAccounting'] = [
    { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true },
    { headerName: 'Konto', field: 'Account', filter: 'agTextColumnFilter', width: 150, floatingFilter: true },
    { headerName: 'Kwota WN', field: 'CAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, floatingFilter: true, agr: 'sum',
      cellRenderer: function(params) {
        return params.value === null ? null : formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ')
      }
    },
    { headerName: 'Kwota MA', field: 'DAmount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, floatingFilter: true, agr: 'sum',
      cellRenderer: function(params) {
        return params.value === null ? null : formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ')
      },
    },
    { headerName: 'Opis', field: 'PosDesc', filter: 'agTextColumnFilter', width: 250, floatingFilter: true },
  ];

  this.gridColumnsDefinition['sitPayrollsCalcAccountingDim'] = [
    { headerName: 'ID', field: 'sitPayrollsCalcAccountingDimId', filter: 'agNumberColumnFilter', defaultVisibility: false },
    { headerName: 'GUID', field: 'sitPayrollsCalcAccountingDimG', filter: 'agTextColumnFilter', defaultVisibility: false },
    { headerName: 'Lp', field: 'PosId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 60, sort: 'asc', suppressMenu: true,
      cellClass: 'grid-cell-center-right'
    },
    { headerName: 'Kwota', field: 'Amount', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, agr: 'sum', autoHeight: true,
      cellRenderer: function(params) {
        return params.value === null ? null : formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ')
      },
      cellClass: 'grid-cell-center-right'
    },
    { headerName: 'Dział', field: 'CompanyDepartmentIdent', filter: 'agTextColumnFilter',tooltipField: 'CompanyDepartmentDesc', autoHeight: true,
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

  gridReady(params) {
  }

  onTabChanged (tab) {
  }
}

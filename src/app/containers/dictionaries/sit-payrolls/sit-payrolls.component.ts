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
  rowSelection;
  popupParent;
  defaultColDef;

  gridApi;
  gridColumnApi;
  columnDefs;
  gridApiPayrollsCalc;
  gridColumnApiPayrollsCalc;
  columnDefsPayrollsCalc;

  constructor(
    private gatewayService: GatewayService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.rowSelection = 'single';

    this.defaultColDef = {
      sortable: true,
      filter: false,
      floatingFilter: false,
      resizable: true
    };

    this.columnDefs = [
      { headerName: 'ID', field: 'sitPayrollsId', filter: 'agNumericColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollsG', filter: 'agTextColumnFilter' },
      { headerName: 'Nr listy', field: 'PayrollNo',tooltipField: 'PayrollNo', filter: 'agTextColumnFilter', width: 180 },
      { headerName: 'Daty', field: 'Date', filter: 'agTextColumnFilter', autoHeight: true, width: 150,
        type: 'rightAligned',
        cellRenderer: function(params) {
          return '<b>Listy: </b>' + formatDate(params.data["Date"], 'yyyy-MM-dd', locale) +'<br>'
               + '<b>Wypłaty: </b>' + formatDate(params.data["PaymentDate"], 'yyyy-MM-dd', locale)
        }
      },
      { headerName: 'Okres', field: 'CountrySymbol', filter: 'agTextColumnFilter', autoHeight: true, width: 150,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return formatDate(params.data["DateFrom"], 'yyyy-MM-dd', locale) +'<br>'
             + formatDate(params.data["DateTo"], 'yyyy-MM-dd', locale)
      } },
    ];

    this.columnDefsPayrollsCalc = [
      { headerName: 'ID', field: 'sitPayrollsCalcId', filter: 'agNumericColumnFilter' },
      { headerName: 'GUID', field: 'sitPayrollsCalcG', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwisko', field: 'LastName', filter: 'agTextColumnFilter', width: 150, autoHeight: true,
        cellRenderer: function(params) {
        return '<b>' + params.data["LastName"] +'</b><br>' + params.data["FirstName"]
        }
      },
      { headerName: 'Wynagrodzenie', field: 'Gross', filter: 'agNumericColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Netto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Net"], locale,'1.2-2') +'</span><br>'
             + '<span style="color: dimgray;">Brutto:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Gross"], locale,'1.2-2') +'</span><br>'
             + '<span style="color: dimgray;">Podatek:</span> <span style="display:inline-block;width:60px;">' + formatNumber(params.data["Tax"], locale,'1.2-2') + '</span>'
        }
      },
      { headerName: 'ZUS pracownika', field: 'ZUSEmerPrac', filter: 'agNumericColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerPrac"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentPrac"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Chorob.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSChorPrac"], locale,'1.2-2') + '</span>'
        }
      },
      { headerName: '', field: 'ZUSWypPrac', filter: 'agNumericColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSWypPrac"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSZdroPrac"], locale,'1.2-2') + '</span><br>'
            + '<b><span>Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSPrac"], locale,'1.2-2') + '</span></b>'

        }
      },
      { headerName: 'ZUS pracodawcy', field: 'ZUSEmerPrac', filter: 'agNumericColumnFilter', width: 140, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Emeryt.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSEmerFirma"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Rent.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSRentFirma"], locale,'1.2-2') +'</span><br>'
            + '<span style="color: dimgray;">Chor.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSChorFirma"], locale,'1.2-2') + '</span>'
        }
      },
      { headerName: '', field: 'ZUSWypFirma', filter: 'agNumericColumnFilter', width: 130, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Wyp.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSWypFirma"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">Zdro.:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSZdroFirma"], locale,'1.2-2') + '</span>'
        }
      },
      { headerName: '', field: 'ZUSFP', filter: 'agNumericColumnFilter', width: 130, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">FP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFP"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">FGSP:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFGSP"], locale,'1.2-2') + '</span><br>'
            + '<b><span>Suma:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["ZUSFirma"], locale,'1.2-2') + '</span></b>'
        }
      },
      { headerName: 'PPK', field: 'ZUSWypFirma', filter: 'agNumericColumnFilter', width: 150, autoHeight: true,
        type: 'rightAligned',
        cellRenderer: function(params) {
        return '<span style="color: dimgray;">Pracownik:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKPrac"], locale,'1.2-2') + '</span><br>'
            + '<span style="color: dimgray;">Pracodawca:</span> <span style="display:inline-block;width:50px;">' + formatNumber(params.data["PPKFirma"], locale,'1.2-2') + '</span>'
        }
      }
   ];

  }

  ngOnInit(): void {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitPayrollsId','sitPayrollsG'], false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitPayrolls');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onGridReadyPayrollsCalc(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['sitPayrollsCalcId','sitPayrollsCalcG'], false)
  }

  onRowClickedPayrollsCalc(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitPayrollsCalc');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
  }
}

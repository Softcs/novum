import { Component, ViewEncapsulation, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
// import { formatDate } from '@angular/common';
// import { formatNumber } from '@angular/common';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';
import { DataSetWrapper } from '@app/_models';
// import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';



@Component({
  selector: 'app-sit-sandbox',
  templateUrl: './sit-sandbox.component.html',
  styleUrls: ['./sit-sandbox.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'router-flex sit-sandbox-component'}
})
export class SitSandboxComponent extends SitDictBaseComponent implements OnInit {

  dataSourceResponseWrapper: DataSetWrapper;
  gridApi: any;
  columnApi: any;
  gridDimApi: any;
  columnDimApi: any;
  // elementType = NgxQrcodeElementTypes.URL;
  // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale);
  };

  onGridReady(params: any) {
    this.gridApi=params.api;
    this.columnApi=params.columnApi;
  }

  onGridDimReady(params: any) {
    this.gridDimApi=params.api;
    this.columnDimApi=params.columnApi;
  }


  public prepareColumnsDefinitnion() {
    var locale = this.locale;
    this.gridColumnsDefinition["sitSandbox"] = [
      { headerName: 'STBX', field: 'sitSandbox'},
      { headerName: 'Data od', field: 'DateFrom'},
      { headerName: 'DTF', headerTooltip: 'Date Time Field', field: 'DateTimeField'},


    ];
  }


  refreshAfter(dataSourceManager) {

    this.dataSourceResponseWrapper = dataSourceManager?.getDateSourceWrapper("sitSandbox");

    if (!this.dataSourceResponseWrapper.activeRow) {
      return;
    }

    return;
  }


  // ngOnInit(): void {
  // }

}

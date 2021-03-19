import { UrlService } from '@app/_services/url.service';
import { formatDate, formatNumber } from '@angular/common';
import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { environment } from '@environments/environment';
@Component({
  selector: 'sit-dict-base',
  templateUrl: './sit-dict-base.component.html',
  styleUrls: ['./sit-dict-base.component.scss']
})
export class SitDictBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  public popupParent;
  public currentUser: User;
  public token: string;
  public companyGUID: string;
  public apiUrl: string;
  public contentColor;
  public gridColumnsDefinition = {};

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.popupParent = document.querySelector('body');
      this.companyGUID = this.currentUser.company.companyGUID;
      this.token = this.currentUser.token;
      this.apiUrl = environment.apiUrl;
      this.contentColor = document.documentElement.style.getPropertyValue('$content-background-color');
      this.prepareColumnsDefinitnion();
    }

  ngAfterViewInit(): void {
    this.prepareGrid();
  }

  ngOnInit(): void {

    this.dictInit()
  }

  private prepareGrid() {
    var gridColumnsDefinition = this.gridColumnsDefinition;
    var locale = this.locale;
    this.dictContainer.DataSetManager.prepareGrid = function(gridApi, ident) {
      if (!gridApi.getColumnDefs() || gridApi.getColumnDefs().length == 0) {
        var columns = gridColumnsDefinition[ident];
        var renderColumns = columns.filter( c => c.renderType);
        renderColumns.forEach(column => {
          var renderFormat = column["renderFormat"]

          if (column.renderType == "checkbox") {
            column["cellRendererFramework"] = GridCheckboxRenderer;
          }

          if (column.renderType == "date") {
            if (!renderFormat) {
              renderFormat = 'yyyy-MM-dd';
            }

            column["cellRenderer"] = function(params) {
              return formatDate(params.value, renderFormat, locale);
            }
          }

          if (column.renderType == "number") {
            if (!renderFormat) {
              renderFormat = '1.2-2';
            }

            column["cellRenderer"] = function(params) {
              return params.value === null ? null : formatNumber(params.value, locale, renderFormat).replace(/[,]/g,' ');
            }
          }

          if (column.renderType == "sitGridCellRenderer") {
            column["cellRendererFramework"] = sitGlobalConfig.frameworkComponents
          }
        });

        gridApi.setColumnDefs(columns);
        var hiddenColumns = columns.filter(c => c.defaultVisibility === false).map(c => c.field);
        gridApi.columnController.setColumnsVisible(hiddenColumns, false);
      }
      gridApi.setPopupParent(this.popupParent);

    }
  }



  public dictInit(): void {

  }

  public gridReady(params):void {

  }

  public prepareColumnsDefinitnion() {

  }
}

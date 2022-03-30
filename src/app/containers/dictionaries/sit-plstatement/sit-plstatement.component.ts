import { formatNumber } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-plstatement',
  templateUrl: './sit-plstatement.component.html',
  styleUrls: ['./sit-plstatement.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPLStatementComponent extends SitDictBaseComponent {

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string
  ){
    super(gatewayService, gridService, urlService, locale);
  }
  public prepareColumnsDefinitnion() {
    var locale = this.locale;

    this.gridColumnsDefinition["sitPLStatement"] = [
      { headerName: 'Lp', field: 'ord', sort: 'asc', width: 60, suppressMenu: true, defaultVisibility: false,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Poz.', field: 'Position', sort: 'asc', width: 60, suppressMenu: true, sortable: false, pinned: 'left',
        cellRenderer: function(params) {
          return params.value === null ? '' : params.data['style_Bold'] === 0 ? params.value : '<b>'+params.value+'</b>'
        },
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Opis', field: 'Description', tooltipField: 'Description', width: 300, suppressMenu: true, sortable: false, pinned: 'left',
        cellRenderer: function(params) {
          return params.data['style_Bold'] === 0 ? params.value : '<b>'+params.value+'</b>'
        },
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Styczeń', field: '01',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Luty', field: '02',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Marzec', field: '03',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Kwiecień', field: '04',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Maj', field: '05',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Czerwiec', field: '06',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Lipiec', field: '07',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Sierpień', field: '08',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Wrzesień', field: '09',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Październik', field: '10',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Listopad', field: '11',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Grudzień', field: '12',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Suma', field: 'Sum',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
        cellClass: ['font12','numberFormat2Dec','blueBackground']
      },
      { headerName: 'Poprz.', field: 'Sum_prev',  width: 100, suppressMenu: true,sortable: false,
        cellRenderer: function(params) {
          return params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: '%', field: 'SumToPrevPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', width: 60, suppressMenu: true,
        cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
      },
      { headerName: 'Różnica', field: 'Diff',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },

    ]

  }

}
function locale(value: any, locale: any, arg2: string) {
  throw new Error('Function not implemented.');
}


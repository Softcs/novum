import { Component, OnInit, ViewChild, ViewChildren, QueryList, LOCALE_ID, Inject } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GridService } from '@app/_services/grid.service';
import { sitGlobalConfig } from '@app/_consts/sit-global-config'

@Component({
  selector: 'app-sit-plstatement',
  templateUrl: './sit-plstatement.component.html',
  styleUrls: ['./sit-plstatement.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPLStatementComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  popupParent;
  defaultColDef;
  columnDefs;
  excelStyles;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
    this.excelStyles = sitGlobalConfig.excelStyles;

    this.columnDefs = [
      { headerName: 'Lp', field: 'ord', sort: 'asc', width: 60, suppressMenu: true,
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
      { headerName: 'Sty.', field: '01',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Lut.', field: '02',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Mar.', field: '03',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Kwi.', field: '04',  width: 100, suppressMenu: true, sortable: false,
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
      { headerName: 'Cze.', field: '06',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Lip.', field: '07',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Sie.', field: '08',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Wrz.', field: '09',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Paź.', field: '10',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Lis.', field: '11',  width: 100, suppressMenu: true, sortable: false,
        cellRenderer: function(params) {
          return params.data['style_DataType'] === 'percent' ?
              params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.0-0')+'%' : '<b>'+formatNumber(params.value, locale,'1.0-0')+'%</b>'
              : params.data['style_Bold'] === 0 ? formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') : '<b>'+formatNumber(params.value, locale,'1.2-2').replace(/[,]/g,' ') +'</b>'
        },
        cellClass: ['font12','numberFormat2Dec']
      },
      { headerName: 'Gru.', field: '12',  width: 100, suppressMenu: true, sortable: false,
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

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('ord')) {
      params.columnApi.setColumnsVisible(['ord'],false)
     }
  }

}

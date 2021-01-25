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
  selector: 'sit-pub-delivery-distribution',
  templateUrl: './sit-pub-delivery-distribution.component.html',
  styleUrls: ['./sit-pub-delivery-distribution.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubDeliveryDistributionComponent implements OnInit {
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
    this.excelStyles = [
      {
        id: 'header',
        font: {
            fontName: "Calibri",
            size: 12,
            bold: true
        },
        interior: {
          color: '#ebebe0',
          pattern: 'Solid',
        },
      },
      {
        id: 'font12',
        font: { fontName: "Calibri", size: 12, }
      },
      {
        id: 'textFormat',
        dataType: 'string',
      },
      {
        id: 'blueBackground',
        interior: {
          color: '#cce6ff',
          pattern: 'Solid',
        },
      },
      {
        id: 'pinkBackground',
        interior: {
          color: '#ffe6e6',
          pattern: 'Solid',
        },
      },
      {
        id: 'greenBackground',
        interior: {
          color: '#d6f5d6',
          pattern: 'Solid',
        },
      },
      {
        id: 'dateFormat',
        dataType: 'dateTime',
        numberFormat: { format: 'yyyy-mm-dd;@' },
      },
      {
        id: 'numberFormatInt',
        numberFormat: { format: '#,##0' },
      },
      {
        id: 'numberFormat2Dec',
        numberFormat: { format: '#,##0.00' },
      },
      {
        id: 'numberFormatPercent',
        numberFormat: { format: '#,##0[$%]' },
      },
      {
        id: 'textFormat',
        dataType: 'string',
      },
    ]

    this.columnDefs = [
      { headerName: 'Kartoteka',
        children: [
          { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, pinned: 'left',
            cellClass: ['font12','textFormat']
          },
          { headerName: 'Status', headerTooltip: 'Premiera, Nowość, Dodruk', field: 'ProjectStatus', filter: 'agTextColumnFilter', width: 70, pinned: 'left', enableRowGroup: true,
            cellClass: ['font12','textFormat']
          },
          { headerName: 'Opis', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 200, pinned: 'left',
            cellClass: ['font12','textFormat']
          },
        ]
      },
      { headerName: 'Wyd.', field: 'Publishing', filter: 'agTextColumnFilter', width: 80, enableRowGroup: true,
        cellClass: ['font12','textFormat'] },
      { headerName: 'Rynki', field: 'Markets',tooltipField: 'Markets' , filter: 'agTextColumnFilter', width: 80, enableRowGroup: true,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Data wyd', field: 'ReleaseDateAct', filter: 'agDateColumnFilter', width: 100, enableRowGroup: true,
        cellRenderer: function(params) { return formatDate(params.value, 'yyyy-MM-dd', locale) },
        cellClass: ['font12','dateFormat']
      },
      { headerName: 'Ceny',
        children: [
          { headerName: 'Detal.', field: 'DetailPrice', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.2-2') },
            cellClass: ['font12','numberFormat2Dec']
          },
          { headerName: 'Zakupu', field: 'PurchacePrice', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.2-2') },
            cellClass: ['font12','numberFormat2Dec']
          },
        ]
      },
      { headerName: 'Dostawy', field: 'DeliveryQuantity', type: 'numericColumn', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: 'Sprzedaż', field: 'SaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: '% dost.', field: 'DeliveryPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
        cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
        cellClass: ['font12','numberFormatPercent']
      },
      { headerName: 'Stan ogółem', field: 'AllStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 110, enableValue: true,
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: 'Stan A100', field: 'WMSStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 110, enableValue: true,
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: 'Stan dysp.', field: 'WMSStockAv', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
        cellClass: ['font12','numberFormatInt']
      },
      // { headerName: 'OtherStock', field: 'OtherStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
      //   cellRenderer: function(params) { return formatNumber(params.value, locale,'1.2-2') }
      // },
      { headerName: 'Rozdysponowano',
        children: [
          { headerName: 'Ilość', field: 'DistributedQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
            cellClass: ['font12','blueBackground','numberFormatInt'],
          },
          { headerName: '% dost.', field: 'DistributedPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
            cellClass: ['font12','blueBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Konsygnacja',
        children: [
          { headerName: 'Ilość', field: 'ConsignmentQuantitySum', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '% rozdysp.', field: 'ConsignmentPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground',,'numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Sprzedaż',
        children: [
          { headerName: 'Ilość', field: 'SaleQuantitySum', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font12','greenBackground','numberFormatInt'],
          },
          { headerName: '% rozdysp.', field: 'SalePercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font12','greenBackground',,'numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Hania',
        children: [
          { headerName: 'Konsygn.', field: 'HConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'Sprzedaż', field: 'HSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellClass: ['font12','numberFormatInt',],
          },
          { headerName: 'PZR', field: 'HPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '%', field: 'HPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Zbyszek',
        children: [
          { headerName: 'Konsygn.', field: 'ZConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'Sprzedaż', field: 'ZSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
          cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'PZR', field: 'ZPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '%', field: 'ZPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Dorota',
        children: [
          { headerName: 'Konsygn.', field: 'DConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'Sprzedaż', field: 'DSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'PZR', field: 'DPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '%', field: 'DPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Pozostałe',
        children: [
          { headerName: 'Sprzedaż', field: 'OSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellClass: ['font12','numberFormatInt'],
           },
        ]
      }
    ]
   }

  ngOnInit(): void {
  }


  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    params.columnApi.setColumnsVisible(['Publishing'],false)
  }


}

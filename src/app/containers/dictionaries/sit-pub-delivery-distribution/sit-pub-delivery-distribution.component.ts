import { Component, OnInit, ViewChild, ViewChildren, QueryList, LOCALE_ID, Inject } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'sit-pub-delivery-distribution',
  templateUrl: './sit-pub-delivery-distribution.component.html',
  styleUrls: ['./sit-pub-delivery-distribution.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubDeliveryDistributionComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition['sitPubDeliveryDistrybution'] = [
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
      { headerName: 'Wyd.', field: 'Publishing', filter: 'agTextColumnFilter', width: 70, enableRowGroup: true, defaultVisibility: true,
        cellClass: ['font12','textFormat'] 
      },
      { headerName: 'Promocja', field: 'SalePromoFor',tooltipField: 'SalePromoFor' , filter: 'agTextColumnFilter', width: 100, enableRowGroup: true,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Rynki', field: 'Markets',tooltipField: 'Markets' , filter: 'agTextColumnFilter', width: 80, enableRowGroup: true,
        cellClass: ['font12','textFormat']
      },
      { headerName: 'Data wyd', field: 'ReleaseDateAct', filter: 'agDateColumnFilter', width: 100, enableRowGroup: true,
        renderType: 'date',
        cellClass: ['font12','dateFormat']
      },
      { headerName: 'Ceny',
        children: [
          { headerName: 'Detal.', field: 'DetailPrice', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            renderType: 'number', renderFormat: '1.2-2',
            cellClass: ['font12','numberFormat2Dec']
          },
          { headerName: 'Zakupu', field: 'PurchacePrice', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            renderType: 'number', renderFormat: '1.2-2',
            cellClass: ['font12','numberFormat2Dec']
          },
        ]
      },
      { headerName: 'Dostawy', field: 'DeliveryQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: 'Sprzedaż', field: 'SaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: '% dost.', field: 'DeliveryPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
        renderType: 'percent', renderFormat: '1.0-0',
        cellClass: ['font12','numberFormatPercent']
      },
      { headerName: 'Stan ogółem', field: 'AllStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 110, enableValue: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: 'Stan A100', field: 'WMSStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 110, enableValue: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: 'Stan dysp.', field: 'WMSStockAv', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
        renderType: 'number', renderFormat: '1.0-0',
        cellClass: ['font12','numberFormatInt']
      },
      { headerName: 'Rozdysponowano',
        children: [
          { headerName: 'Ilość', field: 'DistributedQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            renderType: 'number', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
            cellClass: ['font12','blueBackground','numberFormatInt'],
          },
          { headerName: '% dost.', field: 'DistributedPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            renderType: 'percent', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} },
            cellClass: ['font12','blueBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Konsygnacja',
        children: [
          { headerName: 'Ilość', field: 'ConsignmentQuantitySum', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            renderType: 'number', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '% rozdysp.', field: 'ConsignmentPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            renderType: 'percent', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground',,'numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Sprzedaż',
        children: [
          { headerName: 'Ilość', field: 'SaleQuantitySum', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            renderType: 'number', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font12','greenBackground','numberFormatInt'],
          },
          { headerName: '% rozdysp.', field: 'SalePercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            renderType: 'number', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} },
            cellClass: ['font12','greenBackground',,'numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Hania',
        children: [
          { headerName: 'Konsygn.', field: 'HConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'Sprzedaż', field: 'HSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellClass: ['font12','numberFormatInt',],
          },
          { headerName: 'PZR', field: 'HPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '%', field: 'HPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            renderType: 'percent', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Zbyszek',
        children: [
          { headerName: 'Konsygn.', field: 'ZConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'Sprzedaż', field: 'ZSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'PZR', field: 'ZPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '%', field: 'ZPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            renderType: 'percent', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Dorota',
        children: [
          { headerName: 'Konsygn.', field: 'DConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'Sprzedaż', field: 'DSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellClass: ['font12','numberFormatInt'],
          },
          { headerName: 'PZR', field: 'DPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatInt'],
          },
          { headerName: '%', field: 'DPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            renderType: 'percent', renderFormat: '1.0-0',
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} },
            cellClass: ['font12','pinkBackground','numberFormatPercent'],
          },
        ]
      },
      { headerName: 'Pozostałe',
        children: [
          { headerName: 'Sprzedaż', field: 'OSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            renderType: 'number', renderFormat: '1.0-0',
            cellClass: ['font12','numberFormatInt'],
           },
        ]
      }
    ]
   }

  ngOnInit(): void {
  }




}

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
  selector: 'sit-pub-delivery-distribution',
  templateUrl: './sit-pub-delivery-distribution.component.html',
  styleUrls: ['./sit-pub-delivery-distribution.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPubDeliveryDistributionComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  rowSelection;
  popupParent;
  defaultColDef;

  gridApi;
  gridColumnApi;
  columnDefs;

  constructor(
    private gatewayService: GatewayService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'Kartoteka',
        children: [
          { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, pinned: 'left' },
          { headerName: 'Status', headerTooltip: 'Premiera, Nowość, Dodruk', field: 'ProjectStatus', filter: 'agTextColumnFilter', width: 70, pinned: 'left', enableRowGroup: true, },
          { headerName: 'Opis', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 200, pinned: 'left' },
        ]
      },
      { headerName: 'Wyd.', field: 'Publishing', filter: 'agTextColumnFilter', width: 80, enableRowGroup: true, },
      { headerName: 'Rynki', field: 'Markets',tooltipField: 'Markets' , filter: 'agTextColumnFilter', width: 80, enableRowGroup: true, },
      { headerName: 'Data wyd', field: 'ReleaseDateAct', filter: 'agDateColumnFilter', width: 100, enableRowGroup: true,
        cellRenderer: function(params) { return formatDate(params.value, 'yyyy-MM-dd', locale) }
      },
      { headerName: 'Ceny',
        children: [
          { headerName: 'Detal.', field: 'DetailPrice', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.2-2') }
          },
          { headerName: 'Zakupu', field: 'PurchacePrice', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.2-2') }
          },
        ]
      },
      { headerName: 'Dostawy', field: 'DeliveryQuantity', type: 'numericColumn', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
      },
      { headerName: 'Sprzedaż', field: 'SaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
      },
      { headerName: '% dost.', field: 'DeliveryPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
        cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' }
      },
      { headerName: 'Stan ogółem', field: 'AllStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 110, enableValue: true, },
      { headerName: 'Stan A100', field: 'WMSStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 110, enableValue: true, },
      { headerName: 'Stan dysp.', field: 'WMSStockAv', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100, enableValue: true,
      },
      // { headerName: 'OtherStock', field: 'OtherStock', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
      //   cellRenderer: function(params) { return formatNumber(params.value, locale,'1.2-2') }
      // },
      { headerName: 'Rozdysponowano',
        children: [
          { headerName: 'Ilość', field: 'DistributedQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} }
          },
          { headerName: '% dost.', field: 'DistributedPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#cce6ff'} }
          },
        ]
      },
      { headerName: 'Konsygnacja',
        children: [
          { headerName: 'Ilość', field: 'ConsignmentQuantitySum', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
          { headerName: '% rozdysp.', field: 'ConsignmentPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
        ]
      },
      { headerName: 'Sprzedaż',
        children: [
          { headerName: 'Ilość', field: 'SaleQuantitySum', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90, enableValue: true,
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} }

          },
          { headerName: '% rozdysp.', field: 'SalePercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 90,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#d6f5d6'} }

          },
        ]
      },
      { headerName: 'Hania',
        children: [
          { headerName: 'Konsygn.', field: 'HConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
          },
          { headerName: 'Sprzedaż', field: 'HSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
          },
          { headerName: 'PZR', field: 'HPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
          { headerName: '%', field: 'HPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
        ]
      },
      { headerName: 'Zbyszek',
        children: [
          { headerName: 'Konsygn.', field: 'ZConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
          },
          { headerName: 'Sprzedaż', field: 'ZSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
          },
          { headerName: 'PZR', field: 'ZPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
          { headerName: '%', field: 'ZPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
        ]
      },
      { headerName: 'Dorota',
        children: [
          { headerName: 'Konsygn.', field: 'DConsignmentQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
          },
          { headerName: 'Sprzedaż', field: 'DSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
          },
          { headerName: 'PZR', field: 'DPZRQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100,
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
          { headerName: '%', field: 'DPercent', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 80,
            cellRenderer: function(params) { return formatNumber(params.value, locale,'1.0-0')+'%' },
            cellStyle: function(params) { return {backgroundColor: '#ffe6e6'} }
          },
        ]
      },
      { headerName: 'Pozostałe',
        children: [
          { headerName: 'Sprzedaż', field: 'OSaleQuantity', type: 'rightAligned', filter: 'agNumberColumnFilter', autoHeight: true, width: 100 },
        ]
      }
    ]
   }

  ngOnInit(): void {
  }

  onFirstDataRendered(params) {
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridColumnApi.setColumnsVisible(['Publishing'],false)
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitPubDeliveryDistrybution');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }


}

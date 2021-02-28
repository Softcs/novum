import { formatDate, formatNumber } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-sit-grid-cell-renderer',
  templateUrl: './sit-grid-cell-renderer.component.html',
  styleUrls: ['./sit-grid-cell-renderer.component.scss']
})
export class SitGridCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  value: any;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
  ) {}

  agInit(params: any): void {
    this.params = params;
    this.value = this.getValueToDisplay(params);
  }

  refresh(): boolean {
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    var valueFormated: any;

    valueFormated = params.value;

    if ( params.colDef?.type.includes('date') ) {
      valueFormated = valueFormated ? formatDate(params.value, 'yyyy-MM-dd', this.locale) : '';
    }
    if ( params.colDef?.type.includes('datetime') ) {
      valueFormated = valueFormated ? formatDate(params.value, 'yyyy-MM-dd HH:mm', this.locale) : '';
    }
    if ( params.colDef?.type.includes('money') ) {
      valueFormated = formatNumber(params.value, this.locale,'1.2-2').replace(/[,]/g,' ');
    }
    if ( params.colDef?.type.includes('int') ) {
      valueFormated = formatNumber(params.value, this.locale,'1.0-0').replace(/[,]/g,' ');
    }
    return valueFormated;
  }


}

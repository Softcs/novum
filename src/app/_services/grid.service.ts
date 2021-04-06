import { Injectable } from '@angular/core';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  columnDefs;

  constructor() {
   }

  public setDefGridOptionsOnReady(grid) {
    grid.api.gridOptionsWrapper.gridOptions.tooltipShowDelay = 0;
    //grid.api.gridOptionsWrapper.gridOptions.enableBrowserTooltips = true
  }

  public setDefGridOptions( grid ) {
    this.columnDefs = grid.api.getColumnDefs()

    this.columnDefs.forEach(columnDef => {
      if( !columnDef.hasOwnProperty('sortable') ) { columnDef.sortable = true; }
      if( !columnDef.hasOwnProperty('resizable') ) { columnDef.resizable = true; }
      //if( !columnDef.hasOwnProperty('autoHeight') ) { columnDef.autoHeight = true; }
    });

    grid.api.setColumnDefs(this.columnDefs);
    grid.gridOptions.excelStyles = sitGlobalConfig.excelStyles;

    if ( !grid.gridOptions.rowSelection ) {
      grid.gridOptions.rowSelection = 'multiple';
    }

    if ( !grid.gridOptions.rowMultiSelectWithClick ) {
      grid.gridOptions.rowMultiSelectWithClick = false;
    }

    if ( !grid.gridOptions.suppressCopyRowsToClipboard ) {
      grid.gridOptions.suppressCopyRowsToClipboard = true;
    }
  }
}


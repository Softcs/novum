import { Injectable } from '@angular/core';

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
      if( !columnDef.sortable ) { columnDef.sortable = true; }
      if( !columnDef.resizable ) { columnDef.resizable = true; }
      if( !columnDef.autoHeight ) { columnDef.autoHeight = true; }
    });

    grid.api.setColumnDefs(this.columnDefs);

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


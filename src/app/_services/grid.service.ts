import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  columnDefs;

  constructor() {
   }

  public setDefGridOptions( gridApi ) {

    this.columnDefs = gridApi.gridOptionsWrapper.getColumnDefs()

    this.columnDefs.forEach(element => {
      if(!element.sortable) { element.sortable = true; }
      if(!element.filter) { element.filter = true; }
      if(!element.resizable) { element.resizable = true; }
      if(!element.autoHeight) { element.autoHeight = true; }
    });
    gridApi.setColumnDefs(this.columnDefs);

    if ( !gridApi.gridOptionsWrapper.gridOptions.tooltipShowDelay ) {
      gridApi.gridOptionsWrapper.gridOptions.tooltipShowDelay = 100;
    }

    if ( !gridApi.gridOptionsWrapper.gridOptions.tooltipShowDelay ) {
      gridApi.gridOptionsWrapper.gridOptions.enableBrowserTooltips = true;
    }

    if ( !gridApi.gridOptionsWrapper.gridOptions.rowSelection ) {
      gridApi.gridOptionsWrapper.gridOptions.rowSelection = 'multiple';
    }

    if ( !gridApi.gridOptionsWrapper.gridOptions.rowMultiSelectWithClick ) {
      gridApi.gridOptionsWrapper.gridOptions.rowMultiSelectWithClick = false;
    }

    if ( !gridApi.gridOptionsWrapper.gridOptions.enableCellTextSelection ) {
      gridApi.gridOptionsWrapper.gridOptions.enableCellTextSelection = false;
    }

    if ( !gridApi.gridOptionsWrapper.gridOptions.suppressCopyRowsToClipboard ) {
      gridApi.gridOptionsWrapper.gridOptions.suppressCopyRowsToClipboard = true;
    }

    if ( !gridApi.gridOptionsWrapper.gridOptions.enableRangeSelection ) {
      gridApi.gridOptionsWrapper.gridOptions.enableRangeSelection = true;
    }

    //console.log(gridApi)
  }

}


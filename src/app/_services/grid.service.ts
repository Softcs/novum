import { formatDate, formatNumber } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  columnDefs;

  constructor(@Inject(LOCALE_ID) protected locale: string) {
  }

  
  private formatColumn(column: any, locale: string) {
    var renderFormat = column["renderFormat"];

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

    if (column.renderType == "percent") {
      if (!renderFormat) {
        renderFormat = '1.2-2';
      }

      column["cellRenderer"] = function(params) {
        return params.value === null ? null : formatNumber(params.value, locale, renderFormat).replace(/[,]/g,' ') + '%';
      }
    }

    if (column.renderType == "sitGridCellRenderer") {
      column["cellRendererFramework"] = sitGlobalConfig.frameworkComponents
    }
  }

  private applyRender4Columns(columns) {
    var renderColumns = columns.filter(c => c.renderType);
    renderColumns.forEach(column => {
      this.formatColumn(column, this.locale);
    });
  }


  public setDefGridOptionsOnReady(grid) {
    grid.api.gridOptionsWrapper.gridOptions.tooltipShowDelay = 0;
    //grid.api.gridOptionsWrapper.gridOptions.enableBrowserTooltips = true
  }

  public setDefGridOptions(grid) {
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
  
  public isPivotMode(gridApi) {
    return gridApi != null && gridApi.gridOptionsWrapper.gridOptions.pivotMode;
  }

  public getGridApi(element) {
    return element && element.hasOwnProperty("api")
           ? element["api"]
           : null;
 }

 public prepareGrid(gridApi, ident, gridColumnsDefinition, popupParent) {
  if (!gridApi.getColumnDefs() || gridApi.getColumnDefs().length == 0) {
    var columns = gridColumnsDefinition[ident];
    this.applyRender4Columns(columns);
    
    //for children columns
    var columnsWithChildren = columns.filter(c => c.children);
    columnsWithChildren.forEach(column => {
      this.applyRender4Columns(column.children);
    });

    gridApi.setColumnDefs(columns);
    var hiddenColumns = columns.filter(c => c.defaultVisibility === false).map(c => c.field);
    gridApi.columnController.setColumnsVisible(hiddenColumns, false);
  }
  
  gridApi.setPopupParent(popupParent);
 }
}


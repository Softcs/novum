import { formatDate, formatNumber } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';
import { StringUtils } from '@app/_helpers/string.utisl';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  columnDefs;

  constructor(
    @Inject(LOCALE_ID) protected locale: string,
    private stringUtils: StringUtils
  ) {
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

 public applyCustomPropsGrid(dataSetContainer: SitDataSetContainerComponent, gridApi) {
    var self = dataSetContainer;    

    var customProperty = gridApi.SeidoCustomProperty;
    if (customProperty == null) {
      customProperty = {};
      customProperty.activeRow = null;
      if (gridApi.gridOptionsWrapper) {
        var gridOptions = gridApi.gridOptionsWrapper.gridOptions;
        var rowClassRules = gridApi.gridOptionsWrapper.rowClassRules();
        if (!rowClassRules) {
          rowClassRules = {};
          gridOptions.rowClassRules = rowClassRules;
        }

        rowClassRules["sit-row-active"] = function(params) {
            return params.api.SeidoCustomProperty.activeRow == params.node.data;
        }

        var isPivotMode = this.isPivotMode(gridApi);
        gridOptions.onRowClicked = function(event) {
          if (!isPivotMode) {
            self.dataSetResponseWrapper.SetActiveRow(event.data);
          }
        }

        gridOptions.onCellClicked = function(event) {
          if (isPivotMode && event.colDef.pivotKeys) {
            const index = event.colDef.pivotKeys-1;
            const rowFromCell = event.node.allLeafChildren[index].data;
            self.dataSetResponseWrapper.SetActiveRow(rowFromCell);
          }
        }

        this.prepareGrid(gridApi, dataSetContainer.ident, dataSetContainer.dataSetControlsManager.gridColumnsDefinition, dataSetContainer.dataSetControlsManager.popupParent);
      }

      gridApi.SeidoCustomProperty = customProperty;

      dataSetContainer.activeRowChanged.subscribe(row => {
        var prevRow = customProperty.activeRow;
        customProperty.activeRow = row;
        var rowsToUpdate = [];

        if (row) {
          rowsToUpdate.push(row);
        }

        if (prevRow && row) {
          rowsToUpdate.push(prevRow);
        }

        this.redrawGridActiveRow(dataSetContainer, gridApi, prevRow);
      });
    }
  }

  public redrawGridActiveRow(dataSetContainer: SitDataSetContainerComponent, gridApi: any, prevRow: any) {
    if (!dataSetContainer.activeRow || !gridApi || this.isPivotMode(gridApi)) {
      return;
    }

    let limit = prevRow ? 2 : 1;
    const fieldName = dataSetContainer.getFieldId(dataSetContainer.ident);
    const fieldValue = dataSetContainer.activeRow[fieldName];
    const prevValue = prevRow ? prevRow[fieldName] : null;
    gridApi.forEachNode( (rowNode) => {
      const rowValue = rowNode.data[fieldName];
      if (this.stringUtils.compareStrings(rowValue, fieldValue) || this.stringUtils.compareStrings(rowValue, prevValue)) {
        rowNode.setData(rowNode.data);
        limit--;
      }

      if (limit == 0) {
        return false;
      }
    });
  }
}


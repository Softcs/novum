import { formatDate, formatNumber } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { sitGlobalConfig } from '@app/_consts/sit-global-config';
import { StringUtils } from '@app/_helpers/string.utisl';
import { DataSetWrapper } from '@app/_models';
import { DataSetDefinitionWrapper } from '@app/_models/dataSetDefinitionWrapper';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  columnDefs;
  defaultColumns = {
    flex: 1,
    minWidth: 100,
    resizable: true,
    headerCheckboxSelection: this.isFirstColumn,
    checkboxSelection: this.isFirstColumn,
  };
  constructor(
    @Inject(LOCALE_ID) protected locale: string,
    private stringUtils: StringUtils
  ) {
  }

  private formatColumn(column: any, locale: string) {
    var renderFormat = column["renderFormat"];

    if (column.renderType == "checkbox") {
      column["cellRenderer"] = function(params) {
        var input = document.createElement("input");
            input.type = "checkbox";
            input.checked = params.value;
            input.indeterminate =  params.value == null;
            input.addEventListener("click", function(event) {
              event.preventDefault();
            });
        return input;
      }
    }

    if (column.renderType == "date") {
      if (!renderFormat) {
        renderFormat = 'yyyy-MM-dd';
      }

      column["cellRenderer"] = function(params) {
        return params.value ? formatDate(params.value, renderFormat, locale) : null;
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

  public isFirstColumn(params) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }

  public onSelectionChanged(dataSetWrapper: DataSetWrapper, gridOptions) {
    const selectedRows = gridOptions.api.getSelectedRows();
    console.log("selectedRows", selectedRows.length);
    dataSetWrapper.selectedRows = selectedRows;
  }

  public selectionOptionInit(dataSetWrapper: DataSetWrapper, gridOptions) {
    var self = this;
    gridOptions.defaultColDef = this.defaultColumns;
    gridOptions.suppressRowClickSelection = true;
    gridOptions.rowSelection = 'multiple';
    gridOptions.rowMultiSelectWithClick = true;
    gridOptions.onSelectionChanged = () => {
      self.onSelectionChanged(dataSetWrapper, gridOptions);
    }
  }

  public setDefGridOptionsOnReady(grid) {
    grid.api.gridOptionsWrapper.gridOptions.tooltipShowDelay = 0;
    //grid.api.gridOptionsWrapper.gridOptions.enableBrowserTooltips = true
  }

  public setDefGridOptions(grid) {
    this.columnDefs = grid.api.getColumnDefs();
    this.columnDefs.forEach(columnDef => {
      if( !columnDef.hasOwnProperty('sortable') ) { columnDef.sortable = true; }
      if( !columnDef.hasOwnProperty('resizable') ) { columnDef.resizable = true; }
      //if( !columnDef.hasOwnProperty('autoHeight') ) { columnDef.autoHeight = true; }
    });

    grid.api.setColumnDefs(this.columnDefs);
    grid.gridOptions.excelStyles = sitGlobalConfig.excelStyles;

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

 public prepareGrid(dataSetWrapper: DataSetWrapper, gridApi, ident, gridColumnsDefinition, popupParent, gridOptions, activateSelectedMode: boolean) {
   if (gridOptions && activateSelectedMode) {
     this.selectionOptionInit(dataSetWrapper, gridOptions);
   }
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

 public applyCustomPropsGrid(dataSetContainer: SitDataSetContainerComponent, gridApi, activateSelectedMode: boolean) {
    var self = dataSetContainer;

    var customProperty = gridApi.SeidoCustomProperty;
    if (customProperty == null) {
      customProperty = {};
      customProperty.activeRow = null;
      var gridOptions = gridApi.gridOptionsWrapper ? gridApi.gridOptionsWrapper.gridOptions : null;
      if (gridOptions) {
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

        this.prepareGrid(dataSetContainer.dataSetResponseWrapper, gridApi, dataSetContainer.ident, dataSetContainer.dataSetControlsManager.gridColumnsDefinition, dataSetContainer.dataSetControlsManager.popupParent, gridOptions, activateSelectedMode);
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

  public refreshSum(gridApi, rows) {
    var columns =    gridApi.gridOptionsWrapper.gridOptions.columnApi.getAllColumns();
    var agrColumns = columns.filter( c => c.colDef.agr);
    if (!agrColumns || agrColumns.length == 0 || !rows || rows.length == 0) {
      return;
    }

    var agrRow = {};
    agrColumns.forEach(c  => agrRow[c.colDef.field] = 0);
    rows.reduce((acc, row) => {
      agrColumns.forEach(c  => agrRow[c.colDef.field] += row[c.colDef.field]);
    },0);
    gridApi.setPinnedBottomRowData([agrRow]);
  }
}

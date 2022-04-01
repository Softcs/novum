import { Component, Input, ContentChildren, ViewChildren,
  QueryList, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import { DataSetWrapper, DataSetManager } from '@app/_models';
import { SitDataBaseComponent } from '../controls/sit-data-base/sit-data-base.component';
import { sitSetDataSetDirective } from '@app/_directives/sitSetDataSetDirective';
import { DataSetDefinitionWrapper } from '@app/_models/dataSetDefinitionWrapper';
import { SitActionDirective } from '@app/_directives';
import { SitRefreshButtonComponent } from '../controls/sit-refresh-button/sit-refresh-button.component';
import { SitFilesButtonComponent } from '../controls/sit-files-button/sit-files-button.component';
import { SitButtonBaseComponent } from '../controls/sit-button-base/sit-button-base.component';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { Subscription } from 'rxjs';
import { SitActionsToolbarComponent } from '../controls/sit-actions-toolbar/sit-actions-toolbar.component';
import { GridService } from '@app/_services/grid.service';
import { StringUtils } from '@app/_helpers/string.utisl';

@Component({
  selector: 'sit-data-set-container',
  templateUrl: './sit-data-set-container.component.html',
  styleUrls: ['./sit-data-set-container.component.scss']
})

export class SitDataSetContainerComponent implements AfterViewInit{
  private _errors: any[] = [];
  private activeRowSubscription: Subscription;
  private identityFieldName: string = "__Identity__";
  private grids: [];
  dataSetResponseWrapper: DataSetWrapper;

  @ContentChildren('sitSetDataSource', { descendants: true})
  datasSourcesInterface: QueryList<sitSetDataSetDirective>;

  @ContentChildren('sitControl', { descendants: true })
  databaseControlsInterface!: QueryList<SitDataBaseComponent>;

  @ContentChildren('sitAction',  { descendants: true })
  actionControlsInterface!: QueryList<SitActionDirective>;

  @ContentChildren(SitRefreshButtonComponent, { descendants: true })
  refreshButtons!: QueryList<SitRefreshButtonComponent>;

  @ViewChild('sitActionToolbar', { static: false })
  actionToolbar: SitActionsToolbarComponent;

  @ContentChildren(SitFilesButtonComponent, { descendants: true })
  filesButtons!: QueryList<SitFilesButtonComponent>;

  @Input()
  ident: string;

  @Input()
  showActionsToolbar: boolean = false; // czy pokazywac w widoku actions-toolbar

  @Input()
  gridColumnsIdent: string; // identyfikator kolumn - jak pusty to bierze ident

  public hasRights: boolean = false;

  @Output()
  activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  afterPropagte: EventEmitter<string> = new EventEmitter<string>();

  public dataSetControlsManager: DataSetManager;

  constructor(
    private gridService: GridService,
    private stringUtils: StringUtils
  ) {}

  ngAfterViewInit(): void {
     this.databaseControlsInterface.changes.subscribe(change => {
        this.refreshFieldValueInControl(true);
     });
     this.datasSourcesInterface.forEach(element => {
      const gridApi = this.gridService.getGridApi(element);
      this.gridService.afterViewInit(gridApi);
    });
  }

  clearErrors() {
    this.errors?.splice(0, this.errors?.length);
  }

  get activeRow(): any {
    return this.dataSetResponseWrapper?.activeRow;
  }

  public SetActiveRow(row: any) {
      this.dataSetResponseWrapper.SetActiveRow(row);
  }

  public setErrors(errors: any[]) {
    this.errors = errors;
    if (this.errors) {
      console.log('Errors', this.errors);
    }
  }

  public getFieldId(ident: string = null) {
    return this.dataSetResponseWrapper.getFieldId();
  }
  public getFieldIdValue(row : any = null) {
    return this.dataSetResponseWrapper.getFieldIdValue(row);
  }

  private deleteRows(dataSource) {
    if (!dataSource) {
      return;
    }

    const activeRow = dataSource.activeRow;
    if (!activeRow) {
      return;
    }

    const fieldName = this.getFieldId(dataSource.ident);
    this.datasSourcesInterface.forEach(control => {
      const rowsDataApiToDelete = [];
      const fieldValue = activeRow[fieldName];
      const gridApi = this.gridService.getGridApi(control);
      if (!this.gridService.isPivotMode(gridApi)) {
        gridApi.forEachNode((rowNode) => {
          const rowValue = rowNode.data[fieldName];
          if (this.stringUtils.compareStrings(rowValue, fieldValue)) {
            rowsDataApiToDelete.push(rowNode.data);
          }
        });
        if (rowsDataApiToDelete) {
          gridApi.applyTransaction({ remove: rowsDataApiToDelete });
          this.dataSetResponseWrapper.removeSelectedRow(rowsDataApiToDelete);
        }
      }
    });
  }

  public refreshRows(dataSetWrapper: DataSetWrapper, dataSourcesRequest) {
    if (!dataSetWrapper || !dataSetWrapper.rows) {
      dataSourcesRequest?.forEach(element => {
        if (dataSetWrapper.ident == element.ident) {
          this.deleteRows(element);
        }
      });

      return;
    }

    var fieldName = this.getFieldId(dataSetWrapper.ident);
    let rowsToUpdate = [];
    const rowsApiToUpdate = [];

    this.datasSourcesInterface.forEach(control => {
      dataSetWrapper.rows.forEach(inputRow => {
        if(inputRow.hasOwnProperty(this.identityFieldName)) {
          fieldName = this.identityFieldName;
        }

        const fieldValue = inputRow[fieldName];
        if (control.hasOwnProperty("api")) {
          const gridApi = control["api"];
          gridApi.forEachNode( (rowNode) => {
            const rowValue = rowNode.data[fieldName];
            if (this.stringUtils.compareStrings(rowValue, fieldValue)) {
              // tslint:disable-next-line: forin
              for (const key in inputRow) {
                const newValue = inputRow[key];
                rowNode.data[key] = newValue;
                rowsApiToUpdate.push(rowNode);
              }
            }
          });
          gridApi.redrawRows({ rowNodes: rowsApiToUpdate });
        } else {
          rowsToUpdate = control.rows.filter(controlRow => controlRow[fieldName] == fieldValue);
        }

        rowsToUpdate.forEach(row => {
          // tslint:disable-next-line: forin
          for (const key in inputRow) {
            const newValue = inputRow[key];
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              if (this.activeRow === row) {
                this.activeRow[key] = newValue;
              }
              row[key] = newValue;
            }
          }
        });
      });
    });
  }

  public setDataSource(dataSetWrapper: DataSetWrapper) {
    this.hasRights = dataSetWrapper != null;

    this.dataSetResponseWrapper = dataSetWrapper;

    if (!this.activeRowSubscription) {
        this.activeRowSubscription = this.dataSetResponseWrapper.activeRowChanged.subscribe(
            (row) => this.activeRowChanged.emit(row));
    }

    this.errors = dataSetWrapper.errors;
    this.datasSourcesInterface.forEach(element => {
      // agGrid
      const gridApi = this.gridService.getGridApi(element);
      if (!gridApi) {
        return false;
      }

      this.gridService.applyCustomPropsGrid(this, gridApi, this.dataSetResponseWrapper.hasActionForSelectedRows);
      // tree grid - parsowanie kolumny z danymi do drzewa //TODO find diffirent way to do the same except iteration of all rows
      if (this.dataSetResponseWrapper.rows) {
        this.dataSetResponseWrapper.rows.forEach(element => {
          if (element['dataPath']) { element['dataPath'] = JSON.parse(element['dataPath']);}
        });
      }
      // end of tree grid
      gridApi.setRowData(this.dataSetResponseWrapper.rows);
      this.gridService.refreshSum(gridApi, this.dataSetResponseWrapper.rows);
    });
    this.refreshFieldValueInControl();
  }

  public refreshFieldValueInControl(skipInited : boolean = false): void {
    if (this.databaseControlsInterface != null) {
      this.databaseControlsInterface.forEach(control => {
        if (skipInited && control.dataSetWrapper != null) {
          return false;
        }

        this.dataSetResponseWrapper.refreshFieldValueInControl(control);
      });
    }
  }

  public AddRow(newRow: any) {
    this.datasSourcesInterface.forEach(control => {
        const gridApi = this.gridService.getGridApi(control)

        if (!gridApi) {
          return false;
        }

        gridApi.applyTransaction({ add: [newRow] });
      });
  }

  public RemoveRow(newRow: any) {
    this.datasSourcesInterface.forEach(control => {
        const gridApi = this.gridService.getGridApi(control)

        if (!gridApi) {
          return false;
        }

        gridApi.applyTransaction({ remove: [newRow] });
      });
  }

  private pepareControlForButtons(buttons: QueryList<SitButtonBaseComponent>) {
    if (buttons) {
      buttons.forEach(button => {
        button.setDataSetWrapper(this.dataSetResponseWrapper);
      });
    }
  }

  public afterContentInit() {
    this.datasSourcesInterface.forEach(element => {
      if (element["gridReady"]) {
        element["gridReady"].subscribe((params) => {
          this.gridService.setDefGridOptionsOnReady(params);
          //params.columnApi.setColumnsVisible(['sitCompanyDepartmentsId','sitCompanyDepartmentsG'], false)
        });
      }
    });

  }

  public prepareControls(dataSetWrapperDefinition: DataSetDefinitionWrapper, allowActionFromLocalDefinition: boolean = false) {
    this.datasSourcesInterface.forEach(element => {
      const gridApi = this.gridService.getGridApi(element);
      if (!gridApi) {
        return false;
      }

      this.gridService.setDefGridOptions(element);
    });

    this.actionControlsInterface.forEach(actionControl => {
      actionControl.dataSetResponseWrapper = this.dataSetResponseWrapper;
      actionControl.actionDefinition = this.getActionDefinitionForControl(actionControl.actionIdent, dataSetWrapperDefinition, allowActionFromLocalDefinition);
      actionControl.dataSetManagerSource = this.dataSetControlsManager;
      actionControl.dataSetContainer = this;
    });

    this.pepareControlForButtons(this.refreshButtons);
    this.pepareControlForButtons(this.filesButtons);

    if (this.actionToolbar) {
      this.actionToolbar.dataSetResponseWrapper = this.dataSetResponseWrapper;
      this.actionToolbar.dataSetManagerSource = this.dataSetControlsManager;
      this.actionToolbar.actions = dataSetWrapperDefinition && dataSetWrapperDefinition.actions ? dataSetWrapperDefinition.actions.filter(a => a.showInToolbar) : [];
    }
  }

  private getActionDefinitionForControl(actionIdent: string, dataSetWrapperDefinition: DataSetDefinitionWrapper, allowActionFromLocalDefinition): ActionDefinitionWrapper {
    var actionDefinition = null;
    if (allowActionFromLocalDefinition) {
      var localWrapper = this.dataSetResponseWrapper.getDataSetManagerSource()?.findDataSetDefinitionWrapper(this.dataSetResponseWrapper.ident);
      actionDefinition = localWrapper.FindActionDefinition(actionIdent);
    }
    if (!actionDefinition) {
      actionDefinition = dataSetWrapperDefinition?.FindActionDefinition(actionIdent);
    }
    return actionDefinition;
  }

  set errors(value: any[]) {
    this._errors = value;
  }

  get errors(): any[] {
    return this._errors;
  }

  closeError(error: any) {
    const index = this._errors?.indexOf(error);
    this.errors?.splice(index, 1);
  }

  public setDataSetManager(dataSetControlsManager: DataSetManager) {
    this.dataSetControlsManager = dataSetControlsManager;
  }
  //funkcja callbackowa do filtrowania czy akcja powinna byc wystwietlona na toolbarze
  showActionOnToolbar(action: ActionDefinitionWrapper): boolean {
    if(action != null) {
      return action.showInToolbar;
    } else
      return false;
  }

  public detachEvents() {
    this.databaseControlsInterface.forEach(control => {
      control.detachEvents();
    });
  }
}

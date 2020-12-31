import { Component, Input, ContentChildren, ViewChildren,
  QueryList, Output, EventEmitter} from '@angular/core';
import { GatewayService } from '@app/_services/gateway.service';
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

@Component({
  selector: 'sit-data-set-container',
  templateUrl: './sit-data-set-container.component.html',
  styleUrls: ['./sit-data-set-container.component.scss']
})

export class SitDataSetContainerComponent {
  private _errors: any[];
  private activeRowSubscription: Subscription;

  @ContentChildren('sitSetDataSource', { descendants: true})
  datasSourcesInterface: QueryList<sitSetDataSetDirective>;

  @ContentChildren('sitControl', { descendants: true })
  databaseControlsInterface!: QueryList<SitDataBaseComponent>;
  @ViewChildren('sitAction')
  actionControlsInterface!: QueryList<SitActionDirective>;

  @ContentChildren(SitRefreshButtonComponent, { descendants: true })
  refreshButtons!: QueryList<SitRefreshButtonComponent>;

  @ContentChildren(SitFilesButtonComponent, { descendants: true })
  filesButtons!: QueryList<SitFilesButtonComponent>;

  @Input() ident: string;
  dataSetResponseWrapper: DataSetWrapper;
  @Input() showActionsToolbar: boolean = false; // czy pokazywac w widoku actions-toolbar

  @Output()
  activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  afterPropagte: EventEmitter<string> = new EventEmitter<string>();

  actionsTable: ActionDefinitionWrapper[] = null; //tabela akcji do wyświetlenia w actions-toolbar

  public dataSetControlsManager: DataSetManager;

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

  private getFieldId(ident: string) {
    return ident + 'G';
  }

  private compareStrings(one,two): boolean {
    return one != null && one.localeCompare(two, undefined, { sensitivity: 'base' }) === 0;
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
      const fieldValue = activeRow[fieldName];
      const gridApi = control["api"];
      const rowsDataApiToDelete = [];
      if (gridApi) {
        gridApi.forEachNode((rowNode) => {
          const rowValue = rowNode.data[fieldName];
          if (this.compareStrings(rowValue, fieldValue)) {
            rowsDataApiToDelete.push(rowNode.data);
          }
        });
        if (rowsDataApiToDelete) {
          gridApi.applyTransaction({ remove: rowsDataApiToDelete });
        }
      }
    });
  }

  private appluCustomPropsGrid(element) {
    const gridApi = element["api"];
    if (gridApi == null) {
      return null;
    }
    var customProperty = gridApi.SeidoCustomProperty;
    if (customProperty == null) {
      customProperty = {};
      customProperty.activeRow = null;
      if (gridApi.gridOptionsWrapper) {
        var rowClassRules = gridApi.gridOptionsWrapper.rowClassRules();
        if (!rowClassRules) {
          rowClassRules = {};
          gridApi.gridOptionsWrapper.gridOptions.rowClassRules = rowClassRules;
        }

        rowClassRules["sit-row-active"] = function(params) {
            return params.api.SeidoCustomProperty.activeRow == params.node.data;
        }
      }


      gridApi.SeidoCustomProperty = customProperty;
      this.activeRowChanged.subscribe( (row) => {
        var prevRow = customProperty.activeRow;
        customProperty.activeRow = row;
        var rowsToUpdate = [row];
        if (prevRow) {
          rowsToUpdate.push(prevRow);
        }
        gridApi.applyTransaction({update:rowsToUpdate});
      });
    }
    return customProperty;
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

    const fieldName = this.getFieldId(dataSetWrapper.ident);
    let rowsToUpdate = [];
    const rowsApiToUpdate = [];

    this.datasSourcesInterface.forEach(control => {
      dataSetWrapper.rows.forEach(inputRow => {
        const fieldValue = inputRow[fieldName];
        const gridApi = control["api"];
        if (gridApi) {
          gridApi.forEachNode( (rowNode) => {
            const rowValue = rowNode.data[fieldName];
            if (this.compareStrings(rowValue, fieldValue)) {
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
    this.dataSetResponseWrapper = dataSetWrapper;

    if (!this.activeRowSubscription) {
        this.activeRowSubscription = this.dataSetResponseWrapper.activeRowChanged.subscribe(
            (row) => this.activeRowChanged.emit(row));
    }

    this.errors = dataSetWrapper.errors;
    this.datasSourcesInterface.forEach(element => {
      // agGrid
      this.appluCustomPropsGrid(element);
      const gridApi = element["api"];
      if (gridApi) {
        this.dataSetResponseWrapper.rows.forEach(element => {
          if (element['dataPath']) { element['dataPath'] = JSON.parse(element['dataPath']);}
        });
        gridApi.setRowData(this.dataSetResponseWrapper.rows);
      }
    });
    this.refreshFieldValueInControl();
  }

  public refreshFieldValueInControl(): void {
    if (this.databaseControlsInterface != null) {
      this.databaseControlsInterface.forEach(element => {
        this.dataSetResponseWrapper.refreshFieldValueInControl(element);
      });
    }
  }

  public AddRow(newRow: any) {
    this.datasSourcesInterface.forEach(control => {
        const gridApi = control["api"];
        if (gridApi) {
          gridApi.applyTransaction({ add: [newRow] });
        }
      });
  }

  private pepareControlForButtons(buttons: QueryList<SitButtonBaseComponent>) {
    if (buttons) {
      buttons.forEach(button => {
        button.setDataSetWrapper(this.dataSetResponseWrapper);
      });
    }
  }

  public prepareControls(dataSetWrapperDefinition: DataSetDefinitionWrapper) {

    //inicjalizacja tabeli akcji dla actions-toolbara
    if(dataSetWrapperDefinition != null) {
      this.actionsTable = this.filterActionsToShowOnToolbar(dataSetWrapperDefinition.actions);
      //console.log("Actions table =" + this.actionsTable);
    }

    //z uwagi na asynchroniczne przetwarzanie ngFor lista sit-proc-buttons w ngAfterViewInit jest pusta, taki myk
    this.actionControlsInterface.changes.subscribe(() => {
      //console.log("Action controls interface from subscriber " + this.actionControlsInterface);
      this.actionControlsInterface.forEach(actionControl => {
        actionControl.dataSetResponseWrapper = this.dataSetResponseWrapper;
        actionControl.actionDefinition = dataSetWrapperDefinition?.FindActionDefinition(actionControl.actionIdent);
        actionControl.dataSetManagerSource = this.dataSetControlsManager;
      });
    })
    /* wcześniejszy kod
    if (this.actionControlsInterface != null) {

      this.actionControlsInterface.forEach(actionControl => {
        actionControl.dataSetResponseWrapper = this.dataSetResponseWrapper;
        actionControl.actionDefinition = dataSetWrapperDefinition?.FindActionDefinition(actionControl.actionIdent);
        actionControl.dataSetManagerSource = this.dataSetControlsManager;
      });
    } */

    this.pepareControlForButtons(this.refreshButtons);
    this.pepareControlForButtons(this.filesButtons);
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

  //filtrowanie tabeli akcji do wyswietlenia na toolbarze
  filterActionsToShowOnToolbar(actionsTable: ActionDefinitionWrapper[]): ActionDefinitionWrapper[]{
    if(actionsTable != null)
      return actionsTable.filter(this.showActionOnToolbar);
    else
      return null;
  }

  public detachEvents() {
    this.databaseControlsInterface.forEach(control => {
      control.detachEvents();
    });
  }
}





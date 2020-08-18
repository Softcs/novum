import { Component, OnInit, Input, Directive, ContentChildren,
  QueryList, Output, EventEmitter } from '@angular/core';
import { GatewayService } from '@app/_services/gateway.service';
import { DataSetWrapper, DataSetManager } from '@app/_models';
import { SitDataBaseComponent } from '../controls/sit-data-base/sit-data-base.component';
import { sitSetDataSetDirective } from '@app/_directives/sitSetDataSetDirective';
import { DataSetDefinitionWrapper } from '@app/_models/dataSetDefinitionWrapper';
import { SitActionDirective } from '@app/_directives';

@Component({
  selector: 'sit-data-set-container',
  templateUrl: './sit-data-set-container.component.html',
  styleUrls: ['./sit-data-set-container.component.scss'],
  // host: {class: 'router-flex'}
})

export class SitDataSetContainerComponent implements OnInit {
  private _errors: any[];

  @ContentChildren('sitSetDataSource', { descendants: true})
  datasSourcesInterface: QueryList<sitSetDataSetDirective>;
  @ContentChildren('sitControl', { descendants: true })
  databaseControlsInterface!: QueryList<SitDataBaseComponent>;
  @ContentChildren("sitAction", { descendants: true })
  actionControlsInterface!: QueryList<SitActionDirective>;


  @Input() ident: string;
  dataSetResponseWrapper: DataSetWrapper;
  @Output()
  activeRowChanged: EventEmitter<any> = new EventEmitter<any>();

  public dataSetControlsManager: DataSetManager;

  constructor(private gatewayService: GatewayService) { }

  clearErrors() {
    this.errors?.splice(0, this.errors?.length);
  }



  get activeRecord(): any {
    return this.dataSetResponseWrapper?.activeRow;
  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {

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
  public refreshRows(dataSetWrapper: DataSetWrapper) {
    if (!dataSetWrapper || !dataSetWrapper.rows) {
      return;
    }

    const fieldName = dataSetWrapper.ident + 'Id';
    let rowsToUpdate = [];

    this.datasSourcesInterface.forEach(control => {

      dataSetWrapper.rows.forEach(inputRow => {
        const fieldValue = inputRow[fieldName];
        rowsToUpdate = control.rows.filter(controlRow => controlRow[fieldName] == fieldValue);
        rowsToUpdate.forEach(row => {
          // tslint:disable-next-line: forin
          for (const key in inputRow) {
            const newValue = inputRow[key];
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              if (this.activeRecord === row) {
                this.activeRecord[key] = newValue;
              }
              row[key] = newValue;
            }
          }
        });
      });
    });
    this.activeRowChanged.emit(this.activeRecord);
  }

  public setDataSource(dataSetWrapper: DataSetWrapper) {
    this.dataSetResponseWrapper = dataSetWrapper;
    this.dataSetResponseWrapper.activeRowChanged = this.activeRowChanged;
    this.errors = dataSetWrapper.errors;
    this.datasSourcesInterface.forEach(element => {
      let gOp = element["gridOptions"];

      if (gOp) {
        gOp["rowData"] = this.dataSetResponseWrapper.rows;
        element.rowData = this.dataSetResponseWrapper.rows;
      }
        else  {
          element.rows = this.dataSetResponseWrapper.rows;
        }
      element.selected = [this.dataSetResponseWrapper.activeRow];

      console.log("element",element)

    });

    if (this.databaseControlsInterface != null) {
        this.databaseControlsInterface.forEach(element => {
          this.dataSetResponseWrapper.refreshFieldValueInControl(element);
        });
     }
  }

  public deleteData() {

  }

  public prepareControls(dataSetWrapperDefinition: DataSetDefinitionWrapper) {

    if (this.actionControlsInterface != null) {

      this.actionControlsInterface.forEach(actionControl => {
        actionControl.dataSetResponseWrapper = this.dataSetResponseWrapper;
        actionControl.actionDefinition = dataSetWrapperDefinition?.FindActionDefinition(actionControl.actionIdent);
        actionControl.dataSetManagerSource = this.dataSetControlsManager;
      });
    }

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
}





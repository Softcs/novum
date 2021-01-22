import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, EventEmitter, Output, Directive  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogConfirmDelComponent } from '@app/components/sit-dialog-confirm-del';
import { SitActionDirective } from '@app/_directives/sitActionDirective';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { FactoryService } from '@app/_services/factory.service';
import { ProcExpanderService } from '@app/_services/procexpander.service';
import { ActionDefinitionWrapper } from '@app/_models/actionDefinitionWrapper';
import { DataSetWrapper } from '@app/_models';

@Component({
  selector: 'sit-proc-button',
  templateUrl: './sit-proc-button.component.html',
  styleUrls: ['./sit-proc-button.component.scss']
})
export class SitProcButtonComponent extends SitActionDirective implements OnInit {
  executing = false;
  @Input() color: string;
  @Input() caption: string;
  @Input() icon: string;
  @Input() tooltip: string;
  @Input() componentParamsIdent: string;
  @Input() openKind = 'EXPANDER';

  @Output() afterCompleted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('button') private _buttonElement: ElementRef;

  public set actionDefinition(action: ActionDefinitionWrapper) {
    super.actionDefinition = action;

    this.actionIdent = action?.ident;
    this.caption = action?.caption;
    this.componentParamsIdent = action?.componentParamsIdent;
    this.openKind = action?.openKind;
    this.tooltip = action?.tooltip;
    this.color= action?.color;
    this.icon = action?.icon;
  }

  public get actionDefinition(): ActionDefinitionWrapper
  {
    return super.actionDefinition;
  }

  // public set dataSetResponseWrapper(value: DataSetWrapper)
  // {
  //   super.dataSetResponseWrapper = value;
  // }

  // public get dataSetResponseWrapper(): DataSetWrapper
  // {
  //   return null;
  // }

  private tabLink: string;

  constructor(
    public el: ElementRef,
    private _renderer: Renderer2,
    private tabService: TabService,
    private factoryService: FactoryService,
    private procExpanderService: ProcExpanderService,
    public dialog: MatDialog,
    ) {
      super(el);

  }

  ngOnInit(): void {

  }

  isDelete(): boolean {
    return (this.actionDefinition?.kind === 'delete' || this.actionDefinition?.kind === 'D');
  }

  isInsert(): boolean {
    return (this.actionDefinition?.kind === 'insert' || this.actionDefinition?.kind === 'I');
  }

  isUpdate(): boolean {
    return (this.actionDefinition?.kind === 'update' || this.actionDefinition?.kind === 'U');
  }

  public get isShouldBeHidden(): boolean {
    if (!this.actionDefinition || !this.dataSetResponseWrapper) {
      return true;
    }

    if ( ( this.isInsert() || this.isUpdate() || this.isDelete() ) && !this.dataSetResponseWrapper.allParentsHaveRows() ) {
       return true;
    };

    if ( (this.isUpdate() || this.isDelete()) && this.dataSetResponseWrapper !== undefined && this.dataSetResponseWrapper.rows == null) {
        return true;
    }

    return false;
  }

  getActionExecuteData(): ActionExecuteData {
    const identRowField = this.actionDefinition?.fieldsConfiguration ? this.actionDefinition?.fieldsConfiguration["identRow"] : null;
    const identRowValue = identRowField ? this.dataSetResponseWrapper.getFieldValue(identRowField) : null;
    this.tabLink = this.componentParamsIdent + '_' + identRowValue;
    const data = new ActionExecuteData();
    data.tabIdent = identRowValue;
    data.activeRow = this.dataSetResponseWrapper?.activeRow;
    data.dataSetManagerSource = this.dataSetManagerSource;
    data.sourceDataSetIdent = this.dataSetResponseWrapper?.ident;
    data.actionIdent = this.actionIdent;
    data.componentParamsIdent = this.componentParamsIdent;
    data.openKind = this.openKind;
    return data;
  }

  invokeDeleteAction(): boolean {
    if (!this.isDelete()) {
      return false;
    }

    const dialogRef = this.dialog.open(SitDialogConfirmDelComponent, {
      width: '250px', height: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.changeExecutingState(true);
        this.dataSetResponseWrapper.ExecuteAction(this.actionIdent,
          this,
          this.executeActionCompletedCallback,
          this.executeActionExceptionCallback);
      }
    });
    return true;
  }

  onClick($event) {
    if (!this.actionDefinition) {
      console.error(`Action "${this.actionIdent}" could not be found!`);
      this.changeExecutingState(false);
      return;
    }
    if (this.invokeDeleteAction()) {
      return;
    }

    if (!this.componentParamsIdent) { //action doesn't has visual form
      this.executeAction();
      return;
    }

    if (this.isInsert()) {
      this.dataSetResponseWrapper.GenerateRow(null, true, this.actionDefinition?.editFields, true, this.dataSetManagerSource);
    }

    const actionExecuteData = this.getActionExecuteData();
    if (this.openKind === 'EXPANDER') {
      this.openActionOnExpander(actionExecuteData);
    } else {
     this.openActionOnTab(actionExecuteData);
    }

  }

  private executeAction(): void {
    this.changeExecutingState(true);
    this.dataSetResponseWrapper.ExecuteAction(this.actionIdent,
      this,
      this.executeActionCompletedCallback,
      this.executeActionExceptionCallback);
  }

  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._buttonElement, 'disabled', isDisabled);
  }
  public setValue(value: any) {

  }

  private changeExecutingState(state: boolean) {
    this.executing = state;
  }

  private executeActionCompletedCallback(self) {
    self.changeExecutingState(false);
    self.afterCompleted.emit('OK');
  }

  private executeActionExceptionCallback(self) {
    self.changeExecutingState(false);
    self.afterCompleted.emit('Error');
  }

  private openActionOnExpander(actionExecuteData: ActionExecuteData) {
    this.procExpanderService.openAction(this.dataSetManagerSource.procExpander, this.actionDefinition, actionExecuteData);

  }

  private openActionOnTab(actionExecuteData: ActionExecuteData) {
    var caption;
    caption = this.actionDefinition.caption ? this.actionDefinition.caption : this.actionDefinition.tooltip;
    this.tabService.addTab(
      new Tab(
        this.factoryService.GetFactory(actionExecuteData.componentParamsIdent),
        caption,
        actionExecuteData
      )
    );
  }

}

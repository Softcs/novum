import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, EventEmitter, Output, Directive  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogConfirmDelComponent } from '@app/components/sit-dialog-confirm-del';
import { SitActionDirective } from '@app/_directives/sitActionDirective';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { ActionExecuteData } from '@app/_models/actionExecuteData';
import { FactoryService } from '@app/_services/factory.service';
import { ProcExpanderService } from '@app/_services/procexpander.service';

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

  @Output() afterCompleted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('button') private _buttonElement: ElementRef;

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
    return this.actionDefinition?.kind === 'delete';
  }

  isInsert(): boolean {
    return this.actionDefinition?.kind === 'insert';
  }

  isUpdate(): boolean {
    return this.actionDefinition?.kind === 'update';
  }

  getTabSenderObject(): ActionExecuteData {
    const identRowField = this.actionDefinition?.fieldsConfiguration?.identRow;
    const identRowValue = identRowField ? this.dataSetResponseWrapper.getFieldValue(identRowField) : null;
    this.tabLink = this.componentParamsIdent + '_' + identRowValue;
    const data = new ActionExecuteData();
    data.tabIdent = identRowValue;
    data.activeRow = this.dataSetResponseWrapper?.activeRow;
    data.dataSetManagerSource = this.dataSetManagerSource;
    data.sourceDataSetIdent = this.dataSetResponseWrapper?.ident;
    data.actionIdent = this.actionIdent;
    data.componentParamsIdent = this.componentParamsIdent;
    return data;
  }

  invokeDeleteAction():boolean {
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
    if (this.invokeDeleteAction()) {
      return;
    }

    if (!this.componentParamsIdent) { //action doesn't has visual form
      this.executeAction();
      return;
    }

    if (this.isInsert()) {
      this.dataSetResponseWrapper.GenerateRow(null, true, this.actionDefinition?.editFields);
    }

    const actionExecuteData = this.getTabSenderObject();
    // this.openActionOnTab(actionExecuteData);
    this.openActionOnExpander(actionExecuteData);
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
    this.tabService.addTab(
      new Tab(
        this.factoryService.GetFactory(actionExecuteData.componentParamsIdent),
        this.actionDefinition.caption,
        actionExecuteData
      )
    );
  }

}

import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, EventEmitter, Output, Directive  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogConfirmDelComponent } from '@app/components/sit-dialog-confirm-del';
import { SitActionDirective } from '@app/_directives/sitActionDirective';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { TabData } from '@app/_models/tabdata';
import { FactoryService } from '@app/_services/factory.service';


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

  getTabSenderObject(): TabData {
    const identRowField = this.actionDefinition?.fieldsConfiguration?.identRow;
    const identRowValue = identRowField ? this.dataSetResponseWrapper.getFieldValue(identRowField) : null;
    this.tabLink = this.componentParamsIdent + '_' + identRowValue;
    const data = new TabData();
    data.tabIdent = identRowValue;
    data.activeRow = this.dataSetResponseWrapper?.activeRow;
    data.dataSetManagerSource = this.dataSetManagerSource;
    data.sourceDataSetIdent = this.dataSetResponseWrapper?.ident;
    data.actionIdent = this.actionIdent;
    return data;
  }

  onClick($event) {
    if (this.isDelete()) {
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
    } else {
      if (!this.componentParamsIdent) {
        this.executeAction();
      } else {
        if( this.isInsert()) {
          this.dataSetResponseWrapper.GenerateRow(null, true, this.actionDefinition?.editFields);
        }
        const tabData = this.getTabSenderObject();

        this.tabService.addTab(
          new Tab(
             this.factoryService.GetFactory(this.componentParamsIdent),
            this.actionDefinition.caption,
            tabData
          )
        );
      }
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

}

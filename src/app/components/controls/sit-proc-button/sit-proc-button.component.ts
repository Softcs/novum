import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, EventEmitter, Output, Directive  } from '@angular/core';
import { DataSetWrapper, Operation, Tab } from '@app/_models';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogConfirmDelComponent } from '@app/components/sit-dialog-confirm-del';
import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { SitActionDirective } from '@app/_directives/sitActionDirective';
import { TabService } from '@app/_services/tab.service';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'sit-proc-button',
  templateUrl: './sit-proc-button.component.html',
  styleUrls: ['./sit-proc-button.component.scss']
})
export class SitProcButtonComponent extends SitActionDirective implements OnInit {
  executing = false;
  @Input() color: string;
  @Input() caption: string;
  @Input() delete = false;
  @Input() icon: string;
  @Input() tooltip: string;
  @Input() componentParamsIdent: string;

  @Output() afterCompleted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('button') private _buttonElement: ElementRef;

  constructor(
    public el: ElementRef,
    private _renderer: Renderer2,
    private tabService: TabService,
    public dialog: MatDialog,
    ) {
      super(el);

  }

  ngOnInit(): void {

  }

  onClick($event) {
    if (this.delete) {
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
        console.log("this.actionDefinition", this.actionDefinition)
        this.tabService.addTab(
          new Tab(
            this.componentParamsIdent, this.componentParamsIdent,
            this.actionDefinition.caption,
            {
              parent: 'AppComponent',
              guid: "",
              senderObject: {}
            }
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

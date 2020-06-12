import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, EventEmitter, Output  } from '@angular/core';
import { DataSourceResponseWrapper, Operation } from '@app/_models';
import { MatDialog } from '@angular/material/dialog';
import { SitDialogConfirmDelComponent } from '@app/components/sit-dialog-confirm-del';
@Component({
  selector: 'sit-proc-button',
  templateUrl: './sit-proc-button.component.html',
  styleUrls: ['./sit-proc-button.component.scss']
})
export class SitProcButtonComponent implements OnInit {
  public dataSourceResponseWrapper: DataSourceResponseWrapper;
  executing = false;
  @Input() actionIdent: string;
  @Input() color: string;
  @Input() caption: string;
  @Input() confirmDel = false;

  @Output() afterCompleted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('button') private _buttonElement: ElementRef;

  constructor(
    private _renderer: Renderer2,
    public dialog: MatDialog,
    ) {

  }

  ngOnInit(): void {

  }

  onClick($event) {
    console.log(this.confirmDel)
    if (this.confirmDel) {
      const dialogRef = this.dialog.open(SitDialogConfirmDelComponent, {
        width: '250px', height: '150px'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.executing = true;
          this.dataSourceResponseWrapper.ExecuteAction(this.actionIdent,
            this,
            this.executeActionCompletedCallback,
            this.executeActionExceptionCallback);      }
      });

    } else {
    this.executing = true;
    this.dataSourceResponseWrapper.ExecuteAction(this.actionIdent,
                                                 this,
                                                 this.executeActionCompletedCallback,
                                                 this.executeActionExceptionCallback);
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._buttonElement, 'disabled', isDisabled);
  }
  public setValue(value: any) {

  }

  private executeActionCompletedCallback(self) {
    self.executing = false;
    self.afterCompleted.emit('OK')
  }

  private executeActionExceptionCallback(self) {
    self.executing = false;
    self.afterCompleted.emit('Error')
  }

}

import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef,
   AfterContentChecked, AfterViewInit, AfterContentInit, EventEmitter, Output  } from '@angular/core';
import { DataSourceResponseWrapper, Operation } from '@app/_models';

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

  @Output() afterCompleted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('button') private _buttonElement: ElementRef;

  constructor(
    private _renderer: Renderer2,
    ) {

  }

  ngOnInit(): void {

  }

  onClick($event) {
    this.executing = true;
    this.dataSourceResponseWrapper.ExecuteAction(this.actionIdent,
                                                 this,
                                                 this.executeActionCompletedCallback,
                                                 this.executeActionExceptionCallback);
  }

  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._buttonElement, 'disabled', isDisabled);
  }
  public setValue(value: any) {

  }

  private executeActionCompletedCallback(self) {
    self.executing = false;
    this.afterCompleted.emit('OK')
  }

  private executeActionExceptionCallback(self) {
    self.executing = false;
    this.afterCompleted.emit('Error')
  }

}

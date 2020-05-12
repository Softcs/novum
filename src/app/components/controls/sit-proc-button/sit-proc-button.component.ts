import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, AfterContentChecked, AfterViewInit, AfterContentInit } from '@angular/core';
import { DataSourceResponseWrapper } from '@app/_models';

@Component({
  selector: 'sit-proc-button',
  templateUrl: './sit-proc-button.component.html',
  styleUrls: ['./sit-proc-button.component.scss']
})
export class SitProcButtonComponent implements OnInit {
  public dataSourceResponseWrapper: DataSourceResponseWrapper;

  @Input() procIdent: string;
  @Input() color: string;
  @Input() caption: string;

  @ViewChild('button') private _buttonElement: ElementRef;

  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {

  }

  onClick($event) {
    console.log("Clicked", this.dataSourceResponseWrapper);
  }

  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._buttonElement, 'disabled', isDisabled);
  }
  public setValue(value: any) {

  }

}

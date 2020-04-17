import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataSourceResponseWrapper } from '@app/_models';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'sit-data-base',
  templateUrl: './sit-data-base.component.html',
  styleUrls: ['./sit-data-base.component.scss']
})
export class SitDataBaseComponent implements ControlValueAccessor {

  @Input() value: string ='';
  public dataSourceResponseWrapper: DataSourceResponseWrapper;
  @Input() placeholder: string = '';
  @Input() field: string = '';
  @Input() id: string = null;

  @ViewChild('inputElement') private _inputElement: ElementRef;

  constructor(private _renderer: Renderer2) {

  }

  get inputElement(): ElementRef {
    return this._inputElement;
  }


  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled);
  }

  onChange(event: any) {
    this._onChange(event.target.value);
  }
  onKeyup(event: any) {
    this._onChange(event.target.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  onBlur(event: any) {
    this._onTouched();
  }

  public getValue(): string{
    return null;
  }
  public setValue(value: any) {
    this.value = value;
  }
}

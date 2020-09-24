import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataSetWrapper } from '@app/_models';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'sit-data-base',
  templateUrl: './sit-data-base.component.html',
  styleUrls: ['./sit-data-base.component.scss']
})
export class SitDataBaseComponent implements ControlValueAccessor {
  private _dataSetWrapper: DataSetWrapper;

  @Input() value: string = '';
  get dataSetWrapper(): DataSetWrapper {
    return this._dataSetWrapper;
  }

  set dataSetWrapper(value: DataSetWrapper) {
    if (this._dataSetWrapper == value) {
      return;
    }
    this._dataSetWrapper = value;
    if (this._dataSetWrapper != null) {
      this._dataSetWrapper.activeRowChanged.subscribe( (row) => this.activeRowChanged(row, this));
      this._dataSetWrapper.afterSetFieldValue.subscribe((fieldName) => this.afterSetFieldValue(fieldName));
    }
    this.afterSetDataSetWrapper();
  }

  @Input() placeholder: string = '';
  @Input() field: string = '';
  @Input() id: string = null;
  @Input() readonly: boolean = false;
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
    if (event.target.type === 'checkbox') {
      event.target.checked ? this._onChange('1') : this._onChange('0');
    } else {
      this._onChange(event.target.value);
    }
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

  public getValue(): string {
    return null;
  }

  public setValue(value: any) {
    this.value = value;
  }

  public activeRowChanged(row, self) {
    self.refreshFieldValue();
  }

  public afterSetFieldValue(fieldName) {
    if (this.field !== fieldName)  {
      return;
    }

    this.refreshFieldValue();
  }

  public refreshFieldValue() {
  }

  public afterSetDataSetWrapper() {
  }
}

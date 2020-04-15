import { Component, Input, ViewChild, ElementRef, OnInit, Renderer2, forwardRef, Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Directive({
  selector: '[sitControl]'
  ,providers: [{ provide: SitDataBaseComponent, useExisting: sitDataInputComponentDirective }],
})
export class sitDataInputComponentDirective {

}

@Component({
  selector: 'sit-data-input',
  templateUrl: './sit-data-input.component.html',
  styleUrls: ['./sit-data-input.component.scss']
})
export class SitDataInputComponent extends SitDataBaseComponent implements ControlValueAccessor  {

  constructor(private _renderer: Renderer2) {
    super();
  }

  @Input() type: string = 'text';
  @Input() label: string = '';

  @ViewChild('inputElement') private _inputElement: ElementRef;
  get inputElement(): ElementRef {
    return this._inputElement;
  }
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  writeValue(obj: any): void {
    this.value = obj;
  }
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
    this._onFilterKeyEnter(event);
  }
  onKeyup(event: any) {
    this._onChange(event.target.value);

  }
  onBlur(event: any) {
    this._onTouched();
  }
  public getValue(): string {
    return this._inputElement.nativeElement.value;
  }
  _onFilterKeyEnter(event: any) {
    this.dataSourceResponseWrapper.activeRow[this.field] = this.getValue();
    this.dataSourceResponseWrapper.SetActiveRow(this.dataSourceResponseWrapper.activeRow);
  }


}

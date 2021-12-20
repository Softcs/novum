import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { DataSetWrapper } from '@app/_models';
import { ControlValueAccessor } from '@angular/forms';
import { EventManager } from '@angular/platform-browser';
import { OnCFService } from '@app/_services/oncf.service';

@Component({
  selector: 'sit-data-base',
  templateUrl: './sit-data-base.component.html',
  styleUrls: ['./sit-data-base.component.scss']
})
export class SitDataBaseComponent implements ControlValueAccessor, AfterViewInit {
  private _dataSetWrapper: DataSetWrapper;

  @Input() value = '';
  @Input() placeholder = '';
  @Input() field = '';
  @Input() id: string = null;
  @Input() readonly = false;
  
  @ViewChild('inputElement') private _inputElement: ElementRef;

  get dataSetWrapper(): DataSetWrapper {
    return this._dataSetWrapper;
  }

  set dataSetWrapper(dataSetWrapper: DataSetWrapper) {
    if (this._dataSetWrapper == dataSetWrapper) {
      return;
    }
    this._dataSetWrapper = dataSetWrapper;
    if (this._dataSetWrapper != null) {
      this._dataSetWrapper.activeRowChanged.subscribe( (row) => this.activeRowChanged(row, this));
      this._dataSetWrapper.afterSetFieldValue.subscribe((fieldName) => this.afterSetFieldValue(fieldName));
      this._dataSetWrapper.afterPropagte.subscribe(ident => this.afterPropagte(ident));
    }
    this.afterSetDataSetWrapper();
  }

  constructor(    
    protected _renderer: Renderer2) {      
  }  

  ngAfterViewInit(): void {
    
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

  onChange(value: any) {
    this._onChange(value);    
    this.dataSetWrapper.setFieldValue(this.field, this.getValue(), null, false);    
  }

  onKeyup(value: any) {
    this._onChange(value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  onBlur(event: any) {
    this._onTouched();
  }

  public getValue(): string {
    return this.value;
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
    this.dataSetWrapper?.refreshFieldValueInControl(this);
  }

  public afterSetDataSetWrapper() {
  }

  protected afterPropagte(ident: string) {

  }

  public detachEvents() { }
}

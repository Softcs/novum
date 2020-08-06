import { Component, Input, ViewChild, ElementRef, OnInit, Renderer2, forwardRef, Directive, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';

@Component({
  selector: 'sit-data-input',
  templateUrl: './sit-data-input.component.html',
  styleUrls: ['./sit-data-input.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SitDataInputComponent extends SitDataBaseComponent {

  @Input() type = 'text';
  @Input() label = '';
  @Input() showRefresh = true;
  @Input() appearance: MatFormFieldAppearance = 'legacy';
  @Input() width: string;

  onChange(event: any) {
    super.onChange(event);
    this._onFilterKeyEnter(event);
  }

  public getValue(): string {
    return this.inputElement.nativeElement.value;
  }
  _onFilterKeyEnter(event: any) {
    this.dataSetWrapper.setFieldValue(this.field, this.getValue());
    this.dataSetWrapper.RefreshChildren();
  }

  onRefreshClick(event: any) {
    this.dataSetWrapper.RefreshChildren();
  }
  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }
}

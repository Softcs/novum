import { Component, Input, ViewChild, ElementRef, OnInit, Renderer2, forwardRef, Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Component({
  selector: 'sit-data-input',
  templateUrl: './sit-data-input.component.html',
  styleUrls: ['./sit-data-input.component.scss']
})
export class SitDataInputComponent extends SitDataBaseComponent  {

  @Input() type: string = 'text';
  @Input() label: string = '';

  onChange(event: any) {
    super.onChange(event);
    this._onFilterKeyEnter(event);
  }

  public getValue(): string {
    return this.inputElement.nativeElement.value;
  }
  _onFilterKeyEnter(event: any) {
    if (this.dataSourceResponseWrapper.activeRow != null) {
      this.dataSourceResponseWrapper.activeRow[this.field] = this.getValue();
    }
    this.dataSourceResponseWrapper.RefreshChildren();
  }


}

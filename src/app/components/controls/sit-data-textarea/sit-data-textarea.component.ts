import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';

/**
 * params:
 * - label: string = '';
 * - rows: number = 3;
 * - cols: number; Uwaga! nieaktywny!
 */

@Component({
  selector: 'sit-data-textarea',
  templateUrl: './sit-data-textarea.component.html',
  styleUrls: ['./sit-data-textarea.component.scss'],
  host: {class: 'sit-data-textarea-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitDataTextareaComponent extends SitDataBaseComponent {
  // @Input() type = 'text';
  @Input() label: string = '';
  // @Input() appearance: MatFormFieldAppearance = 'legacy';
  @Input() rows: number = 3;
  @Input() cols: number;

  onChange(event: any) {
    super.onChange(this.getValue());
    this._onFilterKeyEnter(event);
  }

  public getValue(): string {
    return this.inputElement.nativeElement.value;
  }
  _onFilterKeyEnter(event: any) {
    super.onChange(this.getValue());
    this.dataSetWrapper.RefreshChildren();
  }

  onRefreshClick(event: any) {
    this.dataSetWrapper.RefreshChildren();
  }
}

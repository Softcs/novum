import { Component, Input } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';

@Component({
  selector: 'sit-data-textarea',
  templateUrl: './sit-data-textarea.component.html',
  styleUrls: ['./sit-data-textarea.component.scss']
})
export class SitDataTextareaComponent extends SitDataBaseComponent {
  @Input() type = 'text';
  @Input() label = '';
  @Input() appearance: MatFormFieldAppearance = 'legacy';
  @Input() rows: number;
  @Input() cols: number;

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

}

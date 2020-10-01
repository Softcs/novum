import { Component, Input, Renderer2 } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Component({
  selector: 'sit-data-checkbox',
  templateUrl: './sit-data-checkbox.component.html',
  styleUrls: ['./sit-data-checkbox.component.scss']
})

export class SitDataCheckboxComponent extends SitDataBaseComponent {
  @Input() label = '';
  @Input() width: string;
  @Input() refreshOnChange: boolean;

  constructor(renderer: Renderer2) {
    super(renderer);
    this.refreshOnChange = false;
    this.registerOnChange(this.onChangeInternal);
  }

  private onChangeInternal(val: any) {
    this.dataSetWrapper.setFieldValue(this.field, val);
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
    }
  }

  public getValue(): string {
    return this.inputElement.nativeElement['checked'];
  }

  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }
}

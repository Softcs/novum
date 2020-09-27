import { Component, OnInit, Input } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Component({
  selector: 'sit-data-checkbox',
  templateUrl: './sit-data-checkbox.component.html',
  styleUrls: ['./sit-data-checkbox.component.scss']
})
export class SitDataCheckboxComponent extends SitDataBaseComponent {
  @Input() label = '';
  @Input() width: string;

  isChecked: boolean;

  ngOnInit(): void {

  }

  onChange(event: any) {
    super.onChange(event);
    this._onFilterKeyEnter(event);
  }

  public getValue(): string {
    console.log(this.inputElement);
    return this.inputElement.nativeElement.value;
  }

  _onFilterKeyEnter(event: any) {
    console.log(this.field,this.dataSetWrapper.getFieldValue(this.field));
    this.dataSetWrapper.setFieldValue(this.field, this.getValue());
    this.dataSetWrapper.RefreshChildren();
  }

  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }

}

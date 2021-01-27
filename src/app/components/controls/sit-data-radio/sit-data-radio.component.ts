import { Component, Input,  Renderer2, ViewEncapsulation} from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Component({
  selector: 'sit-data-radio',
  templateUrl: './sit-data-radio.component.html',
  styleUrls: ['./sit-data-radio.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SitDataRadioComponent extends SitDataBaseComponent {
  public internalValue: string;
  public defaultTabIndex: number;
  public inputId: string;

  @Input() color: string;
  @Input() disabled: boolean;
  @Input() labelPosition: 'after';
  @Input() name: string;
  @Input() required: boolean;
  @Input() selected: boolean;
  @Input() refreshOnChange: boolean;
  @Input() lookupDisplayFields: string[] = null;
  @Input() buttons: any[] = null;
  @Input('aria-describedby') ariaDescribedby: string;
  @Input('aria-label') ariaLabel: string;
  @Input('aria-labelledby') ariaLabelledby: string;
  @Input() checked: boolean;
  @Input() colorButton: string;
  @Input() disableRipple: boolean;
  @Input() disabledButton: boolean;
  @Input() id: string;
  @Input() labelPositionButton: 'after';
  @Input() nameButton: string;
  @Input() requiredButton: boolean;

  constructor(
    _renderer: Renderer2) {
    super(_renderer);
    this.refreshOnChange = true;
  }

  onChange(event: any) {
    super.onChange(this.getValue());
    this.dataSetWrapper.setFieldValue(this.field, this.getValue());
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
    }
  }

  public getValue(): any {
    console.log( this.internalValue);
    return this.internalValue;
  }

  public setValue(value: any) {
    this.value = value;
  }

  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }
}

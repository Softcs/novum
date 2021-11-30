import { Component, Input,  Renderer2, ViewEncapsulation} from '@angular/core';
import { OnCFService } from '@app/_services/oncf.service';
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
  public id: string;

  @Input() color: string;
  @Input() disabled: boolean;
  @Input() labelPosition: 'after';
  @Input() label: string;
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
  @Input() labelPositionButton: 'after';
  @Input() nameButton: string;
  @Input() requiredButton: boolean;
  @Input() type: string = 'row';

  constructor(
    renderer: Renderer2,
    oncfService: OnCFService) {
    super(renderer);
    this.refreshOnChange = true;
    this.id = this.newGuid();
  }

  private getCheckedValue(): number {
    if (!this.buttons) {
      return 0;
    }

    const buttonChecked = this.buttons.find( b => b.checked);
    if (buttonChecked) {
      return buttonChecked.value;
    }
    return 0;
  }

  public onChange(event: any) {
    const value = this.getValue();
    super.onChange(value);
    this.dataSetWrapper.setFieldValue(this.field, value, null, false);
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
    }
  }

  public getValue(): any {
    return this.internalValue.toString();
  }

  public setValue(value: any) {
    if (value == null) {
      value = this.getCheckedValue().toString();
    }

    value = value.toString();
    this.value = value;
  }

  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

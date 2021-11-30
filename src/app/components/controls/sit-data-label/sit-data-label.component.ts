import { Component, NgZone, Renderer2, ViewEncapsulation, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { OnCFService } from '@app/_services/oncf.service';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Component({
  selector: 'sit-data-label',
  templateUrl: './sit-data-label.component.html',
  styleUrls: ['./sit-data-label.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SitDataLabelComponent extends SitDataBaseComponent {

  @Input() type = 'text';
  @Input() label = '';
  @Input() valueWidth;
  @Input() labelWidth;

  constructor(
    _renderer: Renderer2,
    protected _oncfService: OnCFService,
    private ngZone: NgZone) {
    super(_renderer);

  }

  public getValue(): string {
    return this.inputElement.nativeElement.value;
  }

  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }


}


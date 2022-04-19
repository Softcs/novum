import { Component, NgZone, Renderer2, ViewEncapsulation, Input, LOCALE_ID, Inject } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { OnCFService } from '@app/_services/oncf.service';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { formatDate, formatNumber } from '@angular/common';

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
    @Inject(LOCALE_ID) protected locale: string,
    _renderer: Renderer2,
    protected _oncfService: OnCFService,
    private ngZone: NgZone) {
    super(_renderer);

  }
  
  public setValue(value: any) {
   // console.log(this.type)
    this.value = (this.type === 'text' ? value : formatNumber(value, this.locale, '1.2-2').replace(/[,]/g,' '));
  }

  public getValue(): string {
    return this.inputElement.nativeElement.value   
  }
}


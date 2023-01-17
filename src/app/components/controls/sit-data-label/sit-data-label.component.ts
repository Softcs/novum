import { Component, NgZone, Renderer2, ViewEncapsulation, Input, LOCALE_ID, Inject, HostBinding } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { OnCFService } from '@app/_services/oncf.service';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { formatDate, formatNumber } from '@angular/common';

@Component({
  selector: 'sit-data-label',
  templateUrl: './sit-data-label.component.html',
  styleUrls: ['./sit-data-label.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-data-label-component flex-container-row'}
})
export class SitDataLabelComponent extends SitDataBaseComponent {

  @Input() labelWidth = '';
  @Input() type = 'text';
  @Input() label = '';
  @Input() valueStyle: any = {};
  @Input() labelStyle: any = {};
  @Input() field: string = '';
  


  constructor(
    @Inject(LOCALE_ID) protected locale: string,
    _renderer: Renderer2,
    protected _oncfService: OnCFService,
    private ngZone: NgZone) {
    super(_renderer);

  }

  @HostBinding('class') get class() {
    return this.getFieldClassName('component');
  }
  
  public setValue(value: any) {
    this.value = (
      this.type !== 'number' 
      ? value 
      : formatNumber(value, this.locale, '1.2-2').replace(/[,]/g,' ') 
    );
  }

  public getValue(): string {

//console.log('inputElement: ', this.inputElement);

    return this.inputElement.nativeElement.value   
  }

  public getFieldClassName(prefix?: string): string {

    if (typeof(prefix)==='undefined') prefix = 'def';

    if (!this.field) {
      return '';
    }
    
    // return this.field.trim().toLowerCase() + '-' + prefix;
    return this.field.trim().substring(0, 1).toLowerCase() + this.field.substring(1) + '-' + prefix;

  }
}


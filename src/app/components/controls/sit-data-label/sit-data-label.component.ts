import { Component, NgZone, Renderer2, ViewEncapsulation, Input, LOCALE_ID, Inject, HostBinding, ElementRef } from '@angular/core';
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
  // @Input() ngClass: string = '';


  constructor(
    @Inject(LOCALE_ID) protected locale: string,
    _renderer: Renderer2,
    protected _oncfService: OnCFService,
    private ngZone: NgZone,
    private hostRef:ElementRef
    ) {
    super(_renderer);

  }

  @HostBinding('class') get class() {
    return this.getFieldClassName('component');
  }

  public setValue(value: any) {

    if (this.type =='number')  { this.value = formatNumber(value, this.locale, '1.2-2').replace(/[,]/g,' ') }
    else if (this.type =='number4')  { this.value = formatNumber(value, this.locale, '1.4-4').replace(/[,]/g,' ') }
    else { this.value = value }
    
    //this.value = (
    // this.type !== 'number' 
    // ? value 
    // : formatNumber(value, this.locale, '1.2-2').replace(/[,]/g,' ') 
    //);
  }

  public getValue(): string {
    return this.inputElement.nativeElement.value   
  }

  public fillIfEmpty() {
    return this.hostRef.nativeElement.classList.contains('fill-if-empty') && !this.value;
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


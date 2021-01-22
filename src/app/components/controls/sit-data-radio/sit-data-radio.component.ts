import { Component, Input,  Renderer2, ViewEncapsulation, ContentChild, ViewChild, NgZone, OnInit } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';



@Component({
  selector: 'sit-data-radio',
  templateUrl: './sit-data-radio.component.html',
  styleUrls: ['./sit-data-radio.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SitDataRadioComponent extends SitDataBaseComponent {
  
  public button: any[] = [{caption:'a',value:'a'}, {caption:'b',value:'b'}];



  @Input() showRefresh = true;
  @Input() appearance: MatFormFieldAppearance = 'legacy';
  @Input() showRefreshButton: boolean;
  @Input() refreshOnChange: boolean;
  @Input() lookupDisplayFields: string[] = null;
  @Input() buttons: any[] = null;
  


  constructor(
    _renderer: Renderer2,
    private ngZone: NgZone) {
    super(_renderer);
    this.showRefreshButton = false;
    this.refreshOnChange = true;
  }

  onChange(event: any) {
    //super.onChange(event);
    this.dataSetWrapper.setFieldValue(this.field, this.getValue());
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
  }
}



  public getValue(): any {
    console.log( this.inputElement.nativeElement);
    return this.inputElement.nativeElement.value;
  }



  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }

 
}

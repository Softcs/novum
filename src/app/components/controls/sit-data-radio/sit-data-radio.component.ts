import { Component, Input,  Renderer2, ViewEncapsulation, ContentChild, ViewChild, NgZone } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { MatFormFieldAppearance  } from '@angular/material/form-field';
import { SitRefreshButtonComponent } from '../sit-refresh-button/sit-refresh-button.component';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { LookupService } from '@app/_services/lookup.service';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'sit-data-radio',
  templateUrl: './sit-data-radio.component.html',
  styleUrls: ['./sit-data-radio.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SitDataRadioComponent extends SitDataBaseComponent {
  favoriteSeason: string;
  public seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


  @Input() type = 'text';
  @Input() label = '';
  @Input() showRefresh = true;
  @Input() appearance: MatFormFieldAppearance = 'legacy';
  @Input() width: string;
  @Input() showRefreshButton: boolean;
  @Input() refreshOnChange: boolean;
  @Input() lookupDisplayFields: string[] = null;

 

  constructor(
    _renderer: Renderer2,
    private lookupService: LookupService,
    private ngZone: NgZone) {
    super(_renderer);
    this.showRefreshButton = false;
    this.refreshOnChange = true;
  }

  onChange(event: any) {
    super.onChange(event);
    this.dataSetWrapper.setFieldValue(this.field, this.getValue());
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
  }
}



  public getValue(): string {
    return this.inputElement.nativeElement.value;
  }



  public refreshFieldValue() {
    this.dataSetWrapper.refreshFieldValueInControl(this);
  }

}

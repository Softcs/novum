import { Component, Input, Renderer2 } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import {MatCheckboxChange} from '@angular/material/checkbox';
import { OnCFService } from '@app/_services/oncf.service';
import { basename } from 'path';

@Component({
  selector: 'sit-data-checkbox',
  templateUrl: './sit-data-checkbox.component.html',
  styleUrls: ['./sit-data-checkbox.component.scss']
})

export class SitDataCheckboxComponent extends SitDataBaseComponent {
  @Input() label = '';
  @Input() width: string;
  @Input() refreshOnChange: boolean;
  @Input() labelPosition: 'after';
  indeterminate: boolean = false;

  //labelPosition: 'before' | 'after' = 'after'; //pozycja etykiety checkboxa, domyslnie za
  constructor(renderer: Renderer2, oncfService: OnCFService) {
    super(renderer);
    this.refreshOnChange = false;
    this.registerOnChange(this.onChange);
  }

  onChange(event: MatCheckboxChange){
    if(event.checked){
      // mapowanie true/false do 0 / 1 na potrzeby zgodnosci typow z db ms sql
      this.dataSetWrapper.setFieldValue(this.field, '1', null, false);
    } else {
      this.dataSetWrapper.setFieldValue(this.field, '0', null, false);
    }
    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
    }
  }

  public setValue(value: any) {
    if (value === null) {
      this.indeterminate = true;
    }
    super.setValue(value);
  }
}

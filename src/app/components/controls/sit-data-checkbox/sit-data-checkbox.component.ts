import { Component, OnInit, Input } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Component({
  selector: 'sit-data-checkbox',
  templateUrl: './sit-data-checkbox.component.html',
  styleUrls: ['./sit-data-checkbox.component.scss']
})
export class SitDataCheckboxComponent extends SitDataBaseComponent {
  @Input() label: string = '';
  @Input() width: string;


  ngOnInit(): void {
  }

}

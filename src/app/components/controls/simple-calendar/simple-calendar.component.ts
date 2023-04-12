import { Component, ViewEncapsulation, OnInit, ElementRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';

@Component({
  selector: 'simple-calendar',
  templateUrl: './simple-calendar.component.html',
  styleUrls: ['./simple-calendar.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'simple-calendar-component'}
})
export class SimpleCalendarComponent extends SitDataBaseComponent implements OnInit {
  now: any;
  day: any;
  month: any;
  year: any;
  daysInMonth: any;
  firstMonthDay: any;

  constructor(
    _renderer: Renderer2,
    // private viewContainerRef: ViewContainerRef,
    private hostRef:ElementRef
  ) {
    super(_renderer);

    this.now = new Date();
    this.day = this.now.getDate();
    this.month = this.now.getMonth();
    this.year = this.now.getFullYear();
    this.daysInMonth = new Date(this.year, this.month+1, 0).getDate();
    this.firstMonthDay = new Date(this.year, this.month, 1).getDate();
  }


  ngOnInit(): void {

    // dataSetWrapper
console.log('dataSetWrapper: ', this.dataSetWrapper);
console.log('this: ', this);
  }

  public afterSetDataSetWrapper() {
    
console.log('dataSetWrapper: ', this.dataSetWrapper);

  }

}

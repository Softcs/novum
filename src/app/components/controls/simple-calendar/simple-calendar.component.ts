import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'simple-calendar',
  templateUrl: './simple-calendar.component.html',
  styleUrls: ['./simple-calendar.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'simple-calendar-component'}
})
export class SimpleCalendarComponent implements OnInit {
  now: any;
  day: any;
  month: any;
  year: any;
  daysInMonth: any;
  firstMonthDay: any;

  constructor() { 
    this.now = new Date();
    this.day = this.now.getDate();
    this.month = this.now.getMonth();
    this.year = this.now.getFullYear();
    this.daysInMonth = new Date(this.year, this.month+1, 0).getDate();
    this.firstMonthDay = new Date(this.year, this.month, 1).getDate();
  }

  ngOnInit(): void {
  }

}

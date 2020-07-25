import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { sitProcExpanderItem } from './sit-proc-expander-item';

@Component({
  selector: 'sit-proc-expander',
  templateUrl: './sit-proc-expander.component.html',
  styleUrls: ['./sit-proc-expander.component.scss'],
  host: { 'class': 'sit-proc-expander' }
})
export class SitProcExpanderComponent implements OnInit {
  @Input()
  public items: Array<sitProcExpanderItem>;
  constructor() {

  }

  ngOnInit(): void {
    this.items = new Array<sitProcExpanderItem>();
  }

}

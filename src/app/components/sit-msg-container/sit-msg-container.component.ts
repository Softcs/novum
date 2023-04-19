import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sit-msg',
  templateUrl: './sit-msg-container.component.html',
  styleUrls: ['./sit-msg-container.component.scss'],
  host: {class: 'sit-msg-container'},
  encapsulation : ViewEncapsulation.None,
})
export class SitMsgContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dict-container',
  templateUrl: './dict-container.component.html',
  styleUrls: ['./dict-container.component.scss']
})
export class DictContainerComponent implements OnInit {
  @Input() ident: string;
  constructor() { }

  ngOnInit() {
  }

}

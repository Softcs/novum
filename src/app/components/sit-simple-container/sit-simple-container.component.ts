// import { Component, OnInit } from '@angular/core';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'sit-simple-container',
  template: `<ng-content></ng-content>`,
  // templateUrl: './sit-simple-container.component.html',
  styleUrls: ['./sit-simple-container.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-simple-container-component'}
})

export class SitSimpleContainerComponent implements OnInit 
{

  constructor() {}

  ngOnInit(): void {}

}

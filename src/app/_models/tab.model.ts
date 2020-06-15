import { Type } from '@angular/core';
export class Tab {
  public id: number;
  public title: string;
  public tabData: any;
  public active: boolean;
  //public component: Type<any>;
  public link: string;

//  constructor(component: Type<any>, link: string, title: string, tabData: any) {
  constructor(link: string, title: string, tabData: any) {
    this.tabData = tabData;
    this.title = title;
    this.link = link;
    this.active = true;
  }
}

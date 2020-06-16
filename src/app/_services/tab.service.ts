import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Tab } from '@app/_models/tab.model';
import { SitPulpitComponent } from '@app/containers/sit-pulpit';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  constructor(
    public router: Router
  ) { }

  public tabs: Tab[] = [
    new Tab('sitPulpit','sitPulpit', 'Pulpit', { parent: 'AppComponent' }),
    ];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    if (this.tabs.length > 0) {
    this.tabs[this.tabs.length - 1].active = true;
    }
    this.tabSub.next(this.tabs);

    //this.router.navigate([this.tabs[this.tabs.findIndex(tab => tab.active)].link])
  }

  public changeTab(index: number) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (index !== i ) { this.tabs[i].active = false; } else { this.tabs[i].active = true; }
      this.tabSub.next(this.tabs);
    }
    this.router.navigate([this.tabs[this.tabs.findIndex(tab => tab.active)].link])
  }

  public addTab(tab: Tab) {
    router: Router;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].active === true) {
         this.tabs[i].active = false;
      }
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    this.tabs.push(tab);
    this.tabSub.next(this.tabs);
    //console.log(this.tabs);
    this.router.navigate([this.tabs[this.tabs.findIndex(tab => tab.active)].link])
  }


}

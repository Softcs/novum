import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Tab } from '@app/_models/tab.model';
import { SitPulpitComponent } from '@app/containers/sit-pulpit';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  activeTab: number;

  constructor(
    public router: Router
  ) { }

  public tabs: Tab[] = [
    new Tab('sitPulpit','sitPulpit', 'Pulpit', { parent: 'AppComponent' }),
    ];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public removeTab(index: number) {
    this.changeTab(index - 1);
    console.log('removeTab',index,this.tabs,this.tabs[index - 1].link)
    // if (this.tabs.length > 0) {
    //   this.tabs[index].active = false;
    //   this.tabs[index].title = 'Do usunięcia';
    //   this.tabs[index - 1].active = true;
    //   this.tabs[index - 1].title = 'Do aktywacji';
    //   this.tabSub.next(this.tabs);
    //   this.router.navigate([this.tabs[index - 1].link])
    //   console.log('removeTab',index,this.tabs,this.tabs[index - 1].link)
    // }
    this.tabs.splice(index, 1);
    this.tabSub.next(this.tabs);
  }

  public changeTab(index: number) {
    this.activeTab = this.tabs.findIndex(t => t.active);
    this.tabs[this.activeTab].active = false;
    this.tabs[index].active = true;
    this.tabSub.next(this.tabs);
    this.activeTab = this.tabs.findIndex(t => t.active);
    if (this.tabs[this.activeTab].tabData['guid'] === undefined) {
      this.router.navigate([this.tabs[this.activeTab].link]);
    } else {
      this.router.navigate([this.tabs[this.activeTab].link, this.tabs[this.activeTab].tabData['guid']]);
    };
  }

  public addTab(tab: Tab) {
    this.activeTab = this.tabs.findIndex(t => t.active);
    if (this.tabs.findIndex(t => t.link === tab.link) !== -1) {
      this.changeTab(this.tabs.findIndex(t => t.link === tab.link))
    } else {
      this.tabs[this.activeTab].active = false;
      tab.id = this.tabs.length + 1;
      tab.active = true;
      this.tabs.push(tab);
      this.tabSub.next(this.tabs);
      this.activeTab = this.tabs.findIndex(t => t.active);

      if (this.tabs[this.activeTab].tabData['guid'] === undefined) {
        this.router.navigate([this.tabs[this.activeTab].link]);
      } else {
        this.router.navigate([this.tabs[this.activeTab].link, this.tabs[this.activeTab].tabData['guid']]);
      };
    }

    console.log('Tabs po utworzeniu nowego',this.tabs,this.tabs[this.activeTab].link)
  }


}

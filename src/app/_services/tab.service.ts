import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Tab } from '@app/_models/tab.model';
import { SitPulpitComponent } from '@app/containers/sit-pulpit';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  activeTabIndex: number;

  constructor(
    public router: Router
  ) { }

  public tabs: Tab[] = [
    new Tab('sitPulpit','sitPulpit', 'Pulpit', { parent: 'AppComponent' }),
    ];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public removeTab(index: number) {
    var wasActive = this.tabs[this.activeTabIndex].active;
    console.log('removeTab',index,this.tabs,this.tabs[index - 1].link)

    this.tabs.splice(index, 1);
    if (wasActive) {
      this.changeTab(index - 1);
    }
  }

  public changeTab(index: number) {
    this.activeTabIndex = this.tabs.findIndex(t => t.active);
    const lastActiveTab = this.tabs[this.activeTabIndex];
    if (lastActiveTab != null) {
      lastActiveTab.active = false;
    }

    this.tabs[index].active = true;
    this.tabSub.next(this.tabs);
    this.activeTabIndex = this.tabs.findIndex(t => t.active);
    let linkToNavigate = this.tabs[this.activeTabIndex].link
    let additionalParam = this.tabs[this.activeTabIndex].tabData['guid'];
    additionalParam == null ? this.router.navigate([linkToNavigate]) : this.router.navigate([linkToNavigate, additionalParam]);

  }

  public addTab(tab: Tab) {
    this.activeTabIndex = this.tabs.findIndex(t => t.active);
    if (this.tabs.findIndex(t => t.link === tab.link) !== -1) {
      this.changeTab(this.tabs.findIndex(t => t.link === tab.link));
    } else {
      this.tabs[this.activeTabIndex].active = false;
      tab.id = this.tabs.length + 1;
      tab.active = true;
      this.tabs.push(tab);
      this.tabSub.next(this.tabs);
      this.activeTabIndex = this.tabs.findIndex(t => t.active);

      if (this.tabs[this.activeTabIndex].tabData['guid'] === undefined) {
        this.router.navigate([this.tabs[this.activeTabIndex].link]);
      } else {
        this.router.navigate([this.tabs[this.activeTabIndex].link, this.tabs[this.activeTabIndex].tabData['guid']]);
      };
    }

    console.log('Tabs po utworzeniu nowego',this.tabs,this.tabs[this.activeTabIndex].link)
  }


}

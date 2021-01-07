import { Injectable } from '@angular/core';
import { Tab } from '@app/_models/tab.model';
import { SitPulpitComponent } from '@app/containers/sit-pulpit';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  public tabs: Tab[] = [
    new Tab(SitPulpitComponent, 'Pulpit', { parent: 'AppComponent' }),
    ];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public activeTabIndex: Subject<number>;
  
  constructor() { 
    this.activeTabIndex = new Subject<number>();
    this.activeTabIndex.next(-1);
  }


  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    if (this.tabs.length > 0) {
      this.tabs[this.tabs.length - 1].active = true;
    }
    this.tabSub.next(this.tabs);
    this.activeTabIndex.next(this.tabs.length - 1);   
  }

  public changeTab(index: number) {
    if (index < this.tabs.length && this.tabs[index].active) {
      return;
    }

    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].active = index !== i;
    }

    this.tabSub.next(this.tabs);
    this.activeTabIndex.next(index);    
  }

  public addTab(tab: Tab) {
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].active = false;
    }
    tab.id = this.tabs.length + 1;
    tab.active = true;
    
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].active = false;
    }

    this.tabs = [...this.tabs, tab]
    this.tabSub.next(this.tabs);

    this.activeTabIndex.next(tab.id - 1);  
  }
}

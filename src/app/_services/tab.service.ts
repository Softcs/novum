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
    this.tabSub.next(this.tabs);
    this.activeTabIndex.next(this.tabs.length - 1);
  }

  public changeTab(index: number) {
    this.activeTabIndex.next(index);
  }

  public addTab(tab: Tab) {
    tab.id = this.tabs.length + 1;    
    this.tabs = [...this.tabs, tab];
    this.tabSub.next(this.tabs);   
    this.activeTabIndex.next(tab.id - 1);
  }
}

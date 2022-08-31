import { Injectable } from '@angular/core';
import { Tab } from '@app/_models/tab.model';
import { SitPulpitComponent } from '@app/containers/sit-pulpit';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IStoredTabs } from '@app/_interfaces/IStoredTabs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private storedTabs: { [id: string] : IStoredTabs; } = {};
  private tabIndex: number;
  private defaultTab: Tab = new Tab(SitPulpitComponent, 'Pulpit', { parent: 'AppComponent' });


  public tabs: Tab[] = [this.defaultTab];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public activeTabIndex: Subject<number>;

  constructor() {
    this.activeTabIndex = new Subject<number>();
    this.activeTabIndex.next(-1);
  }

  private storeTabs(companyGUID: string) {
    this.storedTabs[companyGUID] =  {
         tabs : [...this.tabs],
        activeTabIndex : this.tabIndex
    }
    this.activeTabIndex.next(0);
  }

  private restoreTabs(companyGUID: string) {
    var def = this.storedTabs[companyGUID];
    var tabs = def?.tabs;
    if (!tabs) {
      this.tabs.length = 0;
      this.addTab(this.defaultTab);
    } else {
      this.tabs = tabs;
      this.tabSub.next(tabs);
      this.activeTabIndex.next(def.activeTabIndex);
    }
  }

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.tabSub.next(this.tabs);
    this.activeTabIndex.next(this.tabs.length - 1);
  }

  public changeTab(index: number) {
    this.tabIndex = index;
    this.activeTabIndex.next(this.tabIndex);
  }

  public addTab(tab: Tab) {
    tab.id = this.tabs.length + 1;
    this.tabs = [...this.tabs, tab];
    this.tabSub.next(this.tabs);
    this.activeTabIndex.next(tab.id - 1);
  }

  public companyChanged(newCompanyGUID: string, oldCompanyGUID: string) {
    this.storeTabs(newCompanyGUID);
    this.restoreTabs(oldCompanyGUID);
  }
}

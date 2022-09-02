import { Injectable } from '@angular/core';
import { Tab } from '@app/_models/tab.model';
import { SitPulpitComponent } from '@app/containers/sit-pulpit';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IStoredTabs } from '@app/_interfaces/IStoredTabs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private storedTabs: { [id: string] : IStoredTabs; } = {};
  private _tabIndex: number;
  private defaultTab: Tab = new Tab(SitPulpitComponent, 'Pulpit', { parent: 'AppComponent' });

  public get tabIndex() {
    return this._tabIndex;
  }

  public tabs: Tab[] = [this.defaultTab];

  public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

  public activeTabIndex: Subject<number>;
  tabService: any;

  constructor(private titleService: Title,) {
    this.activeTabIndex = new Subject<number>();
    this.activeTabIndex.next(-1);
  }

  private storeTabs(companyGUID: string) {
    this.storedTabs[companyGUID] =  {
         tabs : [...this.tabs],
         activeTabIndex : this.tabIndex
    }

    this.tabs.length = 0;
    this.tabSub.next([]);
  }

  private restoreTabs(companyGUID: string) {
    var def = this.storedTabs[companyGUID];
    var tabs = def?.tabs;
    if (!tabs) {
      this.tabs.length = 0;
      this.addTab(this.defaultTab);
    } else {
      this.tabs = tabs;
      this._tabIndex = def.activeTabIndex;
      this.tabSub.next(this.tabs);
    }
  }

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.tabSub.next(this.tabs);
    this.activeTabIndex.next(this.tabs.length - 1);
  }

  public changeTab(index: number) {
    this._tabIndex = index;
    this.activeTabIndex.next(this.tabIndex);
  }

  public addTab(tab: Tab) {
    tab.id = this.tabs.length + 1;
    this.tabs = [...this.tabs, tab];
    this.tabSub.next(this.tabs);
    this.activeTabIndex.next(tab.id - 1);
  }

  public companyChangedActivate(newIndex: number) {
      this._tabIndex = newIndex;
      var title = null;

      if (newIndex < this.tabs?.length) {
        title = this.tabs[newIndex].title;
      };

      this.titleService.setTitle(title ? title : '');
    }
  }

  public companyChanged(newCompanyGUID: string) {
    this.restoreTabs(newCompanyGUID);
  }

  public companyChanging(oldCompanyGUID: string) {
    this.storeTabs(oldCompanyGUID);
  }
}

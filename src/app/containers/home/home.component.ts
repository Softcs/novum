import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { User } from '@app/_models';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {class: 'router-flex'}
})
export class HomeComponent
{
    loading = false;
    users: User[];
    tabs = new Array<Tab>();
    selectedTabIndex: number;

    constructor(
      private ref: ChangeDetectorRef,
      private tabService: TabService
    ) {
      this.tabService.tabSub.subscribe(tabs => {
        this.tabs = tabs;
      });

      this.tabService.activeTabIndex.subscribe( i => {
        this.ref.detectChanges()
        this.selectedTabIndex = i;
      });    
    }


    tabChanged(event) {
      this.tabService.changeTab( this.selectedTabIndex );
      window.dispatchEvent(new Event('resize'));
    }

    removeTab(index: number): void {
      this.tabService.removeTab(index);
    }

    showClose(index: number): boolean {
      if ( this.selectedTabIndex === index && index !== 0 ) {
        return true;
      }
      return false;
    }
}

import { SitJPKVatComponent } from './../dictionaries/sit-jpk-vat/sit-jpk-vat.component';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { Title } from '@angular/platform-browser';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { runInThisContext } from 'vm';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {class: 'router-flex'}
})
export class HomeComponent implements OnInit {
    loading = false;
    users: User[];
    tabs = new Array<Tab>();
    selectedTab: number;
    showClose = false;

    constructor(
      private userService: UserService,
      private tabService: TabService,
      ) {

      }

    ngOnInit() {
      this.tabService.tabSub.subscribe(tabs => {
        this.tabs = tabs;
        this.selectedTab = tabs.findIndex(tab => tab.active);
        });

    }

    tabChanged(event) {
      this.tabService.changeTab( this.selectedTab );
      window.dispatchEvent(new Event('resize'));
    }

    removeTab(index: number): void {
      this.tabService.removeTab(index);
    }
}

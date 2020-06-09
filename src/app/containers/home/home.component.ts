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
      for ( let i = 0; i < this.tabService.tabs.length; i++ ) {
        if (this.selectedTab === i) {
          this.tabService.tabs[i].active = true;
        }
        else {
          this.tabService.tabs[i].active = false;
        }
        console.log(this.tabService.tabs,this.tabService.tabSub)
      }
      window.dispatchEvent(new Event('resize'));
    }

    removeTab(index: number): void {
      this.tabService.removeTab(index);
    }
}

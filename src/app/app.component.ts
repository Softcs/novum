import { NavService } from './_services/nav.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from './_services';
import { User } from './_models';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

    @ViewChild('appDrawer') appDrawer: ElementRef;
    currentUser: User;
    tabs = new Array<Tab>();
    selectedTab: number = -1;

    constructor(
        private router: Router,
        private gatewayService: GatewayService,
        private navService: NavService,
        private tabService: TabService,
    ) {
        this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
      this.tabService.tabSub.subscribe(tabs => {
        this.tabs = tabs;
        this.selectedTab = tabs.findIndex(tab => tab.active);
        });

        this.router.events.subscribe((res) => {
          this.selectedTab = this.tabs.indexOf(this.tabs.find(tab => '/'+tab.link === this.router.url));
          console.log(this.router.url.replace('/',''),this.selectedTab);
          // if (this.selectedTab === -1) {
          //   this.tabService.addTab(new Tab(this.router.url.replace('/',''), '' , { parent: 'AppComponent' }));
          // }
      });

    }

    ngAfterViewInit() {
      this.navService.appDrawer = this.appDrawer;
    }

    tabChanged(event) {
      this.selectedTab = this.tabService.tabs.findIndex( tab => '/'+tab.link === event)
      this.tabService.changeTab( this.selectedTab );

      // window.dispatchEvent(new Event('resize'));
    }

    removeTab(index: number): void {
      this.tabService.removeTab(index);
    }

}

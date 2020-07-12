import { NavService } from './_services/nav.service';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { GatewayService } from './_services';
import { User } from './_models';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild('appDrawer') appDrawer: ElementRef;
    currentUser: User;
    tabs = new Array<Tab>();
    activeTabIndex = 0;

    constructor(
        private router: Router,
        private gatewayService: GatewayService,
        private navService: NavService,
        private tabService: TabService,
    ) {
        this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    }

    ngOnInit() {
      this.activeTabIndex = this.tabs.findIndex(tab => tab.active);
      this.tabService.tabSub.subscribe(tabs => {
        this.tabs = tabs;
        this.activeTabIndex = tabs.findIndex(tab => tab.active);
        });
    }

    ngAfterViewInit() {
      this.navService.appDrawer = this.appDrawer;
      this.router.events.subscribe((res) => {
        if (res instanceof  NavigationEnd) {
          const url = res.url.slice(1);
          const activeTabIndex = this.tabs.findIndex(tab => tab.link === url);
          if (activeTabIndex === -1 && this.router.url !== '/login') {
            this.tabService.addTab(new Tab(
              url,
              url,
              this.router.config[this.router.config.findIndex(r => r.path === url)].data.title,
              { parent: 'AppComponent' }));
          }
        }
      });
    }

  removeTab(ident: string): void {
    console.log('kliknięcie', ident, this.activeTabIndex)
    this.tabService.removeTab(this.tabs.findIndex(tab => tab.ident === ident));
  }
}

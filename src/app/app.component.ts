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

    }

    ngAfterViewInit() {
      this.navService.appDrawer = this.appDrawer;
    }
}

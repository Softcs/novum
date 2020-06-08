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
    selectedTab: number;

    constructor(
        private router: Router,
        private gatewayService: GatewayService,
        private navService: NavService
    ) {
        this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
      this.navService.appDrawer = this.appDrawer;
    }

}

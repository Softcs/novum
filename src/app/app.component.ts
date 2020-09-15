import { NavService } from './_services/nav.service';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { GatewayService } from './_services';
import { User } from './_models';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import {LicenseManager} from "@ag-grid-enterprise/core";
LicenseManager.setLicenseKey("For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-13_November_2020_[v2]_MTYwNTIyNTYwMDAwMA==7e3cb37a704eaf68332d4aa39a647fc4");

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

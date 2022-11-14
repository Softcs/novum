import { NavService } from './_services/nav.service';
import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { GatewayService } from './_services';
import { User } from './_models';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { LicenseManager } from 'ag-grid-enterprise';

// LicenseManager.setLicenseKey("CompanyName=Seido IT Sp. z o.o,LicensedApplication=Novum,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-011338,ExpiryDate=22_October_2021_[v2]_MTYzNDg1NzIwMDAwMA==26a2e4d0770f50a7f21e7bf61f3e9830");
//LicenseManager.setLicenseKey("CompanyName=SEIDO IT SP Z O O,LicensedApplication=Novum,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-019111,ExpiryDate=22_October_2022_[v2]_MTY2NjM5MzIwMDAwMA==db796dfd0033663477a9ef35ade882a2");
LicenseManager.setLicenseKey("CompanyName=SEIDO IT SP Z O O,LicensedApplication=Novum,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-032421,SupportServicesEnd=22_October_2023_[v2]_MTY5NzkyOTIwMDAwMA==5617eeec87fc0c573c214b6e6f2110df");

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
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

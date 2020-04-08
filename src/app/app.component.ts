import { NavService } from './_services/nav.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { GatewayService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {

    @ViewChild('appDrawer') appDrawer: ElementRef;
    currentUser: User;

    constructor(
        private router: Router,
        private gatewayService: GatewayService,
        private navService: NavService
    ) {
        this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngAfterViewInit() {
      this.navService.appDrawer = this.appDrawer;
    }
    // logout() {
    //     this.gatewayService.logout();
    //     this.router.navigate(['/login']);
    // }
}

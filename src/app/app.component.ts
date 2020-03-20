import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GatewayService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private gatewayService: GatewayService
    ) {
        this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    }

    // logout() {
    //     this.gatewayService.logout();
    //     this.router.navigate(['/login']);
    // }
}

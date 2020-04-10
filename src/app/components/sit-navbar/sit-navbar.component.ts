import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { NavService } from '@app/_services/nav.service'

@Component({
  selector: 'sit-navbar',
  templateUrl: './sit-navbar.component.html',
  styleUrls: ['./sit-navbar.component.scss']
})
export class SitNavbarComponent implements OnInit {
  currentUser: User;
  caption: string;

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    public navService: NavService
    //private dictContainerComponent: DictContainerComponent
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    //this.dictContainerComponent.subscribe(x => this.caption = x);
  }

  logout() {
    this.navService.closeNav();
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}

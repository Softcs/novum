import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { DictContainerComponent } from '@app/components/dict-container';
import { NavService } from '../../_services/nav.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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

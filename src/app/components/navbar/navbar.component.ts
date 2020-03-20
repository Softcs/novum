import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GatewayService } from '@app/_services';
import { User } from '@app/_models';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router,
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}

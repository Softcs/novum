import { Component, OnInit } from '@angular/core';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';

export interface MenuItem {
Id: number;
Caption: string;
Link: string;
}

const MENU: MenuItem [] = [
  { Id: 0, Caption: "Konfiguracja Rail", Link: "/dict" },
  { Id: 1, Caption: "Rozrachunki", Link: "/rozrachunki" },
  { Id: 2, Caption: "Test datasource", Link: "/test" },
  { Id: 3, Caption: "Material test", Link: "/material-test" },
  { Id: 4, Caption: "ag-Grid test", Link: "/ag-grid-test" },
  { Id: 5, Caption: "PrimeNG test", Link: "/prime-ng-test" },
  { Id: 6, Caption: "NGX test", Link: "/ngx-datatable-test" },
  { Id: 8, Caption: "Seido IT", Link: "https://www.seidoit.pl" }
]


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  currentUser: User;
  menu: MenuItem[];

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.menu = MENU;
  }

  ngOnInit() {
    console.log(this.menu)
  }
  logout() {
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }
}

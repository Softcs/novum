import { Component, OnInit, ElementRef, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { NavItem } from '../../_models/nav-item';
import { NavService } from '../../_services/nav.service';


export interface MenuItem {
MenuItemId: number;
Caption: string;
Kind: string;
Link: string;
}

const MENU: MenuItem [] = [
  { MenuItemId: 0, Caption: "Konfiguracja Rail", Link: "/dict", Kind: "app" },
  { MenuItemId: 1, Caption: "Rozrachunki", Link: "/rozrachunki", Kind: "app" },
  { MenuItemId: 2, Caption: "Test datasource", Link: "/test", Kind: "app" },
  { MenuItemId: 3, Caption: "Material test", Link: "/material-test", Kind: "app" },
  { MenuItemId: 4, Caption: "ag-Grid test", Link: "/ag-grid-test", Kind: "app" },
  { MenuItemId: 5, Caption: "PrimeNG test", Link: "/prime-ng-test", Kind: "app" },
  { MenuItemId: 6, Caption: "NGX test", Link: "/ngx-datatable-test", Kind: "app" },
  { MenuItemId: 8, Caption: "Seido IT", Link: "https://www.seidoit.pl", Kind: "http" },
  { MenuItemId: 9, Caption: "Konfiguracja menu", Link: "/sitMenu", Kind: "app" }
]


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;

  currentUser: User;
  menu: MenuItem[];

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: '/',
      kind: 'app',
    },
    {
      displayName: 'Konfiguracja',
      iconName: '',
      children: [
        {
          displayName: 'Menu',
          iconName: '',
          route: 'sitMenu',
          kind: 'app'
        }
      ]
    },
    {
      displayName: 'Linki',
      iconName: '',
      children: [
        {
          displayName: 'Seido IT',
          iconName: '',
          route: 'https://www.seidoit.pl',
          kind: 'http'
        }
      ]
    }

  ]

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private navService: NavService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.menu = MENU;
  }

  ngOnInit() {
    console.log(this.menu)
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  logout() {
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }
}

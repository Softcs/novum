import { Component, OnInit, ElementRef, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { NavItem } from '../../_models/nav-item';
import { NavService } from '../../_services/nav.service';
import { DataSourceContainerComponent } from '@app/components/data-source-container';
import { DictContainerComponent } from '@app/components/dict-container';
import { DataSourceResponseWrapper } from '@app/_models';



export interface MenuItem {
MenuItemId: number;
caption: string;
Kind: string;
Link: string;
}

const MENU: MenuItem [] = [
  { MenuItemId: 0, caption: "Konfiguracja Rail", Link: "/dict", Kind: "app" },
  { MenuItemId: 1, caption: "Rozrachunki", Link: "/rozrachunki", Kind: "app" },
  { MenuItemId: 2, caption: "Test datasource", Link: "/test", Kind: "app" },
  { MenuItemId: 3, caption: "Material test", Link: "/material-test", Kind: "app" },
  { MenuItemId: 4, caption: "ag-Grid test", Link: "/ag-grid-test", Kind: "app" },
  { MenuItemId: 5, caption: "PrimeNG test", Link: "/prime-ng-test", Kind: "app" },
  { MenuItemId: 6, caption: "NGX test", Link: "/ngx-datatable-test", Kind: "app" },
  { MenuItemId: 8, caption: "Seido IT", Link: "https://www.seidoit.pl", Kind: "http" },
  { MenuItemId: 9, caption: "Konfiguracja menu", Link: "/sitMenu", Kind: "app" }
]


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  @ViewChild('sitDictcontainer') dictContainer: DictContainerComponent;

  currentUser: User;
  menu: MenuItem[];

  navItems: NavItem[] = [
    {
      caption: 'Home',
      icon: 'home',
      link: '/',
      kind: 'app',
    },
    {
      caption: 'Konfiguracja',
      icon: 'settings',
      children: [
        {
          caption: 'Menu',
          icon: '',
          link: 'sitMenu',
          kind: 'app'
        },
        {
          caption: 'Rail',
          icon: '',
          link: 'dict',
          kind: 'app'
        }
      ]
    },
    {
      caption: 'Linki',
      icon: 'link',
      children: [
        {
          caption: 'Seido IT',
          icon: '',
          link: 'https://www.seidoit.pl',
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
    const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitSideMenu");
    // //dataSourceResponseWrapper.SetActiveRow(dataSourceResponseWrapper.activeRow);
    // console.log(dataSourceResponseWrapper.rows);
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  logout() {
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }
}

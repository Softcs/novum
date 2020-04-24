import { Component, OnInit, ElementRef, ViewEncapsulation, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { NavItem } from '../../_models/nav-item';
import { NavService } from '../../_services/nav.service';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
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
  selector: 'sit-side-menu',
  templateUrl: './sit-side-menu.component.html',
  styleUrls: ['./sit-side-menu.component.scss']
})
export class SitSideMenuComponent implements OnInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  currentUser: User;
  menu: MenuItem[];
  navItems: NavItem[] = []

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private navService: NavService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.menu = MENU;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
        //console.log(dataSourceResponseWrapper.rows);

  }

  ngAfterContentInit() {

  }

  refreshAfter(dataSourceManager) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = dataSourceManager.getDateSourceWrapper("sitSideMenu");
    const menu: NavItem [] = dataSourceResponseWrapper.rows[0].Menu;

    this.navItems.length = 0;
    this.navItems = menu;
  }



  logout() {
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }
}

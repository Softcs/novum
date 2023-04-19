import { Component, OnInit, ElementRef, ViewEncapsulation, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';
import { NavItem } from '../../_models/nav-item';
import { NavService } from '../../_services/nav.service';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { Company } from '@app/_models/company';
import { TabService } from '@app/_services/tab.service';


@Component({
  selector: 'sit-side-menu',
  templateUrl: './sit-side-menu.component.html',
  styleUrls: ['./sit-side-menu.component.scss'],
  host: {class: 'sit-side-menu-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitSideMenuComponent implements OnInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  currentUser: User;
  navItems: NavItem[] = []

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private navService: NavService,
    private tabService: TabService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.changeUser(x));
    this.gatewayService.companyChanged.subscribe(x => this.companyChanged(x));
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
    const dataSourceResponseWrapper: DataSetWrapper = dataSourceManager?.getDateSourceWrapper("sitSideMenu");
    const menu: NavItem[] = dataSourceResponseWrapper?.rows != null ? dataSourceResponseWrapper.rows[0]?.Menu : null;

    if (this.navItems) {
      this.navItems.length = 0;
    }
    this.navItems = menu;
  }


  logout() {
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }

  changeUser(newUser: User) {
    this.currentUser = newUser;

  }

  companyChanged(newCompany: Company) {
    this.dictContainer?.loadData();
    this.tabService.companyChanged(newCompany.companyGUID);
  }
}

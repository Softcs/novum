import { SitChangeCompanyComponent } from './../../containers/sit-change-company/sit-change-company.component';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { NavService } from '@app/_services/nav.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { FactoryService } from '@app/_services/factory.service';

@Component({
  selector: 'sit-navbar',
  templateUrl: './sit-navbar.component.html',
  styleUrls: ['./sit-navbar.component.scss']
})
export class SitNavbarComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  currentUser: User;
  caption: string;
  title = 'Novum';
  tabs = new Array<Tab>();

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private titleService: Title,
    private tabService: TabService,
    public navService: NavService,
    public matDialog: MatDialog,
    private factoryService: FactoryService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);

    this.tabService.tabSub.subscribe(tabs => {
      var tab = tabs.find(tab => tab.active);
      if (!tab) {
        return;
      }
      
      this.title = tab.title;
      let browserTab = this.title;
      if (this.currentUser.company) {
          browserTab = this.currentUser.company.companyDescription + ' - ' + this.title;
      }

      this.titleService.setTitle(browserTab);      
    });
  }

  logout() {
    this.navService.closeNav();
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }

  openModalChangeCompany() {
    const dialogConfig = new MatDialogConfig();

    this.navService.closeNav();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.hasBackdrop = true;
    // dialogConfig.height = "440px";
    dialogConfig.width = "500px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(SitChangeCompanyComponent, dialogConfig);
  }

  onClicUser() {
    let createNew = true;

    for ( let i = 0; i < this.tabService.tabs.length; i++ ) {
      if (this.tabService.tabs[i].title === 'Konto użytkownika') {
        this.tabService.tabs[i].active = true;
        createNew = false;
      }
      else {
        this.tabService.tabs[i].active = false;
      }
    }

    if ( createNew ) {
      this.tabService.addTab(new Tab(this.factoryService.GetFactory('sitUserAccount'), 'Konto użytkownika' , { parent: 'AppComponent' }));

    }
    this.navService.closeNav();
  }

  closeNav() {
    this.navService.closeNav();
  }
}

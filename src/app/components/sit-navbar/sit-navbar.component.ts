import { SitChangeCompanyComponent } from './../../containers/sit-change-company/sit-change-company.component';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, Input } from '@angular/core';
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
  @Input() appDrawerParent: any;
  currentUser: User;
  caption: string;
  title = 'Pulpit';
  tabs = new Array<Tab>();
  selectedTabIndex: number;

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  constructor(
    private ref: ChangeDetectorRef,
    private router: Router,
    private gatewayService: GatewayService,
    private titleService: Title,
    private tabService: TabService,
    public navService: NavService,
    public matDialog: MatDialog,
    private factoryService: FactoryService
  ) {
    this.gatewayService.currentUser.subscribe(x => {
      this.currentUser = x;
      var title = this.currentUser?.company?.companyDescription;
      this.titleService.setTitle(title ? title : '');
    });

    this.tabService.activeTabIndex.subscribe( i => {
      this.ref.detectChanges()
      this.selectedTabIndex = i;
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
        this.tabService.changeTab(i);
        createNew = false;
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

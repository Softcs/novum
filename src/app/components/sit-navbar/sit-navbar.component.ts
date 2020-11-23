import { SitUserAccountComponent } from '@app/containers/dictionaries/sit-user-account';
import { SitChangeCompanyComponent } from './../../containers/sit-change-company/sit-change-company.component';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { NavService } from '@app/_services/nav.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { TabService } from '@app/_services/tab.service';
import { Tab } from '@app/_models/tab.model';
import { FactoryService } from '@app/_services/factory.service';

@Component({
  selector: 'sit-navbar',
  templateUrl: './sit-navbar.component.html',
  styleUrls: ['./sit-navbar.component.scss']
})
export class SitNavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  currentUser: User;
  caption: string;
  title = 'Novum';
  tabs = new Array<Tab>();

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private tabService: TabService,
    public navService: NavService,
    public matDialog: MatDialog,
    private factoryService: FactoryService

    //private dictContainerComponent: DictContainerComponent
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    //this.dictContainerComponent.subscribe(x => this.caption = x);

    this.tabService.tabSub.subscribe(tabs => {
      let i = -1;
      i = tabs.findIndex(tab => tab.active);
      if ( i > -1 ) {
        this.title = tabs[i].title;
        let browserTab = this.title;
        if (this.currentUser.company) {
            browserTab = this.currentUser.company.companyDescription + ' - ' + this.title;
        }

        this.titleService.setTitle(browserTab);
      }
      });

  }

  logout() {
    this.navService.closeNav();
    this.gatewayService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    // this.router
    //   .events.pipe(
    //     filter(event => event instanceof NavigationEnd),
    //     map(() => {
    //       let child = this.activatedRoute.firstChild;
    //       while (child.firstChild) {
    //         child = child.firstChild;
    //       }
    //       if (child.snapshot.data['title']) {
    //         return child.snapshot.data['title'];
    //       }
    //       return appTitle;
    //     })
    //   ).subscribe((ttl: string) => {
    //     this.titleService.setTitle(ttl);
    //     this.title = this.titleService.getTitle();
    //   });

    this.title = this.tabService.tabs[0].title;
  }

  ngAfterViewInit() {

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

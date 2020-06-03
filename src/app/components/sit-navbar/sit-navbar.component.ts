import { SitChangeCompanyComponent } from './../../containers/sit-change-company/sit-change-company.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { NavService } from '@app/_services/nav.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'sit-navbar',
  templateUrl: './sit-navbar.component.html',
  styleUrls: ['./sit-navbar.component.scss']
})
export class SitNavbarComponent implements OnInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  currentUser: User;
  caption: string;
  title = 'Novum'

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    public navService: NavService,
    public matDialog: MatDialog,
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
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
        this.title = this.titleService.getTitle();
      });

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

  closeNav() {
    this.navService.closeNav();
  }
}

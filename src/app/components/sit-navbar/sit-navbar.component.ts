import { SitChangeCompanyComponent } from './../../containers/sit-change-company/sit-change-company.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { NavService } from '@app/_services/nav.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'sit-navbar',
  templateUrl: './sit-navbar.component.html',
  styleUrls: ['./sit-navbar.component.scss']
})
export class SitNavbarComponent implements OnInit {
  currentUser: User;
  caption: string;

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    public navService: NavService,
    public matDialog: MatDialog
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
  }

  openModalChangeCompany() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.hasBackdrop = true;
    // dialogConfig.height = "440px";
    dialogConfig.width = "500px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(SitChangeCompanyComponent, dialogConfig);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper, User } from '@app/_models';
import { Router } from '@angular/router';
import { GatewayService } from '@app/_services';
import { Company } from '@app/_models/company';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { TabService } from '@app/_services/tab.service';
@Component({
  selector: 'app-sit-change-company',
  templateUrl: './sit-change-company.component.html',
  styleUrls: ['./sit-change-company.component.scss'],
  host: {class: 'router-flex'}
})
export class SitChangeCompanyComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  companies: any[];
  currentUser: User;

  constructor(
    private router: Router,
    private gatewayService: GatewayService,
    private titleService: Title,
    private tabService: TabService,
    public dialogRef: MatDialogRef<SitChangeCompanyComponent>
  )
  {

  }

  ngOnInit(): void {

  }

  refreshAfter(dataSourceManager) {
    const dataSourceResponseWrapper: DataSetWrapper = dataSourceManager.getDateSourceWrapper("sitAppUserCompanies");
    this.companies = dataSourceResponseWrapper?.rows;
  }

  onClick(companyRow) {
    this.gatewayService.currentUserValue.connection = companyRow.ConfigFile;
    var oldCompanyGUID = this.gatewayService.currentUserValue?.company?.companyGUID;
    this.gatewayService.currentUserValue.company = new Company(companyRow.CompanyIdent,
                                                               companyRow.CompanyDescription,
                                                               companyRow.sitCompaniesG,
                                                               companyRow.ConfigFile);
    this.gatewayService.saveCurrentUser();

    this.gatewayService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.titleService.setTitle(this.currentUser?.company?.companyDescription);
    });

    this.dialogRef.close();
    this.tabService.companyChanged(this.gatewayService.currentUserValue.company?.companyGUID,oldCompanyGUID);
    this.gatewayService.companyChanged.emit(this.gatewayService.currentUserValue?.company);

    this.router.navigate(['/login']);
  }

  close() {
    this.dialogRef.close();
  }

}

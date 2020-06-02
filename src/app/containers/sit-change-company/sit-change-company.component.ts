import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper, User } from '@app/_models';
import { Router } from '@angular/router';
import { GatewayService } from '@app/_services';
import { Company } from '@app/_models/company';

@Component({
  selector: 'app-sit-change-company',
  templateUrl: './sit-change-company.component.html',
  styleUrls: ['./sit-change-company.component.scss'],
  host: {class: 'router-flex'}
})
export class SitChangeCompanyComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  companies: any[];
  constructor(
    private router: Router,
    private gatewayService: GatewayService
  )
  {

  }

  ngOnInit(): void {
    this.gatewayService.currentUserValue.connection = null;
  }

  refreshAfter(dataSourceManager) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = dataSourceManager.getDateSourceWrapper("sitAppUserCompanies");
    this.companies = dataSourceResponseWrapper.rows;
  }

  onClick(companyRow) {
    this.gatewayService.currentUserValue.connection = companyRow.ConfigFile;
    this.gatewayService.currentUserValue.company = new Company();
    this.gatewayService.currentUserValue.company.companyIdent = companyRow.CompanyIdent;
    this.gatewayService.currentUserValue.company.companyDescription = companyRow.CompanyDescription;
    this.gatewayService.saveCurrentUser();
    this.router.navigate(['/login']);
  }
}

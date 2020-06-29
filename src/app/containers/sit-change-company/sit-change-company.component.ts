import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper, User } from '@app/_models';
import { Router } from '@angular/router';
import { GatewayService } from '@app/_services';
import { Company } from '@app/_models/company';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
    private gatewayService: GatewayService,
    public dialogRef: MatDialogRef<SitChangeCompanyComponent>
  )
  {

  }

  ngOnInit(): void {
    this.gatewayService.currentUserValue.connection = null;
  }

  refreshAfter(dataSourceManager) {
    const dataSourceResponseWrapper: DataSetWrapper = dataSourceManager.getDateSourceWrapper("sitAppUserCompanies");
    this.companies = dataSourceResponseWrapper.rows;
  }

  onClick(companyRow) {
    this.gatewayService.currentUserValue.connection = companyRow.ConfigFile;
    this.gatewayService.currentUserValue.company = new Company(companyRow.CompanyIdent, companyRow.CompanyDescription);
    this.gatewayService.saveCurrentUser();
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }

  close() {
    this.dialogRef.close();
  }

}

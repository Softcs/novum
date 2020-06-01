import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  refreshAfter(dataSourceManager) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = dataSourceManager.getDateSourceWrapper("sitAppUserCompanies");

    //this.companies.length = 0;
    this.companies = dataSourceResponseWrapper.rows;
  }

  onClick(company) {
    console.log(company);

    this.router.navigate(['/login']);
  }
}

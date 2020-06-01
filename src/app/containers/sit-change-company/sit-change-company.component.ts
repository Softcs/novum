import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';


@Component({
  selector: 'app-sit-change-company',
  templateUrl: './sit-change-company.component.html',
  styleUrls: ['./sit-change-company.component.scss'],
  host: {class: 'router-flex'}
})
export class SitChangeCompanyComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  get rowsAppUserCompanies() {
    const dataSourceResponseWrapper: DataSourceResponseWrapper =
      this.dictContainer.DataSourceManager.getDateSourceWrapper('sitAppUserCompanies');
    return dataSourceResponseWrapper.rows;

  }

  test() {
    const dataSourceResponseWrapper: DataSourceResponseWrapper =
      this.dictContainer.DataSourceManager.getDateSourceWrapper('sitAppUserCompanies');
    console.log(dataSourceResponseWrapper.rows);


  }
}

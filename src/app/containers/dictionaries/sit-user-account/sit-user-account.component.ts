import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';


@Component({
  selector: 'app-sit-user-account',
  templateUrl: './sit-user-account.component.html',
  styleUrls: ['./sit-user-account.component.scss']
})
export class SitUserAccountComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  constructor() {

  }


  ngOnInit(): void {

  }

  test() {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitAppUserAccount");

    console.log('test',dataSourceResponseWrapper.activeRow.UserLogin)
  }
}

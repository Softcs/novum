import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';


@Component({
  selector: 'app-sit-user-account',
  templateUrl: './sit-user-account.component.html',
  styleUrls: ['./sit-user-account.component.scss'],
  host: {class: 'router-flex'}
})
export class SitUserAccountComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  constructor() {

  }


  ngOnInit(): void {

  }

  get activeRowUserAccount() {
    return this.dictContainer?.activeRow('sitAppUserAccount');
  }

  onKey(e) {
    this.dictContainer.activeRow('sitAppUserAccount')[e.srcElement.id] = e.srcElement.value;
  }

  onChange(e) {
    const dataSetResponseWrapper: DataSetWrapper =
      this.dictContainer.DataSetManager.getDateSourceWrapper('sitAppUserAccount');
    dataSetResponseWrapper.setFieldValue(e.srcElement.id, e.srcElement.value, null, false);
  }
}

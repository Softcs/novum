import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';


@Component({
  selector: 'app-sit-white-list-vat',
  templateUrl: './sit-white-list-vat.component.html',
  styleUrls: ['./sit-white-list-vat.component.scss'],
  host: {class: 'router-flex'}
})
export class SitWhiteListVATComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  get activeRow() {
    return this.dictContainer?.activeRow('sitJPKCheckVatNIPNRB');
  }

  onChange(e) {
    const dataSetResponseWrapper: DataSetWrapper =
      this.dictContainer.DataSetManager.getDateSourceWrapper("sitJPKCheckVatNIPNRB");
    dataSetResponseWrapper.setFieldValue(e.srcElement.id, e.srcElement.value, null, false);
  }
}

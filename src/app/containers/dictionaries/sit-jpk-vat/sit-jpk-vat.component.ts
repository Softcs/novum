import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { environment } from '@environments/environment';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { SitDataInputComponent } from '@app/components/controls/sit-data-input/sit-data-input.component';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';


@Component({
  selector: 'app-sit-jpk-vat',
  templateUrl: './sit-jpk-vat.component.html',
  styleUrls: ['./sit-jpk-vat.component.scss']
})
export class SitJPKVatComponent implements OnInit {
  @ViewChild(SitDataSetContainerComponent, { static: true }) dataSourceContainer: SitDataSetContainerComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  sitJPKVATZakupSelected = [];
  sitJPKVATSprzedazSelected = [];
  sitJPKVATZakupCustSelected = [];
  sitJPKVATSprzedazCustSelected = [];
  sitJPKVATZakupSumSelected = [];
  sitJPKVATSprzedazSumSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() { }

  ngOnInit(): void {
  }

  calcZakupSum(name) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitJPKVATZakupSum");
    return dataSourceResponseWrapper.rows.map(row => row[name] != null ? row[name] : 0).reduce((s,v) =>s += v,0);
    }

  calcSprzedazSum(name) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitJPKVATSprzedazSum");
    return dataSourceResponseWrapper.rows.map(row => row[name] != null ? row[name] : 0).reduce((s,v) =>s += v,0);
    }

    noop() { return null; }

  onChange(e) {
    const dataSourceResponseWrapper: DataSetWrapper =
      this.dictContainer.DataSourceManager.getDateSourceWrapper("sitProcGetJPKData");
    dataSourceResponseWrapper.activeRow[e.srcElement.id] = e.srcElement.value;
  }

  tabChanged(event) {
    window.dispatchEvent(new Event('resize'));
  }
}

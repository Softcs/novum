import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '@environments/environment';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';
import { SitDataInputComponent } from '@app/components/controls/sit-data-input/sit-data-input.component';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';


@Component({
  selector: 'app-sit-jpk-vat',
  templateUrl: './sit-jpk-vat.component.html',
  styleUrls: ['./sit-jpk-vat.component.scss']
})
export class SitJPKVatComponent implements OnInit {
  @ViewChild(SitDataSourceContainerComponent, { static: true }) dataSourceContainer: SitDataSourceContainerComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  sitJPKVATZakupSelected = [];
  sitJPKVATSprzedazSelected = [];
  sitJPKVATZakupSumSelected = [];
  sitJPKVATSprzedazSumSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() { }

  ngOnInit(): void {
  }

  calcZakupSum(name) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitJPKVATZakupSum");
    return dataSourceResponseWrapper.rows.map(row => row[name] != null ? row[name] : 0).reduce((s,v) =>s += v,0);
    }
    noop() { return null; }
}

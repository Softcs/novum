import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';

@Component({
  selector: 'app-sit-customers',
  templateUrl: './sit-customers.component.html',
  styleUrls: ['./sit-customers.component.scss'],
  host: {class: 'router-flex'}
})
export class SitCustomersComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;
  @ViewChild('sitCustomers') table: any;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  currentUser: User;
  activeRow: any;
  sitCustomersSelected = [];

  constructor(
    private gatewayService: GatewayService
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  onActivateCustomers(event) {
    if (event.type == 'click') {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitCustomers');
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }
}

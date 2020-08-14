import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';

@Component({
  selector: 'app-sit-documents',
  templateUrl: './sit-documents.component.html',
  styleUrls: ['./sit-documents.component.scss'],
  host: {class: 'router-flex'}
})
export class SitDocumentsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  currentUser: User;
  activeRow: any;
  sitDocumentsHeadersSelected = [];
  sitDocumentsPositionsSelected = [];
  sitDocumentsVATFootersSelected = [];

  constructor(
    private gatewayService: GatewayService
    ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
     }


  ngOnInit(): void {
  }

  onActivateDocumentsHeaders(event) {
    if (event.type === 'click') {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsHeaders');
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }

  onActivateDocumentsPositions(event) {
    if (event.type === 'click') {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositions');
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }

  }

  onActivateDocumentsVATFooters(event) {
    if (event.type === 'click') {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitDocumentsPositions');
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }

  tabChanged(event) {
    window.dispatchEvent(new Event('resize'));
  }
}

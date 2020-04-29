import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';
import { SitDataInputComponent } from '@app/components/controls/sit-data-input/sit-data-input.component';
import { GatewayService } from '@app/_services';
import { User } from '@app/_models';
@Component({
  selector: 'app-sit-kancelaria',
  templateUrl: './sit-kancelaria.component.html',
  styleUrls: ['./sit-kancelaria.component.scss'],
  host: {class: 'router-flex'}
})
export class SitKancelariaComponent implements OnInit {
  @ViewChild('sitCustomers') customersTable: DatatableComponent;
  @ViewChild('sitAgreements') agreementsTable: DatatableComponent;
  @ViewChild('sitAttachments') attachmentsTable: DatatableComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  currentUser: User;
  Link: string;
  sitCustomersSelected = [];
  sitAgreementsSelected = [];
  sitAttachmentsSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor(
    private gatewayService: GatewayService,
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  activeRowCustomersChanged(activeRow) {
    this.sitCustomersSelected = [activeRow];
  }

  // onSelectCustomers({ selected }) {
  //   this.sitCustomersSelected.splice(0, this.sitCustomersSelected.length);
  //   this.sitCustomersSelected.push(...selected);
  // }

  onSelectAgreements({ selected }) {
    this.sitAgreementsSelected.splice(0, this.sitAgreementsSelected.length);
    this.sitAgreementsSelected.push(...selected);
  }

  onSelectAttachments({ selected }) {
    // console.log('selected',selected);
    // this.sitAttachmentsSelected.splice(0, this.sitAgreementsSelected.length);
    // this.sitAttachmentsSelected.push(...selected);

  }
  displayCheck(row) {
    return row.name !== 'xxx';
  }

  onActivateCustomers(event) {
    if (event.type == 'click') {
      const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitCustomers");
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }

  onActivateAgreements(event) {
    if (event.type == 'click') {
       const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitAgreements");
       dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }

  onActivateAttachments(event) {
    if (event.type == 'click') {
      const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitAttachments");
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }
  activeRowAttachmentChanged(activeRow) {
    console.log('activeRow',[activeRow]);
    console.log('sitAttachmentsSelected', this.sitAttachmentsSelected);

    this.sitAttachmentsSelected.splice(0, this.sitAttachmentsSelected.length);
    this.sitAttachmentsSelected.push(...[activeRow]);

    console.log('sitAttachmentsSelected',this.sitAttachmentsSelected);

    this.Link = activeRow == null
      ? "https://ws.seidoit.pl/service/attachments/get/" + "1" + "/" + "1" + "/" + "1.pdf" : // kiedy brak rekordu
        "https://ws.seidoit.pl/service/attachments/get/" + this.currentUser.token + "/" + activeRow['GUID'] + "/" + activeRow['FileName']

  }

  onFilterKeyEnter(event: any) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitFilter");
    dataSourceResponseWrapper.activeRow[event.target.name] = event.target.value;
    dataSourceResponseWrapper.SetActiveRow(dataSourceResponseWrapper.activeRow);

  }
}

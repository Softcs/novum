import { Component, OnInit, ViewChild } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
@Component({
  selector: 'app-sit-projects-pub',
  templateUrl: './sit-projects-pub.component.html',
  styleUrls: ['./sit-projects-pub.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProjectsPubComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  Link: string;
  currentUser: User;

  sitProjectsPubSelected = [];

  constructor(
    private gatewayService: GatewayService
    ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  get activeRowProjectsPub() {
    return this.dictContainer?.activeRow('sitProjectsPub');
  }

  onActivateProjectsPub(event) {
    if (event.type == 'click') {
      const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitProjectsPub");
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }

  activeRowProjectsPubChanged(activeRow) {
    // this.sitProjectsPubSelected.splice(0, this.sitProjectsPubSelected.length);
    // this.sitProjectsPubSelected.push(...[activeRow]);

    this.Link = activeRow['sitImagesG'] == null
      ? environment.apiUrl+"/service/attachments/get/" + this.currentUser.token + "/noimage/noimage.jpg" : // kiedy brak rekordu
        environment.apiUrl+"/service/attachments/get/" + this.currentUser.token + "/"+activeRow['sitImagesG']+"/"+ activeRow['FileName']

  }
}

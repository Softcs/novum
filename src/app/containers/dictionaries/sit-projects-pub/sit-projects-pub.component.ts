import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { MatSpinner } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-sit-projects-pub',
  templateUrl: './sit-projects-pub.component.html',
  styleUrls: ['./sit-projects-pub.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProjectsPubComponent implements OnInit, AfterViewInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  Link: string;
  currentUser: User;
  isLoading = true;
  activeRow: any;

  sitProjectsPubSelected = [];

  constructor(
    private gatewayService: GatewayService
    ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
//    console.log(this.isLoading)
  }

  ngAfterViewInit() {
    this.isLoading = false;
  }

  get activeRowProjectsPub() {
    return this.dictContainer?.activeRow('sitProjectsPub');
  }

  onActivateProjectsPub(event) {
    if (event.type == 'click') {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper("sitProjectsPub");
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

import { Component, OnInit, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { AttachmentsService } from '@app/_services/attachments.service';
import { MatSpinner } from '@angular/material/progress-spinner';
//import { AllModules } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-sit-projects-pub',
  templateUrl: './sit-projects-pub.component.html',
  styleUrls: ['./sit-projects-pub.component.scss'],
  host: {class: 'router-flex'}
})
export class SitProjectsPubComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;
  @ViewChild('sitProjectsPub') table: any;

  currentUser: User;
  Link: any;

  //modules: any[] = AllModules;
  defaultColDef;
  rowSelection;
  popupParent;

  gridApiProjectsPub;
  gridColumnApiProjectsPub;
  columnDefsProjectsPub;
  pinnedBottomRowDataProjectsPub;


  constructor(
    private gatewayService: GatewayService,
    private attachmentsService: AttachmentsService,
    ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.popupParent = document.querySelector('body');
      this.rowSelection = 'single';

      this.defaultColDef = {
        sortable: true,
        filter: true,
        //floatingFilter: true,
        resizable: true,
        enableValue: true,
        enableRowGroup: true,
        enablePivot: true,
      };
      this.columnDefsProjectsPub = [
        { headerName: 'Projekt', field: 'ProjectIdent', sortable: true, flex: 1, filter: 'agTextColumnFilter', autoHeight: true,
          cellRenderer: function(params) {
            return '<h6>' + params.data["ProjectName"] + '</h6>' + '<b>ID: </b>' + params.data["ProjectIdent"] + ' &nbsp&nbsp<b>EAN: </b>' + params.data["EAN"]
          }
        },
      ];

   }

  ngOnInit(): void {
  }

  onGridReadyProjectsPub(params) {
    this.gridApiProjectsPub = params.api;
    this.gridColumnApiProjectsPub = params.columnApi;

  }

  onRowClickedProjectsPub(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitProjectsPub');
    dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];

    this.gridColumnApiProjectsPub.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
  }

  activeRowProjectsPubChanged(activeRow) {
    this.Link = activeRow?.sitImagesG == null
    ? this.attachmentsService.getUrl(this.currentUser, "noimage", "noimage.jpg") // kiedy brak rekordu
    :  this.attachmentsService.getUrl(this.currentUser, activeRow.sitImagesG, activeRow.FileName) ;


  }

  showProjectPanel() {
    if (this.dictContainer !== undefined) {
      const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitProjectsPub');
      if (dataSourceResponseWrapper !== null && dataSourceResponseWrapper.rows !== null) {
        return true;
      }
    }
    return false;
  }

  get activeRowProjectsPub() {
    return this.dictContainer?.activeRow('sitProjectsPub')
  }
}

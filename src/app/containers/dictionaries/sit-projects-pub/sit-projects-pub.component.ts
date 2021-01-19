import { Component, OnInit, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { AttachmentsService } from '@app/_services/attachments.service';
import { MatSpinner } from '@angular/material/progress-spinner';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


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

  downloadPDF() {
    var element = document.getElementById('projectData');
    var divHeight = element.scrollHeight;
    var divWidth = element.clientWidth;
    var ratio = divHeight / divWidth;

    html2canvas(element, {scale: 1,allowTaint: true,
      useCORS: true,
      logging: false,
      height: window.outerHeight + window.innerHeight,
      windowHeight: window.outerHeight + window.innerHeight}).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const doc  = new jsPDF('p','mm','a4');
      const width = doc.internal.pageSize.getWidth();
      let height = doc.internal.pageSize.getHeight();
      height = ratio * width;
      doc.addImage(imgData,'png',10,10,width-20,height-10);
      doc.save("image.pdf")
    });
  }
}

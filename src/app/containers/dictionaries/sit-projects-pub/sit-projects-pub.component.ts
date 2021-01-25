import { Component, OnInit, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { AttachmentsService } from '@app/_services/attachments.service';
import { MatSpinner } from '@angular/material/progress-spinner';
import { GridService } from '@app/_services/grid.service';
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

  popupParent;
  columnDefsProjectsPub;



  constructor(
    private gatewayService: GatewayService,
    private attachmentsService: AttachmentsService,
    private gridService: GridService
    ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.popupParent = document.querySelector('body');

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

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
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

  printProject() {
    var content = document.getElementById('projectData').innerHTML;
    var printWindow =  window.open('', '', 'height=700, width=1000, left=100,top=100');

    printWindow.document.write('<html><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    document.querySelectorAll('link, style').forEach(htmlElement => {
      printWindow.document.head.appendChild(htmlElement.cloneNode(true));
    });
    printWindow.document.close();
    setTimeout(function() {
      printWindow.print();
      printWindow.close();
    }, 500);
  }
}

import { Component, } from '@angular/core';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-projects-pub',
  templateUrl: './sit-projects-pub.component.html',
  styleUrls: ['./sit-projects-pub.component.scss'],
  host: {class: 'router-flex'}
})


export class SitProjectsPubComponent extends SitDictBaseComponent {

  currentUser: User;
  Link: any;

      public prepareColumnsDefinitnion() {
        this.gridColumnsDefinition["sitProjectsPub"] = [
        { headerName: 'Projekt', field: 'ProjectIdent', sortable: true, flex: 1, filter: 'agTextColumnFilter', autoHeight: true,
          cellRenderer: function(params) {
            return '<h6>' + params.data["ProjectName"] + '</h6>' + '<b>ID: </b>' + params.data["ProjectIdent"] + ' &nbsp&nbsp<b>EAN: </b>' + params.data["EAN"]
          }
        },
      ];

   }

  activeRowProjectsPubChanged(activeRow) {
    this.Link = activeRow?.sitImagesG == null
    ? this.urlService.getAttachmentUrl("noimage", "noimage.jpg") // kiedy brak rekordu
    :  this.urlService.getAttachmentUrl(activeRow.sitImagesG, activeRow.FileName) ;

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
    return this.dictContainer?.activeRow('sitProjectsPubOneRow')
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

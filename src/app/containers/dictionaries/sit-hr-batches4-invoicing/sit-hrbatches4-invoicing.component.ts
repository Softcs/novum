import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-hrbatches4-invoicing',
  templateUrl: './sit-hrbatches4-invoicing.component.html',
  styleUrls: ['./sit-hrbatches4-invoicing.component.scss'],
  host: {class: 'router-flex'}
})
export class SitHRBatches4InvoicingComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition['sitHRBatches4Invoicing'] = [
          { headerName: 'Identyfikator', field: 'HRBatches4InvoicingIdent', tooltipField: 'HRBatches4InvoicingIdent', width: 300,
            cellClass: ['font11','textFormat']
          },
        ]

  }
  refreshAfter(dataSourceManager) {}

}

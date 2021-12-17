import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-hr-batches4-invoicing',
  templateUrl: './sit-hr-batches4-invoicing.component.html',
  styleUrls: ['./sit-hr-batches4-invoicing.component.scss'],
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

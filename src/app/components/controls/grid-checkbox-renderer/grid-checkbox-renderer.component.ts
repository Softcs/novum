import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'grid-checkbox-renderer',
  templateUrl: './grid-checkbox-renderer.component.html',
  styleUrls: ['./grid-checkbox-renderer.component.scss']
})
export class GridCheckboxRenderer implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  checkedHandler(event) {
      let checked = event.target.checked;
      let colId = this.params.column.colId;
      this.params.node.setDataValue(colId, checked);
  }

}

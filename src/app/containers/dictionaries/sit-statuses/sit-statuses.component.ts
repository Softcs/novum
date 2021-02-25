import { Component, OnInit, ViewChild, ViewChildren, QueryList, Inject, LOCALE_ID  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sit-statuses',
  templateUrl: './sit-statuses.component.html',
  styleUrls: ['./sit-statuses.component.scss']
})
export class SitStatusesComponent implements OnInit {

  popupParent;
  columnDefs;

  constructor(
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string,
  ) {
    this.popupParent = document.querySelector('body');
    this.columnDefs = [];
    



   }

  ngOnInit(): void {
  }
  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

  }
}

import { Component, OnInit, ViewChild, ViewChildren, QueryList, LOCALE_ID, Inject } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { formatDate } from '@angular/common';
import { formatNumber } from '@angular/common';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'app-sit-plstatement',
  templateUrl: './sit-plstatement.component.html',
  styleUrls: ['./sit-plstatement.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPLStatementComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  popupParent;
  defaultColDef;
  columnDefs;
  excelStyles;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
    this.popupParent = document.querySelector('body');
  }

  ngOnInit(): void {
  }

}

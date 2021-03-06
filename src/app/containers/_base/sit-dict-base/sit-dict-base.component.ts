import { Component, OnInit } from '@angular/core';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'sit-dict-base',
  templateUrl: './sit-dict-base.component.html',
  styleUrls: ['./sit-dict-base.component.scss']
})
export class SitDictBaseComponent implements OnInit {
  public popupParent;
  public frameworkComponents;
  public currentUser: User;
  
  constructor(    
    protected gatewayService: GatewayService,
    protected gridService: GridService) { 
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.popupParent = document.querySelector('body');
      this.frameworkComponents = {
        gridCheckboxRenderer: GridCheckboxRenderer,
      };

    }

  ngOnInit(): void {
  }

  protected columnsDefinition() {

  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitCustomersId')) {
      params.columnApi.setColumnsVisible(['sitCustomersId','sitCustomersG'], false);
    }
  }



}

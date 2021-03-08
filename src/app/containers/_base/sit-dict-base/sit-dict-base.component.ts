import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'sit-dict-base',
  templateUrl: './sit-dict-base.component.html',
  styleUrls: ['./sit-dict-base.component.scss']
})
export class SitDictBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;
  
  public popupParent;
  public frameworkComponents;
  public currentUser: User;
  public gridColumnsDefinition = {};

  constructor(    
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    @Inject(LOCALE_ID) protected locale: string) { 
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.popupParent = document.querySelector('body');
      this.frameworkComponents = {
        gridCheckboxRenderer: GridCheckboxRenderer,
      };
    
      this.prepareColumnsDefinitnion();
    }

  ngAfterViewInit(): void {
    this.prepareGrid();    
  }

  ngOnInit(): void {
    
    this.dictInit()
  }
  
  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);

    if (params.columnApi.getColumn('sitCustomersId')) {
      params.columnApi.setColumnsVisible(['sitCustomersId','sitCustomersG'], false);
    }
  }

  private prepareGrid() {
    var gridColumnsDefinition = this.gridColumnsDefinition;    

    this.dictContainer.DataSetManager.prepareGrid = function(gridApi, ident) {
      if (!gridApi.getColumnDefs() || gridApi.getColumnDefs().length == 0) {          
        var columns = gridColumnsDefinition[ident];
        gridApi.setColumnDefs(columns);
      }
      
      gridApi.setPopupParent(this.popupParent);             
    }
  }

  

  public dictInit(): void {

  }

  public gridReady(params):void {

  }

  public prepareColumnsDefinitnion() {

  }
}

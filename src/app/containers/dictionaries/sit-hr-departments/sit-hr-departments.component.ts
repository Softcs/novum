import { Component, OnInit, ViewChild, ViewChildren, QueryList, ComponentFactoryResolver } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'sit-hr-departments',
  templateUrl: './sit-hr-departments.component.html',
  styleUrls: ['./sit-hr-departments.component.scss'],
  host: {class: 'router-flex'}
})
export class SitHRDepartmentsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  columnDefs;
  popupParent;

  constructor(
    private gridService: GridService
  ) {
    this.popupParent = document.querySelector('body');

    this.columnDefs = [
      { headerName: 'Identyfikator', field: 'HRDepartmentIdent', filter: 'agTextColumnFilter' },
      { headerName: 'Nazwa', field: 'HRDepartmentName', filter: 'agTextColumnFilter' },
      { headerName: 'Identyfikator zewnętrzny', field: 'ExtIdent01', filter: 'agTextColumnFilter' },
    ];

   }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
  }
}

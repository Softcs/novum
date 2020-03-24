import { Component, OnInit, ViewChild } from '@angular/core';
import { DictContainerComponent } from '../../../components/dict-container';
import { MatTableDataSource, MatSort, MatPaginator, MatTable } from '@angular/material';
@Component({
  templateUrl: 'testDict.component.html',
  styleUrls: ['testDict.component.scss']
})
export class testDict implements OnInit {

  displayedColumns: string[] = ['OperationIdent'];
  ngOnInit() {

  }
  ngAfterViewInit (){
    // this.rows =
  }
  ngAfterContentInit() {

  }
  onClick(){

  }

}

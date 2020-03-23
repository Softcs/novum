import { Component, OnInit, ViewChild } from '@angular/core';
import { DictContainerComponent } from '../../../components/dict-container';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
@Component({
  templateUrl: 'testDict.component.html',
  styleUrls: ['testDict.component.scss']
})
export class testDict implements OnInit {
  //public rows = new MatTableDataSource([{ OperationIdent: "aaa" }, { OperationIdent: "bb" }]);
  displayedColumns: string[] = ['OperationIdent'];
  ngOnInit() {

  }
  ngAfterViewInit (){
    // this.rows =
  }
  onClick(){

  }

}

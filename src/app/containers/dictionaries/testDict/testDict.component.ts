import { Component, OnInit, ViewChild } from '@angular/core';
import { DictContainerComponent } from '../../../components/dict-container';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
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

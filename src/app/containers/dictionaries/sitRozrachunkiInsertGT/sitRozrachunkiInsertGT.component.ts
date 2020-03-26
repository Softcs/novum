import { Component, OnInit, ViewChild } from '@angular/core';
import { sitSetDataSourceDirective, DataSourceContainerComponent } from '@app/components/data-source-container';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import * as $ from 'jquery';
@Component({
  selector: 'sitRozrachunkiInsertGT',
  templateUrl: './sitRozrachunkiInsertGT.component.html',
  styleUrls: ['./sitRozrachunkiInsertGT.component.scss']
})
export class SitRozrachunkiInsertGTComponent implements OnInit {
  displayedColumns: string[] = ['adr_Nazwa','nzf_NumerPelny','nzf_Data','nzf_TerminPlatnosci','DniSpoznienia','naleznosc','zobowiazanie'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(DataSourceContainerComponent, { static: true }) dataSourceContainer: DataSourceContainerComponent;
  constructor() { }

  ngOnInit() {
  }
  applyFilter(event: Event,obj:any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceContainer.rows.filter = filterValue.trim().toLowerCase();
  }
}

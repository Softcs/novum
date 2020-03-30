import { map } from 'rxjs/operators';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { sitSetDataSourceDirective, DataSourceContainerComponent } from '@app/components/data-source-container';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as $ from 'jquery';
import * as XLSX from 'xlsx';
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
  @ViewChild('TABLE', {static: true}) table: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  applyFilter(event: Event,obj:any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceContainer.rows.filter = filterValue.trim().toLowerCase();

    console.log(this.getSumNaleznosc());
  }
  getSumNaleznosc(){
    return this.dataSourceContainer.rows.data.reduce((summ, v) => summ += v.naleznosc == null ? 0 : parseInt(v.naleznosc), 0) ;
  }

  getSumZobowiazanie(){
    return this.dataSourceContainer.rows.data.reduce((summ, v) => summ += v.zobowiazanie == null ? 0 : parseInt(v.zobowiazanie), 0) ;
  }
  ExportTOExcel()
  {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');

  }
}

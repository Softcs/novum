import { map } from 'rxjs/operators';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { sitSetDataSourceDirective, SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as $ from 'jquery';
import * as XLSX from 'xlsx';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DataSourceResponseWrapper } from '@app/_models';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DatatableComponent } from '@swimlane/ngx-datatable';



@Component({
  selector: 'sit-rozrachunki-insert-gt',
  templateUrl: './sit-rozrachunki-insert-gt.component.html',
  styleUrls: ['./sit-rozrachunki-insert-gt.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRozrachunkiInsertGTComponent implements OnInit {
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(SitDataSourceContainerComponent, { static: true }) dataSourceContainer: SitDataSourceContainerComponent;
  @ViewChild('TABLE', {static: true}) table: ElementRef;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChild('sit-rozrachunki-insert-gt') menuTable: DatatableComponent;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;


  sitRozrachunkiInsertGTselected = [];


  constructor() { }

  ngOnInit() {
  }

  onSelectRozrachunki({ selected }) {
    this.sitRozrachunkiInsertGTselected.splice(0, this.sitRozrachunkiInsertGTselected.length);
    this.sitRozrachunkiInsertGTselected.push(...selected);
  }

  ExportTOExcel()
  {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');

  }

  onFilterKeyEnter(event:any) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitFilter");

    dataSourceResponseWrapper.activeRow[event.target.name] = event.target.value;
    dataSourceResponseWrapper.SetActiveRow(dataSourceResponseWrapper.activeRow);

  }
}

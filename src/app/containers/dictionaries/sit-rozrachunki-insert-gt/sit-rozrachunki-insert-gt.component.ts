import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container';
import { DataSetWrapper } from '@app/_models';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { GridCheckboxRenderer } from '@app/components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';

@Component({
  selector: 'sit-rozrachunki-insert-gt',
  templateUrl: './sit-rozrachunki-insert-gt.component.html',
  styleUrls: ['./sit-rozrachunki-insert-gt.component.scss'],
  host: {class: 'router-flex'}
})
export class SitRozrachunkiInsertGTComponent implements OnInit {
  @ViewChild(SitDataSetContainerComponent, { static: true }) dataSourceContainer: SitDataSetContainerComponent;
  @ViewChild('TABLE', {static: true}) table: ElementRef;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;


  sitRozrachunkiInsertGTselected = [];

  popupParent;
  frameworkComponents;

  gridApi;
  gridColumnApi;
  columnDefs;
  pinnedBottomRowData;


  constructor() {
    this.popupParent = document.querySelector('body');

    this.frameworkComponents = {
      gridCheckboxRenderer: GridCheckboxRenderer,
    };

    this.columnDefs = [
      { headerName: 'Kontrahent', field: 'adr_Nazwa', sortable: true, filter: 'agTextColumnFilter' },
      { headerName: 'Rozrachunek', field: 'nzf_NumerPelny', sortable: true, filter: 'agTextColumnFilter'},
      { headerName: 'Data', field: 'nzf_Data', sortable: true, filter: 'agTextColumnFilter'},
      { headerName: 'Termin pł.', field: 'nzf_TerminPlatnosci', sortable: true, filter: 'agTextColumnFilter'},
      { headerName: 'Dni sp.', field: 'DniSpoznienia', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn'},
      { headerName: 'Należność', field: 'naleznosc', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn'},
      { headerName: 'Zobowiązanie', field: 'zobowiazanie', sortable: true, filter: 'agTextColumnFilter', type: 'numericColumn'},
    ];

  }

  ngOnInit() {
  }

  onSelectRozrachunki({ selected }) {
    this.sitRozrachunkiInsertGTselected.splice(0, this.sitRozrachunkiInsertGTselected.length);
    this.sitRozrachunkiInsertGTselected.push(...selected);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onRowClicked(event) {
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitParams');
      dataSourceResponseWrapper.SetActiveRow(event.data);
  }

  onFirstDataRendered(params) {
    const allColumnIds = [];

    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
  }

}

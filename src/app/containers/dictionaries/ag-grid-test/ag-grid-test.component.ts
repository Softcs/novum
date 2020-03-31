import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'ag-grid-test',
  templateUrl: './ag-grid-test.component.html',
  styleUrls: ['./ag-grid-test.component.scss']
})
export class AgGridTestComponent implements OnInit {
  columnDefs = [
    { headerName: 'Make',
      field: 'make',
      sortable: true,
      filter: "agTextColumnFilter",
      filterParams: {
        cellHeight: 50,
        resetButton: true,
        applyButton: true,
        debounceMs: 200
      },
    checkboxSelection: true },
    {headerName: 'Model', field: 'model', sortable: true, filter: "agTextColumnFilter" },
    {headerName: 'Price', field: 'price', sortable: true, filter: "agNumberColumnFilter" }
  ];



  @ViewChild('agGrid') agGrid: AgGridAngular;
  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    // this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}
}

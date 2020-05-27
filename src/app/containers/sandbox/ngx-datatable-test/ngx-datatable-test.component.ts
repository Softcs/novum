import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-ngx-datatable-test',
  templateUrl: './ngx-datatable-test.component.html',
  styleUrls: ['./ngx-datatable-test.component.scss']
})
export class NgxDatatableTestComponent implements OnInit {
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
    { salary: 'Salary' }
  ];
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', salary: 3000 },
    { name: 'Dany', gender: 'Male', company: 'KFC', salary: 3000 },
    { name: 'Molly', gender: 'Female', company: 'Burger King', salary: 3000 },
    { name: 'Piotr', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Radek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Maciej', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Igor', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Daniel', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Władek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Heniek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Rysio', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Bolek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Andrzej', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Tadek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Franek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Zyga', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Antek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Jacek', gender: 'Male', company: 'Seido IT', salary: 3000 },
    { name: 'Basia', gender: 'Female', company: 'Seido IT', salary: 3000 },
    { name: 'Kasia', gender: 'Female', company: 'Seido IT', salary: 3000 },
  ];

  selected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  remove() {
    this.selected = [];
  }

  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }

  hash_512(){
    let a = '20200511524277552337109018410000000129827598';
    for (let i=0; i<1; i++){
      a = sha512.sha512(a);
    }
    console.log( a);

  }
}

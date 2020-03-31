import { Component, OnInit } from '@angular/core';
import { FilterUtils } from 'primeng/utils';

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

export interface SelectItem {
  label?: string;
  value: any;
  styleClass?: string;
  icon?: string;
  title?: string;
  disabled?: boolean;
}

const CARS: Car[] =[
      {brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff'},
      {brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345'},
      {brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr'},
      {brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh'},
      {brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34'},
      {brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj'},
      {brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr'},
      {brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34'},
      {brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5'},
      {brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s'}
  ];


@Component({
  selector: 'prime-ng-test',
  templateUrl: './prime-ng-test.component.html',
  styleUrls: ['./prime-ng-test.component.scss']
})
export class PrimeNgTestComponent implements OnInit {
  dataSource: any [];
  cols: any[];
  brands: SelectItem[];
  colors: SelectItem[];
  yearFilter: number;
  yearTimeout: any;

  constructor() {
    this.dataSource = CARS;
    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
  ];

  this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
  ];

  this.cols = [
      { field: 'vin', header: 'Vin', filterMatchMode:'custom-equals' },
      { field: 'year', header: 'Year', filterMatchMode:'custom-equals' },
      { field: 'brand', header: 'Brand', filterMatchMode:'custom-equals' },
      { field: 'color', header: 'Color', filterMatchMode:'custom-equals' }
  ];

  FilterUtils['custom-equals'] = (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }

    return value.toString() === filter.toString();
  }
  }

  ngOnInit() {
    this.dataSource = CARS;
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    console.log(this.dataSource);
    console.log(this.cols);
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, 'year', 'gt');
    }, 250);
}
}

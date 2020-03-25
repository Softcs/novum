import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sitRozrachunkiInsertGT',
  templateUrl: './sitRozrachunkiInsertGT.component.html',
  styleUrls: ['./sitRozrachunkiInsertGT.component.scss']
})
export class SitRozrachunkiInsertGTComponent implements OnInit {
  displayedColumns: string[] = ['adr_Nazwa'];

  constructor() { }

  ngOnInit() {
  }

}

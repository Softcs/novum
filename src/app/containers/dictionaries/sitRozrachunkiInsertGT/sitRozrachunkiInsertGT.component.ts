import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sitRozrachunkiInsertGT',
  templateUrl: './sitRozrachunkiInsertGT.component.html',
  styleUrls: ['./sitRozrachunkiInsertGT.component.scss']
})
export class SitRozrachunkiInsertGTComponent implements OnInit {
  displayedColumns: string[] = ['adr_Nazwa','nzf_NumerPelny','nzf_Data','nzf_TerminPlatnosci','DniSpoznienia','naleznosc','zobowiazanie'];

  constructor() { }

  ngOnInit() {
  }

}

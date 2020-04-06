import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'sitMenu',
  templateUrl: './sitMenu.component.html',
  styleUrls: ['./sitMenu.component.scss']
})
export class SitMenuComponent implements OnInit {
  @ViewChild('sitMenu') menuTable: DatatableComponent;

  selected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() { }

  ngOnInit(): void {


  }

  onSelectMenu({ selected }) {
    console.log('Select Event', this.menuTable);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onSelect({ selected }) {
     console.log('Select Event', selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  add() {
    //this.selected.push(this.rowsMenu[1], this.rowsMenu[3]);
  }

  update() {
   // this.selected = [this.rowsMenu[1], this.rowsMenu[3]];
  }

  remove() {
    this.selected = [];
  }
  displayCheck(row) {
    return row.name !== 'xxx';
  }

  onActivate(event) {
    if(event.type == 'click') {
        console.log("a",event.row);
      this.menuTable.sitDataSource.SetAvtiveRow(event.row);
    }
}
}

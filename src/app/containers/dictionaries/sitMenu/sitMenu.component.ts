import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'sitMenu',
  templateUrl: './sitMenu.component.html',
  styleUrls: ['./sitMenu.component.scss']
})
export class SitMenuComponent implements OnInit {
  @ViewChild('sitMenu')

  menuTable: DatatableComponent;

  sitMenuSelected = [];
  sitMenuItemsSelected = [];
  sitAppUsersSelected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() { }

  ngOnInit(): void {

  }

  onSelectMenu({ selected }) {
    console.log('Select Event', selected, this.sitMenuSelected);
    this.sitMenuSelected.splice(0, this.sitMenuSelected.length);
    this.sitMenuSelected.push(...selected);
  }

  onSelectMenuItems({ selected }) {
    this.sitMenuItemsSelected.splice(0, this.sitMenuItemsSelected.length);
    this.sitMenuItemsSelected.push(...selected);
  }

  onSelectAppUsers({ selected }) {

    this.sitAppUsersSelected.splice(0, this.sitAppUsersSelected.length);
    this.sitAppUsersSelected.push(...selected);
  }

  add() {
    //this.selected.push(this.rowsMenu[1], this.rowsMenu[3]);
  }

  update() {
   // this.selected = [this.rowsMenu[1], this.rowsMenu[3]];
  }

  remove() {
    this.sitMenuSelected = [];
  }
  displayCheck(row) {
    return row.name !== 'xxx';
  }

  onActivate(event) {
    if(event.type == 'click') {
        console.log("a",event.row);
   //   this.menuTable.sitDataSource.SetAvtiveRow(event.row);
    }
}
}

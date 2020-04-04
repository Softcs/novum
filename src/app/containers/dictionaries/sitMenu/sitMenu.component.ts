import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';

@Component({
  selector: 'sitMenu',
  templateUrl: './sitMenu.component.html',
  styleUrls: ['./sitMenu.component.scss']
})
export class SitMenuComponent implements OnInit {
  rowsMenu = [
    { MenuId: 1, Symbol: 'MainMenu', Caption: 'Menu główne'},
    { MenuId: 2, Symbol: 'MenuPublicat', Caption: 'Menu Publicat'}
  ]
  rowsMenuItems = [
    { MenuItemId: 0, MenuId:1, Caption: "Konfiguracja Rail", Link: "/dict", Kind: "app" },
    { MenuItemId: 1, MenuId:1, Caption: "Rozrachunki", Link: "/rozrachunki", Kind: "app" },
    { MenuItemId: 2, MenuId:1, Caption: "Test datasource", Link: "/test", Kind: "app" },
    { MenuItemId: 3, MenuId:1, Caption: "Material test", Link: "/material-test", Kind: "app" },
    { MenuItemId: 4, MenuId:1, Caption: "ag-Grid test", Link: "/ag-grid-test", Kind: "app" },
    { MenuItemId: 5, MenuId:1, Caption: "PrimeNG test", Link: "/prime-ng-test", Kind: "app" },
    { MenuItemId: 6, MenuId:1, Caption: "NGX test", Link: "/ngx-datatable-test", Kind: "app" },
    { MenuItemId: 8, MenuId:1, Caption: "Seido IT", Link: "https://www.seidoit.pl", Kind: "http" },
    { MenuItemId: 9, MenuId:1, Caption: "Konfiguracja menu", Link: "/sitMenu", Kind: "app" }
  ]
  rowsAppUsers = [
    { AppUserId: 0, UserLogin: "piotr.ratajczak@seidoit.pl", UserPassword: "****", Name: "Piotr", SurName: "Ratajczak", IsActive: 1, MenuId: 1 },
    { AppUserId: 0, UserLogin: "radoslaw.motak@seidoit.pl", UserPassword: "****", Name: "Radoslaw", SurName: "Motak", IsActive: 1, MenuId: 1 },
    { AppUserId: 0, UserLogin: "piotr.podsiedlik@publicat.pl", UserPassword: "****", Name: "Piotr", SurName: "Podsiedlik", IsActive: 1, MenuId: 2 },
  ]
  selected = [];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  constructor() { }

  ngOnInit(): void {

  }
  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  add() {
    this.selected.push(this.rowsMenu[1], this.rowsMenu[3]);
  }

  update() {
    this.selected = [this.rowsMenu[1], this.rowsMenu[3]];
  }

  remove() {
    this.selected = [];
  }
  displayCheck(row) {
    return row.name !== 'xxx';
  }

  onActivate(event) {
    if(event.type == 'click') {
        console.log(event.row);
    }
}
}

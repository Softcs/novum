import { Component, OnInit, ViewChild, ContentChild, Input, ComponentFactoryResolver } from '@angular/core';
import { ColumnMode, SelectionType } from '../../../../ngx/public-api';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SitDataSourceContainerComponent } from '@app/components/sit-data-source-container';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSourceResponseWrapper } from '@app/_models';
import { SitDataInputComponent } from '@app/components/controls/sit-data-input/sit-data-input.component';

@Component({
  selector: 'sit-menu',
  templateUrl: './sit-menu.component.html',
  styleUrls: ['./sit-menu.component.scss'],
  host: {class: 'router-flex'}
})
export class SitMenuComponent implements OnInit {
  @ViewChild('sit-menu') menuTable: DatatableComponent;
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;

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

  onActivateMenu(event) {
    if (event.type == 'click') {

      const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitMenu");
      console.log("onActivateMenu", event.row, dataSourceResponseWrapper);
      dataSourceResponseWrapper.SetActiveRow(event.row);
    }
  }


  onActivate(event) {
    if(event.type == 'click') {
        console.log("a",event.row);
    }
  }

  onFilterKeyEnter(event:any) {
    const dataSourceResponseWrapper: DataSourceResponseWrapper = this.dictContainer.DataSourceManager.getDateSourceWrapper("sitFilter");
    console.log("onFilterKeyEnter", event.target.name);

    dataSourceResponseWrapper.activeRow[event.target.name] = event.target.value;
    //console.log("dataSourceResponseWrapper.activeRow", dataSourceResponseWrapper.activeRow);
    //console.log("dataSourceResponseWrapper.rows", dataSourceResponseWrapper.rows);
    dataSourceResponseWrapper.SetActiveRow(dataSourceResponseWrapper.activeRow);

  }

}

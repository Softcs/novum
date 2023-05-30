import { Component, ViewEncapsulation } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'sit-agrid-pulpit-reminder',
  templateUrl: './sit-agrid-pulpit-reminder.component.html',
  styleUrls: ['./sit-agrid-pulpit-reminder.component.scss'],
  host: {class: 'sit-agrid-pulpit-reminder-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitAgridPulpitReminderComponent {

  params: any;
  public cellValue: string;
  linkParams: any;

  // constructor() { }

  agInit(params: ICellRendererParams) 
  {
    this.params = params;
    this.cellValue = this.getValueToDisplay(params);
    // this.linkParams = {caption: 'Aktualizuj ' + this.params?.data?.Message.toLowerCase()  , kind: 'app', link: this.params?.data?.DictionaryIdent, tabName: this.params?.data?.DictionaryName};
    this.linkParams = {caption: this.params?.data?.Message , kind: 'app', link: this.params?.data?.DictionaryIdent, tabName: this.params?.data?.DictionaryName};
  }

  refresh(params: ICellRendererParams): boolean {
    // return false;
    this.cellValue = this.getValueToDisplay(params);
    this.linkParams = {caption: this.cellValue, kind: 'app', link: this.params?.data?.DictionaryIdent};
    return true;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

}

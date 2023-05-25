// import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';


/* 
 * !!!!!!!!!!!!!!!!!! UWAGA !!!!!!!!!!!!!!!!!!
 *
 *
 * To Component TESTOWY!!!!!
 * 
 * 
 * 
 */


@Component({
  selector: 'sit-agrid-link',
  templateUrl: './sit-agrid-link.component.html',
  styleUrls: ['./sit-agrid-link.component.scss'],
  host: {class: 'sit-agrid-link-component'},
  encapsulation : ViewEncapsulation.None,
})
export class SitAgridLinkComponent {

  params: any;
  eGui!: HTMLSpanElement;
  public cellValue: string;
  backgroundColor = '#ddd';
  linkParams: any;
  bzzz: any;

  // constructor() { }

  agInit(params: ICellRendererParams) 
  {
    this.params = params;
    this.cellValue = this.getValueToDisplay(params);
    this.linkParams = {caption: this.cellValue, kind: 'app', link: this.params?.data?.DictionaryIdent};
  }

  refresh(params: ICellRendererParams): boolean {
    // return false;
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }


  buttonClicked() {
    // alert(`${this.params.value} -------------!`);
    this.params?.test && alert(`${this.params.test} -------------!`);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

}

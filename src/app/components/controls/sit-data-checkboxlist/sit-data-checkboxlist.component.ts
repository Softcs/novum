import { Component, Input, Renderer2, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
// import {MatCheckboxChange} from '@angular/material/checkbox';
import { OnCFService } from '@app/_services/oncf.service';
// import { basename } from 'path';
import { isEqual, map as loMap } from 'lodash';


@Component({
  selector: 'sit-data-checkboxlist',
  templateUrl: './sit-data-checkboxlist.component.html',
  styleUrls: ['./sit-data-checkboxlist.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-data-checkboxlist-component sit-data-checkboxlist-container'}
})

//export class SitDataCheckboxlistComponent extends SitDataBaseComponent implements OnInit, AfterViewInit {
export class SitDataCheckboxlistComponent extends SitDataBaseComponent {

  @Input() label = 'Więcej';
  // @Input() width: string;
  @Input() refreshOnChange: boolean;
  @Input() labelPosition: 'after';
  // indeterminate: boolean = false;


  checkBoxList: Array<{id: string, value: string, order: string, description: string, color: string }> = [];

  
  //labelPosition: 'before' | 'after' = 'after'; //pozycja etykiety checkboxa, domyslnie za
  constructor(renderer: Renderer2, oncfService: OnCFService) {
    super(renderer);
    this.refreshOnChange = false;
    this.registerOnChange(this.onChange);
  }

  get getCheckBoxList () {
    if (this.checkBoxList.length) {
      return this.checkBoxList.sort((a, b) => parseInt(a.order) - parseInt(b.order));
    }
    return [];
  }


  // public getValue(): any {
  //   return this.value;
  // }




  // onChange(event: MatCheckboxChange) {
  onChange(event: any) {

// console.log(' - - - - - - - onChange: - - - - - - - - ');
// console.log('event.name: ', event.target.name);
// console.log('event.checked: ', event.target.checked);
// console.log('event: ', event);
// console.log('checkBoxList: ', this.checkBoxList);

    const updatedValue = loMap(this.checkBoxList, chkItem => {
      if (chkItem.id === event.target.name) {
        chkItem.value = event.target.checked ? '1' : '0';
      }
      return chkItem;
    });

// console.log(' = = = = = = ');
// console.log('checkBoxList: ', this.checkBoxList);
// console.log('updatedValue: ', updatedValue);
// console.log('updatedValue JSON: ', JSON.stringify(updatedValue));
// console.log('checkBoxList: ', JSON.stringify(this.checkBoxList));
// console.log('value: ', this.value);

    this.dataSetWrapper.setFieldValue(this.field, JSON.stringify(updatedValue), null, false);


    // if (this.refreshOnChange) {
    //   this.dataSetWrapper.RefreshChildren();
    // }

// console.log(' - - - - - - - - - - - - - ');
// console.log('this: ', this);
  }


  
//   ngOnInit() {
// console.log(' - - - - - - - ngOnInit: - - - - - - - - ');
// console.log('ngOnInit: this: ', this);
// console.log('ngOnInit: this.value: ', this.value);
//   }


// ngAfterViewInit() {
// console.log(' - - - - - - - ngAfterViewInit: - - - - - - - - ');
// console.log('ngAfterViewInit: this: ', this);
// console.log('ngAfterViewInit: this.value: ', this.value);
//   }


  public checkParseValue (value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public setValue(value: any) {

    const valObj = this.checkParseValue(value);
    if (valObj && !isEqual(valObj, this.checkBoxList)) {
      this.checkBoxList = valObj;
    }

    super.setValue(value);
  }

}

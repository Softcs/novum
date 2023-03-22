import { Component, Input, Renderer2, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { SitDataBaseComponent } from '../sit-data-base/sit-data-base.component';
import { OnCFService } from '@app/_services/oncf.service';
import { isEqual, map as loMap } from 'lodash';


@Component({
  selector: 'sit-data-checkboxlist',
  templateUrl: './sit-data-checkboxlist.component.html',
  styleUrls: ['./sit-data-checkboxlist.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'sit-data-checkboxlist-component sit-data-checkboxlist-container'}
})


export class SitDataCheckboxlistComponent extends SitDataBaseComponent implements OnInit{

  @Input() layout: string;
  //layout: undefined = default | 1 = pionowy + hovered
  @Input() label = 'Więcej';
  @Input() width: string;
  @Input() refreshOnChange: boolean;
    
  @Input() labelPosition: string = 'after';
  // @Input() labelPosition: string = 'before';
  //labelPosition: 'before' | 'after' = 'after'; //pozycja etykiety checkboxa, domyslnie za


  checkBoxList: Array<{id: string, value: string, order: string, description: string, color: string }> = [];

  constructor(
    private renderer: Renderer2
    // , oncfService: OnCFService
    , private hostElement: ElementRef
  ) {
    super(renderer);
    this.refreshOnChange = false;
    this.registerOnChange(this.onChange);
  }

  ngOnInit(): void {
    this.width && this.renderer.setStyle(this.hostElement.nativeElement, 'width', this.width);
    // this.renderer.setStyle(this.hostElement.nativeElement, 'width', this.width ? this.width : 'auto');
    this.layout === "1" && this.renderer.addClass(this.hostElement.nativeElement, 'checkboxlist-layout-column');
  }

  get getCheckBoxList () {
    if (this.checkBoxList.length) {
      return this.checkBoxList.sort((a, b) => parseInt(a.order) - parseInt(b.order));
    }
    return [];
  }


  onChange(event: any) {

    const updatedValue = loMap(this.checkBoxList, chkItem => {
      if (chkItem.id === event.target.name) {
        chkItem.value = event.target.checked ? '1' : '0';
      }
      return chkItem;
    });

    this.dataSetWrapper.setFieldValue(this.field, JSON.stringify(updatedValue), null, false);

    if (this.refreshOnChange) {
      this.dataSetWrapper.RefreshChildren();
    }

  }

  private checkParseValue = (value: any) => {
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

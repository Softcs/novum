import { Component, OnInit, Input } from '@angular/core';
import { DataSourceResponseWrapper } from '@app/_models';

@Component({
  selector: 'app-sit-data-base',
  templateUrl: './sit-data-base.component.html',
  styleUrls: ['./sit-data-base.component.scss']
})
export class SitDataBaseComponent  {

  @Input() value: string ='';
  public dataSourceResponseWrapper: DataSourceResponseWrapper;
  @Input() placeholder: string = '';
  @Input() field: string = '';
  @Input() id: string = null;
  public getValue(): string{
    return null;
  }
  public setValue(value: any) {
    this.value = value;
  }
}

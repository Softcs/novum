import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DataSetWrapper } from '@app/_models';
import { SitButtonBaseComponent } from '../sit-button-base/sit-button-base.component';

@Component({
  selector: 'sit-files-button',
  templateUrl: './sit-files-button.component.html',
  styleUrls: ['./sit-files-button.component.scss']
})
export class SitFilesButtonComponent extends SitButtonBaseComponent {
  @ViewChild('fileInput', { static: true }) hiddenInput: ElementRef<HTMLElement>;

  executing = false;
  constructor() {
    super();
    this.icon = 'cloud_upload';
    this.color = 'primary';
    this.multiple = false;
  }

  @Input() multiple: boolean;
  @Input() fieldFileNames: string;
  @Input() fieldFileIdents: string;

  onClick($event) {
    this.hiddenInput.nativeElement.click();
  }

  onHandleFileInput($event) {
    this.dataSetWrapper?.setFieldValue(this.fieldFileNames, this.getFileNames(this.hiddenInput.nativeElement['files']));
  }

  private getFileNames(files: File[]) {
    if (!files || files.length === 0) {
      return null;
    }
    if (files.length === 1) {
      return files[0].name;
    }
    const value = files.map(f => f.name).join('; ');
    return value;
  }
}

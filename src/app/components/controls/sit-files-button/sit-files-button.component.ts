import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GatewayService } from '@app/_services';
import { SitButtonBaseComponent } from '../sit-button-base/sit-button-base.component';

@Component({
  selector: 'sit-files-button',
  templateUrl: './sit-files-button.component.html',
  styleUrls: ['./sit-files-button.component.scss']
})
export class SitFilesButtonComponent extends SitButtonBaseComponent {
  @ViewChild('fileInput', { static: true }) hiddenInput: ElementRef<HTMLElement>;

  executing = false;
  private multiple: boolean;
  @Input() fieldFileNames: string;
  // @Input() fieldFileIdents: string;
  @Input() fieldIdent: string;


  constructor(private gatewayService: GatewayService)  {
    super();

    this.icon = 'cloud_upload';
    this.color = 'primary';
    this.multiple = false;
  }





  onClick($event) {
    this.hiddenInput.nativeElement.click();
  }

  onHandleFileInput($event) {
    const files = this.hiddenInput.nativeElement['files'];
    this.dataSetWrapper?.setFieldValue(this.fieldFileNames, this.getFileNames(files));
    if (files) {
      this.changeExecutingState(true);
      const fileId = this.getFileId();
      this.gatewayService.UploadFile(files[0], fileId).subscribe(
        event => {
          if (event.type == HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            console.log(`File is ${percentDone}% loaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely loaded!');
          }
        },
        (err) => {
          this.changeExecutingState(false);
          console.log('Upload Error:', err);
        },
        () => {
          this.changeExecutingState(false);
        }
      );
    }
  }

  private getFileId() {
    return this.dataSetWrapper.getFieldValue(this.fieldIdent);
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
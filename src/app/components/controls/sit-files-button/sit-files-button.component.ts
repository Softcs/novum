import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'sit-files-button',
  templateUrl: './sit-files-button.component.html',
  styleUrls: ['./sit-files-button.component.scss']
})
export class SitFilesButtonComponent implements AfterViewInit {
  @ViewChild('fileInput', { static: true }) hiddenInput: ElementRef<HTMLElement>;

  executing = false;
  constructor() {
    this.icon = 'cloud_upload';
    this.color = 'primary';
    this.multiple = false;
  }
  @Input() color: string;
  @Input() caption: string;
  @Input() icon: string;
  @Input() tooltip: string;
  @Input() multiple: boolean;
  @Input() fieldFileName: string;
  @Input() fieldIdent: string;

  ngAfterViewInit() {

  }

  onClick($event) {
    this.hiddenInput.nativeElement.click();
  }

  onHandleFileInput($event) {
    //console.log("handleFileInput", $event)
  }

  private connectToHiddenInput() {

  }
}

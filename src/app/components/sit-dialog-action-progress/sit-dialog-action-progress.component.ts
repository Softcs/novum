import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'sit-dialog-action-progress',
  templateUrl: './sit-dialog-action-progress.component.html',
  styleUrls: ['./sit-dialog-action-progress.component.scss']
  , host: {class: 'sit-dialog-container-multicomponent sit-dialog-action-progress-component flex-container-column'}
})
export class SitDialogActionProgressComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SitDialogActionProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public close: boolean,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'sit-dialog-confirm-selected-rows',
  templateUrl: './sit-dialog-confirm-selected-rows.component.html',
  styleUrls: ['./sit-dialog-confirm-selected-rows.component.scss'],
  host: {class: 'sit-dialog-container-multicomponent sit-dialog-confirm-selected-rows-component flex-container-column'}
})
export class SitDialogConfirmSeletedRowsComponent {
  constructor(
    public dialogRef: MatDialogRef<SitDialogConfirmSeletedRowsComponent>,
    @Inject(MAT_DIALOG_DATA) public close: boolean,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

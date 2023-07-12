import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sit-dialog-confirm-del',
  templateUrl: './sit-dialog-confirm-del.component.html',
  styleUrls: ['./sit-dialog-confirm-del.component.scss'],
  host: {class: 'sit-dialog-container-multicomponent sit-dialog-confirm-del-component flex-container-column'}
})
export class SitDialogConfirmDelComponent {

  constructor(
    public dialogRef: MatDialogRef<SitDialogConfirmDelComponent>, @Inject(MAT_DIALOG_DATA)
    public close: boolean
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

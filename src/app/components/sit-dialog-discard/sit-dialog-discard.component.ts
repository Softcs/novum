import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sit-dialog-discard',
  templateUrl: './sit-dialog-discard.component.html',
  styleUrls: ['./sit-dialog-discard.component.scss']
})
export class SitDialogDiscardComponent {

  constructor(
    public dialogRef: MatDialogRef<SitDialogDiscardComponent>, @Inject(MAT_DIALOG_DATA)
    public close: boolean
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
})
export class AddItemDialogComponent {
  text: string;
  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.text = data ? data.task : '';
  }

  add(): void {
    this.dialogRef.close(this.text);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

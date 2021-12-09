import { Component, EventEmitter, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { AddItemDialogComponent } from '../../dialogs/add-item-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output()
  add = new EventEmitter<string>();

  @Output()
  edit = new EventEmitter<string>();

  @Output()
  changeStatus = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddItemDialogComponent);
    dialogRef.afterClosed().subscribe((value: string) => {
      if (value) {
        this.add.emit(value);
      }
    });
  }
}

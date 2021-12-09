import { Component, OnInit } from '@angular/core';

import { filter as rFilter, head } from 'ramda';
import { map, take } from 'rxjs/operators';

import { AddItemDialogComponent } from '../../dialogs/add-item-dialog.component';
import { ITodoList } from '../../interfaces/todo-list.interface';
import { TodoListFacade } from '../../+store/todo-list.facade';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-core',
  templateUrl: './todo-core.component.html',
  styleUrls: ['./todo-core.component.scss'],
})
export class TodoCoreComponent implements OnInit {
  todoList$ = this._todoListFacade.todoList$;
  doneTasksVisibility$ = this._todoListFacade.doneTasksVisibility$;

  constructor(
    private _todoListFacade: TodoListFacade,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  removeItem(id: string): void {
    this._todoListFacade.removeItem(id);
  }

  createItem(task: string): void {
    this._todoListFacade.addItem(task);
  }

  editItem(id: string): void {
    this.todoList$
      .pipe(
        take(1),
        map((items) => rFilter((obj) => obj.id === id, items))
      )
      .subscribe((item: ITodoList[]) => {
        this._subscribeDialogRef(item);
      });
  }

  changeVisibility(): void {
    this._todoListFacade.changeVisibility();
  }

  private _subscribeDialogRef(item: ITodoList[]): void {
    const headItem: ITodoList = head(item);
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: headItem,
    });
    dialogRef.afterClosed().subscribe((task: string) => {
      if (task) {
        const isCompleted = headItem.is_completed == 1 ? true : false;
        this._todoListFacade.editItem(task, headItem.id, isCompleted);
        this._todoListFacade.getTasks();
      }
    });
  }
}

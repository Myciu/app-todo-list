import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromTodoListSelectors from './todo-list.selectors';
import * as todoListActions from './todo-list.actions';
import { ITodoListState } from './todo-list.reducer';

@Injectable()
export class TodoListFacade {
  todoList$ = this._store.select(fromTodoListSelectors.selecTodoList);
  doneTasksVisibility$ = this._store.select(fromTodoListSelectors.selecTasksVisibilityStatus);

  constructor(private _store: Store<ITodoListState>) {}

  getTasks(): void {
    this._store.dispatch(todoListActions.getTasks());
  }

  removeItem(id: string): void {
    this._store.dispatch(todoListActions.removeTask({ id }));
  }

  addItem(task: string): void {
    this._store.dispatch(todoListActions.addTask({ task }));
  }

  editItem(task: string, id: string, isCompleted: boolean): void {
    this._store.dispatch(todoListActions.updateTask({ task, id, isCompleted }));
  }

  changeVisibility(): void {
    this._store.dispatch(todoListActions.changeVisibilityOfDoneTasks());
  }
}

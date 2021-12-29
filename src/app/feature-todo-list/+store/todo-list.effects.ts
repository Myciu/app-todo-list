import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { catchError, concatMap, map, pluck, switchMap, switchMapTo } from 'rxjs/operators';
import { of } from 'rxjs';

import { TodoListApiService } from '../services/todo-list-api.service';
import { ITodoList } from '../interfaces/todo-list.interface';
import * as TodoListActions from './todo-list.actions';
import { ITodoListState } from './todo-list.reducer';
import { TodoListModel } from '../components/models/todo-list.model';

@Injectable()
export class TodoListEffects {
  loadTodoList$ = createEffect(() => {
    return this._actions.pipe(
      ofType(TodoListActions.getTasks),
      switchMapTo(
        this._todoListApiService.getTodoList().pipe(
          pluck('data'),
          map((tasks: TodoListModel[]) => {
            console.log('tasks', tasks)
            return TodoListActions.getTasksSuccess({ tasks });
          }),
          catchError((error: Error) =>
            of(TodoListActions.getTasksFailure({ error }))
          )
        )
      )
    );
  });

  removeTask$ = createEffect(() => {
    return this._actions.pipe(
      ofType(TodoListActions.removeTask),
      concatMap(({ id }) => 
        this._todoListApiService.deleteTask(id).pipe(
          pluck('data'),
          pluck('id'),
          map((id: string) => {
            return TodoListActions.removeTaskSuccess({ id });
          }),
          catchError((error: Error) =>
            of(TodoListActions.removeTasksFailure({ error }))
          )
        )
      )
    );
  });

  addTask$ = createEffect(() => {
    return this._actions.pipe(
      ofType(TodoListActions.addTask),
      switchMap(({ task, id }) =>
        this._todoListApiService.addTask(task).pipe(
          pluck('data'),
          map((task: TodoListModel) => {
            return TodoListActions.addTaskSuccess({ task });
          }),
          catchError((error: Error) =>
            of(TodoListActions.addTaskFailure({ error }))
          )
        )
      )
    );
  });

  editTask$ = createEffect(() => {
    return this._actions.pipe(
      ofType(TodoListActions.updateTask),
      switchMap(({ task, id, isCompleted }) =>
        this._todoListApiService.editTask(task, id, isCompleted).pipe(
          pluck('data'),
          map((task: TodoListModel) => {
            return TodoListActions.updateTaskSuccess({ task });
          }),
          catchError((error: Error) =>
            of(TodoListActions.updateTaskFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private _actions: Actions,
    private _todoListApiService: TodoListApiService
  ) {}
}

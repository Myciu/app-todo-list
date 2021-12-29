import { createAction, props } from '@ngrx/store';
import { TodoListModel } from '../components/models/todo-list.model';

import { ITodoList } from '../interfaces/todo-list.interface';

export const getTasks = createAction('[Todo List] Get tasks');

export const getTasksSuccess = createAction(
  '[Todo List] Get tasks success',
  props<{ tasks: TodoListModel[] }>()
);

export const getTasksFailure = createAction(
  '[Todo List] Get tasks failure',
  props<{ error: Error }>()
);

export const removeTask = createAction(
  '[Todo List] Remove task',
  props<{ id: string }>()
);

export const removeTaskSuccess = createAction(
  '[Todo List] Remove task success',
  props<{ id: string }>()
);

export const removeTasksFailure = createAction(
  '[Todo List] Remove task failure',
  props<{ error: Error }>()
);

export const addTask = createAction(
  '[Todo List] Add task',
  props<{ task: string; id?: string }>()
);
export const addTaskSuccess = createAction(
  '[Todo List] Add task success',
  props<{ task: TodoListModel }>()
);
export const addTaskFailure = createAction(
  '[Todo List] Add task failure',
  props<{ error: Error }>()
);

export const updateTask = createAction(
  '[Todo List] Update task',
  props<{ task: string; id: string; isCompleted: boolean }>()
);
export const updateTaskSuccess = createAction(
  '[Todo List] Update task success',
  props<{ task: TodoListModel }>()
);
export const updateTaskFailure = createAction(
  '[Todo List] Update task failure',
  props<{ error: Error }>()
);

export const changeVisibilityOfDoneTasks = createAction(
  '[Todo List] Change visibility of done tasks'
);

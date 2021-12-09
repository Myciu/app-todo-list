import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITodoListState, TODO_LIST_STORE_TOKEN } from './todo-list.reducer';

export const getTodoListState = createFeatureSelector<ITodoListState>(
  TODO_LIST_STORE_TOKEN
);

export const selecTodoList = createSelector(
  getTodoListState,
  (state: ITodoListState) => state.todoList
);

export const selecTasksVisibilityStatus = createSelector(
  getTodoListState,
  (state: ITodoListState) => state.areDoneTasksVisible
);

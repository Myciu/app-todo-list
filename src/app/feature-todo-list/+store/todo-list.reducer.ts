import { Action, createReducer, on } from '@ngrx/store';

import { head } from 'ramda';

import { ITodoList } from '../interfaces/todo-list.interface';
import * as TodoListActions from './todo-list.actions';

export const TODO_LIST_STORE_TOKEN = 'Todo-List';

export interface ITodoListState {
  todoList: ITodoList[];
  areDoneTasksVisible: boolean;
}

export const initialState: ITodoListState = {
  todoList: [],
  areDoneTasksVisible: false,
};

const reducer = createReducer(
  initialState,
  on(TodoListActions.getTasksSuccess, (state, { tasks }) => ({
    ...state,
    todoList: tasks,
  })),
  on(TodoListActions.removeTaskSuccess, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((item) => item.id != id),
  })),
  on(TodoListActions.addTaskSuccess, (state, { task }) => ({
    ...state,
    todoList: [...task, ...state.todoList],
  })),
  on(TodoListActions.updateTaskSuccess, (state, { task }) => ({
    ...state,
    todoList: state.todoList.map((item) => {
      if (item.id === head(task).id) {
        item = head(task);
      }

      return item;
    }),
  })),
  on(TodoListActions.changeVisibilityOfDoneTasks, (state) => ({
    ...state,
    areDoneTasksVisible: !state.areDoneTasksVisible,
  }))
);

export function todoListReducer(state: ITodoListState, action: Action) {
  return reducer(state, action);
}

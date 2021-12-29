import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { head } from 'ramda';
import { TodoListModel } from '../components/models/todo-list.model';

import { ITodoList } from '../interfaces/todo-list.interface';
import * as TodoListActions from './todo-list.actions';

export const TODO_LIST_STORE_TOKEN = 'Todo-List';

export interface ITodoListState extends EntityState<TodoListModel>{
  //todoList: TodoListModel[];
  areDoneTasksVisible: boolean;
}

export const adapter: EntityAdapter<TodoListModel> = createEntityAdapter<TodoListModel>();

export const initialState: ITodoListState = adapter.getInitialState({
  //todoList: [],
  areDoneTasksVisible: false,
});

const reducer = createReducer(
  initialState,
  on(TodoListActions.getTasksSuccess, (state, { tasks }) => (
    adapter.setAll(tasks, { ...state })
  )),
  on(TodoListActions.removeTaskSuccess, (state, { id }) => (
    adapter.removeOne(id, { ...state })
  )),
  on(TodoListActions.addTaskSuccess, (state, { task }) => (
    adapter.addOne(task, { ...state})
  )),
  // on(TodoListActions.removeTaskSuccess, (state, { id }) => ({
  //   ...state,
  //   todoList: state.todoList.filter((item) => item.id != id),
  // })),
  // on(TodoListActions.addTaskSuccess, (state, { task }) => ({
  //   ...state,
  //   todoList: [...task, ...state.todoList],
  // })),
  // on(TodoListActions.updateTaskSuccess, (state, { task }) => ({
  //   ...state,
  //   todoList: state.todoList.map((item) => {
  //     if (item.id === head(task).id) {
  //       item = head(task);
  //     }

  //     return item;
  //   }),
  // })),
  on(TodoListActions.updateTaskSuccess, (state, { task }) => (
    adapter.updateOne({ id: task.id, changes: task}, { ...state })
  )),
  on(TodoListActions.changeVisibilityOfDoneTasks, (state) => ({
    ...state,
    areDoneTasksVisible: !state.areDoneTasksVisible,
  }))
);

export function todoListReducer(state: ITodoListState, action: Action) {
  return reducer(state, action);
}

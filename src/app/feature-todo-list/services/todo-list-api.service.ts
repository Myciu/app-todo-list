import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment.prod';
import { ITodoList } from '../interfaces/todo-list.interface';
import { TodoListModel } from '../components/models/todo-list.model';
import { Clazz, deserialize } from 'serializr';
import { ApiModel } from '../components/models/Items.model';
import { map } from 'rxjs/operators';

const url = environment.apiUrl;

function deserializePage<T>(model: Clazz<T>, item: ApiModel): ApiModel<T> {
  return deserialize<ApiModel<T>>(ApiModel, {
    ...item,
    data: deserialize(model, item.data)
  })
}

@Injectable({ providedIn: 'root' })
export class TodoListApiService {
  constructor(private _http: HttpClient) {}

  getTodoList(): Observable<ApiModel<TodoListModel>> {
    return this._http.get(url).pipe(
      map((obj: ApiModel<TodoListModel>) => deserializePage(TodoListModel, obj))
    );
  }

  deleteTask(id: string): Observable<any> {
    return this._http.delete(url + `/${id}`);
  }

  addTask(task: string): Observable<ITodoList> {
    const params = new HttpParams()
      .append('task', task)
      .append('is_completed', '0');
    return this._http.post<ITodoList>(url, params);
  }

  editTask(
    task: string,
    id: string,
    isCompleted: boolean
  ): Observable<ITodoList> {
    console.log('is completed', isCompleted);
    const params = new HttpParams()
      .append('task', task + '')
      .append('id', id)
      .append('is_completed', isCompleted ? '1' : '0');
    return this._http.post<ITodoList>(url, params);
  }
}

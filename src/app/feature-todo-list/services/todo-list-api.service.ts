import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment.prod';
import { ITodoList } from '../interfaces/todo-list.interface';

const url = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class TodoListApiService {
  constructor(private _http: HttpClient) {}

  getTodoList(): Observable<ITodoList[]> {
    return this._http.get<ITodoList[]>(url);
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

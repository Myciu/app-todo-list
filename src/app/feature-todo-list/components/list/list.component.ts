import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { TodoListFacade } from '../../+store/todo-list.facade';
import { ITodoList } from '../../interfaces/todo-list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input()
  list: ITodoList[];

  @Input()
  visibility: boolean;

  @Output()
  remove = new EventEmitter<string>();

  @Output()
  edit = new EventEmitter<string>();

  constructor(private _todoListFacade: TodoListFacade) {}

  ngOnInit(): void {
    this._todoListFacade.getTasks();
  }

  updateStatus(option: MatListOption, item: ITodoList): void {
    const isItemChecked = option.selected ? true : false;
    this._todoListFacade.editItem(item.task, item.id, isItemChecked);
  }
}

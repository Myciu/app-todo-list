import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoCoreComponent } from './containers/todo-core/todo-core.component';
import { AddItemDialogComponent } from './dialogs/add-item-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { TodoListEffects } from './+store/todo-list.effects';
import { TodoListFacade } from './+store/todo-list.facade';
import { UiModule } from '../ui/ui.module';
import {
  todoListReducer,
  TODO_LIST_STORE_TOKEN,
} from './+store/todo-list.reducer';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';

const materials = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    TodoCoreComponent,
    ListComponent,
    AddItemDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    UiModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(TODO_LIST_STORE_TOKEN, todoListReducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([TodoListEffects]),
    materials,
  ],
  exports: [TodoCoreComponent],
  providers: [TodoListFacade, TodoListEffects],
})
export class FeatureTodoListModule {}

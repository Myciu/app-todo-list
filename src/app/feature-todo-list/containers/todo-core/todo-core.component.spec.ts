import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCoreComponent } from './todo-core.component';

describe('TodoCoreComponent', () => {
  let component: TodoCoreComponent;
  let fixture: ComponentFixture<TodoCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

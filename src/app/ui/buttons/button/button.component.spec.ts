import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let nativeElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#backgroundColor should be blue', () => {
    component.backgroundColor = 'blue';
    fixture.detectChanges();
    const button = nativeElement.querySelector('button');
  
    expect(button.style.backgroundColor).toEqual('blue');
  });

  it('#iconUrl should be "test-url"', () => {
    component.iconUrl = 'test-url';
    fixture.detectChanges();
    const button = nativeElement.querySelector('button');
  
    expect(button.style.backgroundImage).toEqual('url("test-url")');
  });

  it('should emit on click', () => {
    spyOn(component.clicked, 'emit');
 
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
 
    expect(component.clicked.emit).toHaveBeenCalled();
 });

});

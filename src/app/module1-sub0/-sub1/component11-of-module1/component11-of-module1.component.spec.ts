import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component11OfModule1Component } from './component11-of-module1.component';

describe('Component11OfModule1Component', () => {
  let component: Component11OfModule1Component;
  let fixture: ComponentFixture<Component11OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component11OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component11OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

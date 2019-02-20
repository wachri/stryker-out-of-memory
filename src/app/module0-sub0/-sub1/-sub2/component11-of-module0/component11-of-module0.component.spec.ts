import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component11OfModule0Component } from './component11-of-module0.component';

describe('Component11OfModule0Component', () => {
  let component: Component11OfModule0Component;
  let fixture: ComponentFixture<Component11OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component11OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component11OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

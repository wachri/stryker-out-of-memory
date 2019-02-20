import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component9OfModule0Component } from './component9-of-module0.component';

describe('Component9OfModule0Component', () => {
  let component: Component9OfModule0Component;
  let fixture: ComponentFixture<Component9OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component9OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component9OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

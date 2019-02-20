import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component17OfModule0Component } from './component17-of-module0.component';

describe('Component17OfModule0Component', () => {
  let component: Component17OfModule0Component;
  let fixture: ComponentFixture<Component17OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component17OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component17OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

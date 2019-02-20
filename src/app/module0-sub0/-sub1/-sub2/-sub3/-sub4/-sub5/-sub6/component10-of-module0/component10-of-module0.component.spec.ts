import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component10OfModule0Component } from './component10-of-module0.component';

describe('Component10OfModule0Component', () => {
  let component: Component10OfModule0Component;
  let fixture: ComponentFixture<Component10OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component10OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component10OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

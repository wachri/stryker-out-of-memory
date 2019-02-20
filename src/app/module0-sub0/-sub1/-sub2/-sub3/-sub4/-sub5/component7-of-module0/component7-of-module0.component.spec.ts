import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component7OfModule0Component } from './component7-of-module0.component';

describe('Component7OfModule0Component', () => {
  let component: Component7OfModule0Component;
  let fixture: ComponentFixture<Component7OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component7OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component7OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

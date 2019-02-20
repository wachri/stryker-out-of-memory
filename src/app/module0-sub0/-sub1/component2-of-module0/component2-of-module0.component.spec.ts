import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2OfModule0Component } from './component2-of-module0.component';

describe('Component2OfModule0Component', () => {
  let component: Component2OfModule0Component;
  let fixture: ComponentFixture<Component2OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

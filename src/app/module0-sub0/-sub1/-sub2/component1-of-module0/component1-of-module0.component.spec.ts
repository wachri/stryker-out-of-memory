import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1OfModule0Component } from './component1-of-module0.component';

describe('Component1OfModule0Component', () => {
  let component: Component1OfModule0Component;
  let fixture: ComponentFixture<Component1OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

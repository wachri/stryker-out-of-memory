import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component8OfModule0Component } from './component8-of-module0.component';

describe('Component8OfModule0Component', () => {
  let component: Component8OfModule0Component;
  let fixture: ComponentFixture<Component8OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component8OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component8OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

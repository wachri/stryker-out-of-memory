import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component14OfModule0Component } from './component14-of-module0.component';

describe('Component14OfModule0Component', () => {
  let component: Component14OfModule0Component;
  let fixture: ComponentFixture<Component14OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component14OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component14OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

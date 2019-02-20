import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component6OfModule0Component } from './component6-of-module0.component';

describe('Component6OfModule0Component', () => {
  let component: Component6OfModule0Component;
  let fixture: ComponentFixture<Component6OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component6OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component6OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

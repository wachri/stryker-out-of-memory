import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3OfModule0Component } from './component3-of-module0.component';

describe('Component3OfModule0Component', () => {
  let component: Component3OfModule0Component;
  let fixture: ComponentFixture<Component3OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

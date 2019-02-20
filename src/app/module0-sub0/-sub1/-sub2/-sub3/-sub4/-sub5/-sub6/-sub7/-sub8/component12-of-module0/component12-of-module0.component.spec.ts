import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component12OfModule0Component } from './component12-of-module0.component';

describe('Component12OfModule0Component', () => {
  let component: Component12OfModule0Component;
  let fixture: ComponentFixture<Component12OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component12OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component12OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

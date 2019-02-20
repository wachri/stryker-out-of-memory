import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component5OfModule0Component } from './component5-of-module0.component';

describe('Component5OfModule0Component', () => {
  let component: Component5OfModule0Component;
  let fixture: ComponentFixture<Component5OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component5OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component5OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

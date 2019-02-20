import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component0OfModule0Component } from './component0-of-module0.component';

describe('Component0OfModule0Component', () => {
  let component: Component0OfModule0Component;
  let fixture: ComponentFixture<Component0OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component0OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component0OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

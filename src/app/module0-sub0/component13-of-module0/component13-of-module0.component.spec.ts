import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component13OfModule0Component } from './component13-of-module0.component';

describe('Component13OfModule0Component', () => {
  let component: Component13OfModule0Component;
  let fixture: ComponentFixture<Component13OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component13OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component13OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

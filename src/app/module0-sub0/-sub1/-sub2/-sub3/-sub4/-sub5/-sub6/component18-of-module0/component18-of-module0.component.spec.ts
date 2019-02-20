import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component18OfModule0Component } from './component18-of-module0.component';

describe('Component18OfModule0Component', () => {
  let component: Component18OfModule0Component;
  let fixture: ComponentFixture<Component18OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component18OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component18OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

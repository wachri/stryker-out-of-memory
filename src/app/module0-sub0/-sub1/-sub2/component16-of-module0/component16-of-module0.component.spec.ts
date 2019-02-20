import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component16OfModule0Component } from './component16-of-module0.component';

describe('Component16OfModule0Component', () => {
  let component: Component16OfModule0Component;
  let fixture: ComponentFixture<Component16OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component16OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component16OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

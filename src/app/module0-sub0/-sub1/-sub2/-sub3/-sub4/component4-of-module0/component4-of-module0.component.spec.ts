import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4OfModule0Component } from './component4-of-module0.component';

describe('Component4OfModule0Component', () => {
  let component: Component4OfModule0Component;
  let fixture: ComponentFixture<Component4OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component4OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component4OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

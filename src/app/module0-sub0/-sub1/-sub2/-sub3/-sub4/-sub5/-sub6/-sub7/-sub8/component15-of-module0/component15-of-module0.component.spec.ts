import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15OfModule0Component } from './component15-of-module0.component';

describe('Component15OfModule0Component', () => {
  let component: Component15OfModule0Component;
  let fixture: ComponentFixture<Component15OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component15OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component15OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component19OfModule0Component } from './component19-of-module0.component';

describe('Component19OfModule0Component', () => {
  let component: Component19OfModule0Component;
  let fixture: ComponentFixture<Component19OfModule0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component19OfModule0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component19OfModule0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

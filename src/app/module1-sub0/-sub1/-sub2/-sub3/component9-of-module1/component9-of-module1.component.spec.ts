import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component9OfModule1Component } from './component9-of-module1.component';

describe('Component9OfModule1Component', () => {
  let component: Component9OfModule1Component;
  let fixture: ComponentFixture<Component9OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component9OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component9OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

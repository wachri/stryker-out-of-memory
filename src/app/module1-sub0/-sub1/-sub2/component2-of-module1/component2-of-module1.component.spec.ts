import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2OfModule1Component } from './component2-of-module1.component';

describe('Component2OfModule1Component', () => {
  let component: Component2OfModule1Component;
  let fixture: ComponentFixture<Component2OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

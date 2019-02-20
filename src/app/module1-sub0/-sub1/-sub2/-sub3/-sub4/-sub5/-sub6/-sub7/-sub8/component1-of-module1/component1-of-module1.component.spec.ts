import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1OfModule1Component } from './component1-of-module1.component';

describe('Component1OfModule1Component', () => {
  let component: Component1OfModule1Component;
  let fixture: ComponentFixture<Component1OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

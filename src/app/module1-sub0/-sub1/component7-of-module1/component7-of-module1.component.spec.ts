import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component7OfModule1Component } from './component7-of-module1.component';

describe('Component7OfModule1Component', () => {
  let component: Component7OfModule1Component;
  let fixture: ComponentFixture<Component7OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component7OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component7OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component10OfModule1Component } from './component10-of-module1.component';

describe('Component10OfModule1Component', () => {
  let component: Component10OfModule1Component;
  let fixture: ComponentFixture<Component10OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component10OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component10OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

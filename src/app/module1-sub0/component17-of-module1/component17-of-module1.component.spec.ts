import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component17OfModule1Component } from './component17-of-module1.component';

describe('Component17OfModule1Component', () => {
  let component: Component17OfModule1Component;
  let fixture: ComponentFixture<Component17OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component17OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component17OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

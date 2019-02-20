import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3OfModule1Component } from './component3-of-module1.component';

describe('Component3OfModule1Component', () => {
  let component: Component3OfModule1Component;
  let fixture: ComponentFixture<Component3OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

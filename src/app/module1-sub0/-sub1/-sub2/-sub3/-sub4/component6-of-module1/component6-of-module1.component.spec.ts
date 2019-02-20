import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component6OfModule1Component } from './component6-of-module1.component';

describe('Component6OfModule1Component', () => {
  let component: Component6OfModule1Component;
  let fixture: ComponentFixture<Component6OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component6OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component6OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

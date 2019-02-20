import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component14OfModule1Component } from './component14-of-module1.component';

describe('Component14OfModule1Component', () => {
  let component: Component14OfModule1Component;
  let fixture: ComponentFixture<Component14OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component14OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component14OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

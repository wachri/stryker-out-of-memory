import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component0OfModule1Component } from './component0-of-module1.component';

describe('Component0OfModule1Component', () => {
  let component: Component0OfModule1Component;
  let fixture: ComponentFixture<Component0OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component0OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component0OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

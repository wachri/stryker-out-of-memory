import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component5OfModule1Component } from './component5-of-module1.component';

describe('Component5OfModule1Component', () => {
  let component: Component5OfModule1Component;
  let fixture: ComponentFixture<Component5OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component5OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component5OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

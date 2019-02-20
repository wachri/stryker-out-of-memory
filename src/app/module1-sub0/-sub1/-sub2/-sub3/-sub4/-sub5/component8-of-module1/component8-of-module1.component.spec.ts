import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component8OfModule1Component } from './component8-of-module1.component';

describe('Component8OfModule1Component', () => {
  let component: Component8OfModule1Component;
  let fixture: ComponentFixture<Component8OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component8OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component8OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

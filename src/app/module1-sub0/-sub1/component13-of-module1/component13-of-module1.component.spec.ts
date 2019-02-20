import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component13OfModule1Component } from './component13-of-module1.component';

describe('Component13OfModule1Component', () => {
  let component: Component13OfModule1Component;
  let fixture: ComponentFixture<Component13OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component13OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component13OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component4OfModule1Component } from './component4-of-module1.component';

describe('Component4OfModule1Component', () => {
  let component: Component4OfModule1Component;
  let fixture: ComponentFixture<Component4OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component4OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component4OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

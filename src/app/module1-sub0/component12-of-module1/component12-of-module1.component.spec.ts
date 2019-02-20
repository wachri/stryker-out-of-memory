import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component12OfModule1Component } from './component12-of-module1.component';

describe('Component12OfModule1Component', () => {
  let component: Component12OfModule1Component;
  let fixture: ComponentFixture<Component12OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component12OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component12OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

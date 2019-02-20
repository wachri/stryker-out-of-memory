import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component16OfModule1Component } from './component16-of-module1.component';

describe('Component16OfModule1Component', () => {
  let component: Component16OfModule1Component;
  let fixture: ComponentFixture<Component16OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component16OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component16OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

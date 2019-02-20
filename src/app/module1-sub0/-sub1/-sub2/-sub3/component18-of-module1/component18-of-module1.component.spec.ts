import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component18OfModule1Component } from './component18-of-module1.component';

describe('Component18OfModule1Component', () => {
  let component: Component18OfModule1Component;
  let fixture: ComponentFixture<Component18OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component18OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component18OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

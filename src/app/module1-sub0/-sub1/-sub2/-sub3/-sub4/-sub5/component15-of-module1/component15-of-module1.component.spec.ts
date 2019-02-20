import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15OfModule1Component } from './component15-of-module1.component';

describe('Component15OfModule1Component', () => {
  let component: Component15OfModule1Component;
  let fixture: ComponentFixture<Component15OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component15OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component15OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component19OfModule1Component } from './component19-of-module1.component';

describe('Component19OfModule1Component', () => {
  let component: Component19OfModule1Component;
  let fixture: ComponentFixture<Component19OfModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component19OfModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component19OfModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

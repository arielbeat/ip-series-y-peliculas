import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTerrorPage } from './p-terror.page';

describe('PTerrorPage', () => {
  let component: PTerrorPage;
  let fixture: ComponentFixture<PTerrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTerrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTerrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

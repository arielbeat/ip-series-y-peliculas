import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAccionPage } from './p-accion.page';

describe('PAccionPage', () => {
  let component: PAccionPage;
  let fixture: ComponentFixture<PAccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

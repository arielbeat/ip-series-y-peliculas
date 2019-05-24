import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAccionPage } from './s-accion.page';

describe('SAccionPage', () => {
  let component: SAccionPage;
  let fixture: ComponentFixture<SAccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

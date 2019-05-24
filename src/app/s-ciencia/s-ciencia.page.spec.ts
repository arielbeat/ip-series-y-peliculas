import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCienciaPage } from './s-ciencia.page';

describe('SCienciaPage', () => {
  let component: SCienciaPage;
  let fixture: ComponentFixture<SCienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCienciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

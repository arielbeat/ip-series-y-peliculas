import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCienciaPage } from './p-ciencia.page';

describe('PCienciaPage', () => {
  let component: PCienciaPage;
  let fixture: ComponentFixture<PCienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCienciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

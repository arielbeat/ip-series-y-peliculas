import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PComediaPage } from './p-comedia.page';

describe('PComediaPage', () => {
  let component: PComediaPage;
  let fixture: ComponentFixture<PComediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PComediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PComediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

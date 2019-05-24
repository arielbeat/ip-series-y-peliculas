import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SComediaPage } from './s-comedia.page';

describe('SComediaPage', () => {
  let component: SComediaPage;
  let fixture: ComponentFixture<SComediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SComediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SComediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

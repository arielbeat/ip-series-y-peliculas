import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STerrorPage } from './s-terror.page';

describe('STerrorPage', () => {
  let component: STerrorPage;
  let fixture: ComponentFixture<STerrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STerrorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STerrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

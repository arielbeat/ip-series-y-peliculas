import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDePage } from './acerca-de.page';

describe('AcercaDePage', () => {
  let component: AcercaDePage;
  let fixture: ComponentFixture<AcercaDePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaDePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

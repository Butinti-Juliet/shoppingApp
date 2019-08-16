import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPage } from './num.page';

describe('NumPage', () => {
  let component: NumPage;
  let fixture: ComponentFixture<NumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

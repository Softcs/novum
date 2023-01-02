import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitOfficeDocVatFootersEditComponent } from './sit-office-doc-vat-footers-edit.component';

describe('SitOfficeDocVatFootersEditComponent', () => {
  let component: SitOfficeDocVatFootersEditComponent;
  let fixture: ComponentFixture<SitOfficeDocVatFootersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitOfficeDocVatFootersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitOfficeDocVatFootersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

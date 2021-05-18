import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingDefFormsEditComponent } from './sit-publications-billing-def-forms-edit.component';

describe('SitPublicationsBillingDefFormsEditComponent', () => {
  let component: SitPublicationsBillingDefFormsEditComponent;
  let fixture: ComponentFixture<SitPublicationsBillingDefFormsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingDefFormsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingDefFormsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

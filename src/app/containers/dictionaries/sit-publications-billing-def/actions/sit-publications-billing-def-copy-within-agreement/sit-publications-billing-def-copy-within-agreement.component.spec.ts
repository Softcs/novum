import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingDefCopyWithinAgreementComponent } from './sit-publications-billing-def-copy-within-agreement.component';

describe('SitPublicationsBillingDefCopyWithinAgreementComponent', () => {
  let component: SitPublicationsBillingDefCopyWithinAgreementComponent;
  let fixture: ComponentFixture<SitPublicationsBillingDefCopyWithinAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingDefCopyWithinAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingDefCopyWithinAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

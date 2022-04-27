import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerCreditLimitScoresAcceptComponent } from './sit-customer-credit-limit-scores-accept.component';

describe('SitCustomerCreditLimitScoresAcceptComponent', () => {
  let component: SitCustomerCreditLimitScoresAcceptComponent;
  let fixture: ComponentFixture<SitCustomerCreditLimitScoresAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerCreditLimitScoresAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerCreditLimitScoresAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

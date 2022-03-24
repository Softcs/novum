import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerCreditLimitScoresComponent } from './sit-customer-credit-limit-scores.component';

describe('SitCustomerCreditLimitScoresComponent', () => {
  let component: SitCustomerCreditLimitScoresComponent;
  let fixture: ComponentFixture<SitCustomerCreditLimitScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerCreditLimitScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerCreditLimitScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

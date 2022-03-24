import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerCreditLimitScoresGenComponent } from './sit-customer-credit-limit-scores-gen.component';

describe('SitCustomerCreditLimitScoresGenComponent', () => {
  let component: SitCustomerCreditLimitScoresGenComponent;
  let fixture: ComponentFixture<SitCustomerCreditLimitScoresGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerCreditLimitScoresGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerCreditLimitScoresGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerCreditLimitScoresEditComponent } from './sit-customer-credit-limit-scores-edit.component';

describe('SitCustomerCreditLimitScoresEditComponent', () => {
  let component: SitCustomerCreditLimitScoresEditComponent;
  let fixture: ComponentFixture<SitCustomerCreditLimitScoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerCreditLimitScoresEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerCreditLimitScoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

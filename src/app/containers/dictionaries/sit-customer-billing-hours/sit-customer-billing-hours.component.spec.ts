import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerBillingHoursComponent } from './sit-customer-billing-hours.component';

describe('SitCustomerBillingHoursComponent', () => {
  let component: SitCustomerBillingHoursComponent;
  let fixture: ComponentFixture<SitCustomerBillingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerBillingHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerBillingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

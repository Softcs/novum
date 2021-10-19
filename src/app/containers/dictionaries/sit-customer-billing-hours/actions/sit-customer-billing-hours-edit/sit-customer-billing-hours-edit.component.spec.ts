import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerBillingHoursEditComponent } from './sit-customer-billing-hours-edit.component';

describe('SitCustomerBillingHoursEditComponent', () => {
  let component: SitCustomerBillingHoursEditComponent;
  let fixture: ComponentFixture<SitCustomerBillingHoursEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerBillingHoursEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerBillingHoursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

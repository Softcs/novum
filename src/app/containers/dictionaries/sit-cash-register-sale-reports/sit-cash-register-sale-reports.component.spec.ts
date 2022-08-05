import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCashRegisterSaleReportsComponent } from './sit-cash-register-sale-reports.component';

describe('SitCashRegisterSaleReportsComponent', () => {
  let component: SitCashRegisterSaleReportsComponent;
  let fixture: ComponentFixture<SitCashRegisterSaleReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCashRegisterSaleReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCashRegisterSaleReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

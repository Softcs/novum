import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCashRegisterSaleReportsExportComponent } from './sit-cash-register-sale-reports-export.component';

describe('SitCashRegisterSaleReportsExportComponent', () => {
  let component: SitCashRegisterSaleReportsExportComponent;
  let fixture: ComponentFixture<SitCashRegisterSaleReportsExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCashRegisterSaleReportsExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCashRegisterSaleReportsExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

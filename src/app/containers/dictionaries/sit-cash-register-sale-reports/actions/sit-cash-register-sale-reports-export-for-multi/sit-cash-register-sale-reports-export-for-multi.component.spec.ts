import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCashRegisterSaleReportsExportForMultiComponent } from './sit-cash-register-sale-reports-export-for-multi.component';

describe('SitCashRegisterSaleReportsExportForMultiComponent', () => {
  let component: SitCashRegisterSaleReportsExportForMultiComponent;
  let fixture: ComponentFixture<SitCashRegisterSaleReportsExportForMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCashRegisterSaleReportsExportForMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCashRegisterSaleReportsExportForMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCashRegisterSaleReportsImportComponent } from './sit-cash-register-sale-reports-import.component';

describe('SitCashRegisterSaleReportsImportComponent', () => {
  let component: SitCashRegisterSaleReportsImportComponent;
  let fixture: ComponentFixture<SitCashRegisterSaleReportsImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCashRegisterSaleReportsImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCashRegisterSaleReportsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

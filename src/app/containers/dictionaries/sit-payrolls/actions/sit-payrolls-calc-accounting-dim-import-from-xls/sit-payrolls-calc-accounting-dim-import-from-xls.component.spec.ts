import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollsCalcAccountingDimImportFromXLSComponent } from './sit-payrolls-calc-accounting-dim-import-from-xls.component';

describe('SitPayrollsCalcAccountingDimImportFromXLSComponent', () => {
  let component: SitPayrollsCalcAccountingDimImportFromXLSComponent;
  let fixture: ComponentFixture<SitPayrollsCalcAccountingDimImportFromXLSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPayrollsCalcAccountingDimImportFromXLSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollsCalcAccountingDimImportFromXLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

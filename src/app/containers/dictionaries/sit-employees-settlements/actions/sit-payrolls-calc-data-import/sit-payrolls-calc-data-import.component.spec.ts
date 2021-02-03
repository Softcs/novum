import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollsCalcDataImportComponent } from './sit-payrolls-calc-data-import.component';

describe('SitPayrollsCalcDataImportComponent', () => {
  let component: SitPayrollsCalcDataImportComponent;
  let fixture: ComponentFixture<SitPayrollsCalcDataImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPayrollsCalcDataImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollsCalcDataImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

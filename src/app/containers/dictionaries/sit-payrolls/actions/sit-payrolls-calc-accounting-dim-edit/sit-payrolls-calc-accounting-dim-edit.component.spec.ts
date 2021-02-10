import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollsCalcAccountingDimEditComponent } from './sit-payrolls-calc-accounting-dim-edit.component';

describe('SitPayrollsCalcAccountingDimEditComponent', () => {
  let component: SitPayrollsCalcAccountingDimEditComponent;
  let fixture: ComponentFixture<SitPayrollsCalcAccountingDimEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPayrollsCalcAccountingDimEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollsCalcAccountingDimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

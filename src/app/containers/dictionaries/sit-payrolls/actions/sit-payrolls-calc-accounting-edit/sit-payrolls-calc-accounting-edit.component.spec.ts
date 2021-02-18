import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollsCalcAccountingEditComponent } from './sit-payrolls-calc-accounting-edit.component';

describe('SitPayrollsCalcAccountingEditComponent', () => {
  let component: SitPayrollsCalcAccountingEditComponent;
  let fixture: ComponentFixture<SitPayrollsCalcAccountingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPayrollsCalcAccountingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollsCalcAccountingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

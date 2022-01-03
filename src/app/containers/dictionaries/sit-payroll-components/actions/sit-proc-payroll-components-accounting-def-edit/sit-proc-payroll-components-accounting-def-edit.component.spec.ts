import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitProcPayrollComponentsAccountingDefEditComponent } from './sit-proc-payroll-components-accounting-def-edit.component';

describe('SitProcPayrollComponentsAccountingDefEditComponent', () => {
  let component: SitProcPayrollComponentsAccountingDefEditComponent;
  let fixture: ComponentFixture<SitProcPayrollComponentsAccountingDefEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProcPayrollComponentsAccountingDefEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProcPayrollComponentsAccountingDefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

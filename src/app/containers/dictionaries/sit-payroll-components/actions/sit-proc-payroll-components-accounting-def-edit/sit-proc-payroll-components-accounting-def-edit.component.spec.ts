import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProcPayrollComponentsAccountingDefEditComponent } from './sit-proc-payroll-components-accounting-def-edit.component';

describe('SitProcPayrollComponentsAccountingDefEditComponent', () => {
  let component: SitProcPayrollComponentsAccountingDefEditComponent;
  let fixture: ComponentFixture<SitProcPayrollComponentsAccountingDefEditComponent>;

  beforeEach(async(() => {
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

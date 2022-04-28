import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollComponentsSettlementsColumnsEditComponent } from './sit-payroll-components-settlements-columns-edit.component';

describe('SitPayrollComponentsSettlementsColumnsEditComponent', () => {
  let component: SitPayrollComponentsSettlementsColumnsEditComponent;
  let fixture: ComponentFixture<SitPayrollComponentsSettlementsColumnsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPayrollComponentsSettlementsColumnsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollComponentsSettlementsColumnsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollComponentsEditComponent } from './sit-payroll-components-edit.component';

describe('SitPayrollComponentsEditComponent', () => {
  let component: SitPayrollComponentsEditComponent;
  let fixture: ComponentFixture<SitPayrollComponentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPayrollComponentsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollComponentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

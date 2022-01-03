import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitPayrollComponentsComponent } from './sit-payroll-components.component';

describe('SitPayrollComponentsComponent', () => {
  let component: SitPayrollComponentsComponent;
  let fixture: ComponentFixture<SitPayrollComponentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitPayrollComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

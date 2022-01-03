import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitPayrollImportComponent } from './sit-payroll-import.component';

describe('SitPayrollImportComponent', () => {
  let component: SitPayrollImportComponent;
  let fixture: ComponentFixture<SitPayrollImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitPayrollImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

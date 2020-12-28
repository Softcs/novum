import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollImportComponent } from './sit-payroll-import.component';

describe('SitPayrollImportComponent', () => {
  let component: SitPayrollImportComponent;
  let fixture: ComponentFixture<SitPayrollImportComponent>;

  beforeEach(async(() => {
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

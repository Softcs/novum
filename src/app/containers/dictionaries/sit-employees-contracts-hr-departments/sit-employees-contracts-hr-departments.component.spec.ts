import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeesContractsHrDepartmentsComponent } from './sit-employees-contracts-hr-departments.component';

describe('SitEmployeesContractsHrDepartmentsComponent', () => {
  let component: SitEmployeesContractsHrDepartmentsComponent;
  let fixture: ComponentFixture<SitEmployeesContractsHrDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeesContractsHrDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeesContractsHrDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

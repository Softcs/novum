import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitParams4EmployeesSettlementsEditComponent } from './sit-params4-employees-settlements-edit.component';

describe('SitParams4EmployeesSettlementsEditComponent', () => {
  let component: SitParams4EmployeesSettlementsEditComponent;
  let fixture: ComponentFixture<SitParams4EmployeesSettlementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitParams4EmployeesSettlementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitParams4EmployeesSettlementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

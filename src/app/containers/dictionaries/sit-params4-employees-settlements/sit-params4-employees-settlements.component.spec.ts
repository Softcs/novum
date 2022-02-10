import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitParams4EmployeesSettlementsComponent } from './sit-params4-employees-settlements.component';

describe('SitParams4EmployeesSettlementsComponent', () => {
  let component: SitParams4EmployeesSettlementsComponent;
  let fixture: ComponentFixture<SitParams4EmployeesSettlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitParams4EmployeesSettlementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitParams4EmployeesSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

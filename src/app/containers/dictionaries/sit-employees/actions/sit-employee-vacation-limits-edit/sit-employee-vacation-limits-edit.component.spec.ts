import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeeVacationLimitsEditComponent } from './sit-employee-vacation-limits-edit.component';

describe('SitEmployeeVacationLimitsEditComponent', () => {
  let component: SitEmployeeVacationLimitsEditComponent;
  let fixture: ComponentFixture<SitEmployeeVacationLimitsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeeVacationLimitsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeeVacationLimitsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

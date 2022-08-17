import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeeAbsencesEditComponent } from './sit-employee-absences-edit.component';

describe('SitEmployeeAbsencesEditComponent', () => {
  let component: SitEmployeeAbsencesEditComponent;
  let fixture: ComponentFixture<SitEmployeeAbsencesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeeAbsencesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeeAbsencesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

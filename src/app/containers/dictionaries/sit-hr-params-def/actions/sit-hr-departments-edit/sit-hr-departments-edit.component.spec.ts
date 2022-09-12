import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHrDepartmentsEditComponent } from './sit-hr-departments-edit.component';

describe('SitHrDepartmentsEditComponent', () => {
  let component: SitHrDepartmentsEditComponent;
  let fixture: ComponentFixture<SitHrDepartmentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHrDepartmentsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHrDepartmentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

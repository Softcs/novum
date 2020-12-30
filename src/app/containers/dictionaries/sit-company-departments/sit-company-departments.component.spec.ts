import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCompanyDepartmentsComponent } from './sit-company-departments.component';

describe('SitCompanyDepartmentsComponent', () => {
  let component: SitCompanyDepartmentsComponent;
  let fixture: ComponentFixture<SitCompanyDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitCompanyDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCompanyDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

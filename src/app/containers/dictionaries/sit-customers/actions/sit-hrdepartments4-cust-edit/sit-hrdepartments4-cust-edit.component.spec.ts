import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHRDepartments4CustEditComponent } from './sit-hrdepartments4-cust-edit.component';

describe('SitHRDepartments4CustEditComponent', () => {
  let component: SitHRDepartments4CustEditComponent;
  let fixture: ComponentFixture<SitHRDepartments4CustEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHRDepartments4CustEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHRDepartments4CustEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

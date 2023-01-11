import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementCustomerRolesEditComponent } from './sit-agreement-customer-roles-edit.component';

describe('SitAgreementCustomerRolesEditComponent', () => {
  let component: SitAgreementCustomerRolesEditComponent;
  let fixture: ComponentFixture<SitAgreementCustomerRolesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementCustomerRolesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementCustomerRolesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

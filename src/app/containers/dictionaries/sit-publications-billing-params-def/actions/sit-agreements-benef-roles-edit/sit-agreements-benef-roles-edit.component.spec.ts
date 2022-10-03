import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementsBenefRolesEditComponent } from './sit-agreements-benef-roles-edit.component';

describe('SitAgreementsBenefRolesEditComponent', () => {
  let component: SitAgreementsBenefRolesEditComponent;
  let fixture: ComponentFixture<SitAgreementsBenefRolesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementsBenefRolesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsBenefRolesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

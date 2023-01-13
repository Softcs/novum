import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementUsersEditComponent } from './sit-agreement-users-edit.component';

describe('SitAgreementUsersEditComponent', () => {
  let component: SitAgreementUsersEditComponent;
  let fixture: ComponentFixture<SitAgreementUsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementUsersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

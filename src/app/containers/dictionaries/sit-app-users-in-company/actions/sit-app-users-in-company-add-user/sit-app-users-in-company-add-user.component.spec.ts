import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAppUsersInCompanyAddUserComponent } from './sit-app-users-in-company-add-user.component';

describe('SitAppUsersInCompanyAddUserComponent', () => {
  let component: SitAppUsersInCompanyAddUserComponent;
  let fixture: ComponentFixture<SitAppUsersInCompanyAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAppUsersInCompanyAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAppUsersInCompanyAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

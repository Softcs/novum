import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAppUsersInCompanyEditComponent } from './sit-app-users-in-company-edit.component';

describe('SitAppUsersInCompanyEditComponent', () => {
  let component: SitAppUsersInCompanyEditComponent;
  let fixture: ComponentFixture<SitAppUsersInCompanyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAppUsersInCompanyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAppUsersInCompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

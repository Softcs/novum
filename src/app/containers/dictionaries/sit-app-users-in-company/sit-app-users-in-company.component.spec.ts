import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAppUsersInCompanyComponent } from './sit-app-users-in-company.component';

describe('SitAppUsersInCompanyComponent', () => {
  let component: SitAppUsersInCompanyComponent;
  let fixture: ComponentFixture<SitAppUsersInCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAppUsersInCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAppUsersInCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

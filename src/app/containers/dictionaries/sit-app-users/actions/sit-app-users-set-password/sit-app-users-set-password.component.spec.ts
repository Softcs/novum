import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAppUsersSetPasswordComponent } from './sit-app-users-set-password.component';

describe('SitAppUsersSetPasswordComponent', () => {
  let component: SitAppUsersSetPasswordComponent;
  let fixture: ComponentFixture<SitAppUsersSetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAppUsersSetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAppUsersSetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

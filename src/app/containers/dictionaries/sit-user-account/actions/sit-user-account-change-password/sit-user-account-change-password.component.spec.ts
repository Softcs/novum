import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitUserAccountChangePasswordComponent } from './sit-user-account-change-password.component';

describe('SitUserAccountChangePasswordComponent', () => {
  let component: SitUserAccountChangePasswordComponent;
  let fixture: ComponentFixture<SitUserAccountChangePasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitUserAccountChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUserAccountChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

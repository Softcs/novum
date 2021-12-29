import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitAppUsersEditComponent } from './sit-app-users-edit.component';

describe('SitAppUsersEditComponent', () => {
  let component: SitAppUsersEditComponent;
  let fixture: ComponentFixture<SitAppUsersEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAppUsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAppUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

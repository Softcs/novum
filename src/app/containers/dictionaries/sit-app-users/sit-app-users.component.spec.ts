import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitAppUsersComponent } from './sit-app-users.component';

describe('SitAppUsersComponent', () => {
  let component: SitAppUsersComponent;
  let fixture: ComponentFixture<SitAppUsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAppUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAppUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

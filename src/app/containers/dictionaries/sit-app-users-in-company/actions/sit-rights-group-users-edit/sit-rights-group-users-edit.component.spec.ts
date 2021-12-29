import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitRightsGroupUsersEditComponent } from './sit-rights-group-users-edit.component';

describe('SitRightsGroupUsersEditComponent', () => {
  let component: SitRightsGroupUsersEditComponent;
  let fixture: ComponentFixture<SitRightsGroupUsersEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitRightsGroupUsersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRightsGroupUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAppUsersEditComponent } from './sit-app-users-edit.component';

describe('SitAppUsersEditComponent', () => {
  let component: SitAppUsersEditComponent;
  let fixture: ComponentFixture<SitAppUsersEditComponent>;

  beforeEach(async(() => {
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

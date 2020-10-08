import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAppUsersComponent } from './sit-app-users.component';

describe('SitAppUsersComponent', () => {
  let component: SitAppUsersComponent;
  let fixture: ComponentFixture<SitAppUsersComponent>;

  beforeEach(async(() => {
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRightsGroupUsersEditComponent } from './sit-rights-group-users-edit.component';

describe('SitRightsGroupUsersEditComponent', () => {
  let component: SitRightsGroupUsersEditComponent;
  let fixture: ComponentFixture<SitRightsGroupUsersEditComponent>;

  beforeEach(async(() => {
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
